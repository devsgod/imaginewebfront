import React, { Component } from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import { addedToCart } from '../../store/actions/cartActions';

import axios from 'axios';
import config from "../../config/config.json";
import ViewSlider from 'react-view-slider';
// import components
import ProductMainListItem from './ProductMainListItem';

import {Button, Grid, Tooltip} from "@material-ui/core";
import Pagination from '@material-ui/lab/Pagination';
import FilterSlider from "./FilterSlider";
import ContactBar from './ContactBar';
import {compose} from "redux";

import withStyles from "@material-ui/core/styles/withStyles";
import FilterSelect from "./FilterSelect";
import FilterCurrencySelect from "./FilterCurrencySelect";
import SideCategoryBar from './SideCategoryBar';
import Rating from "@material-ui/lab/Rating/Rating";
import StarBorderIcon from '@material-ui/icons/StarBorder';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import LoadingOverlay from 'react-loading-overlay';
import {PayPalButton} from "react-paypal-button-v2";

const currency_data = [
    {
        mark: "R",
        rate: 17.36,
    },
    {
        mark: "$",
        rate: 1,
    },
    {
        mark: "€",
        rate: 0.93,
    },
    {
        mark: "£",
        rate: 0.86,
    },
];

const useStyles = (theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },

    paginationUl : {
        alignItems : 'center',
        justifyContent : 'center'
    }
});

class ShopVTwo extends Component {
    constructor(props){
        super(props);
        this.state = {
            direct_products: null, // from server
            filterValue : [0, 0],       // temp
            defaultFilter : [0, 0],

            productCount : 0,
            paginationCount : 0,
            maxValue : 600,
            bInitState : true,

            // values for search, filter
            categoryValue : '',
            searchValue : '',
            sortValue : 'rating',
            categories : [],
            selectedCategoryId : 0,
            stepValue : 0,
            recordCount : 0,
            showStartValue : 0,
            showEndValue : 0,

            bShowProductInfo : false,
            indexNumber : 0,
            loadingProducts : true,
            productInfoCount : 1,
            productInfo : {
                productId : '',
                imageSrc : '',
                productName : '',
                price : 0,
                oldPrice : 0,
                description : '',
                ratingValue : 0,
                quantity : 0,
            },
            currency_id :0
        }
    }

    onSelectCategory = (categoryName, selectId) => {

        this.setState({
            categoryValue : categoryName,
            selectedCategoryId : selectId,
            stepValue : 0,
        }, () => {
            this.FetchData();
        });
    };

    onChangeQuantity = (bPlus) => {
        let count = this.state.productInfoCount;

        let addCount = 1;

        if (bPlus === false) {
            if (count < 1) {
                alert('you cannot select 0');
            }
            else {
                count--;
            }
        }
        else {
            count ++;
        }

        this.setState({
            productInfoCount : count
        });
    };

    onProductToCart = () => {
        let savedLocalCart = localStorage.getItem('cart_data');

        let productInfoCount = this.state.productInfoCount;

        const {productId, imageSrc, productName, price, oldPrice, description, ratingValue, quantity} = this.state.productInfo;
        const { currency_id } = this.state;
        var price_rand = 0;
        var oldPrice_rand = 0;
        price_rand = price / currency_data[currency_id].rate * currency_data[0].rate;
        oldPrice_rand = oldPrice / currency_data[currency_id].rate * currency_data[0].rate;


        let savedData = {};
        if (savedLocalCart) {
            savedData = JSON.parse(savedLocalCart);

            if(savedData[productId]) {
                let currentQuantity = savedData[productId].quantity;
                savedData[productId].quantity = currentQuantity + productInfoCount;
            }
            else {
                savedData[productId] = {
                    imageSrc,
                    productName,
                    price_rand,
                    oldPrice_rand,
                    ratingValue,
                    totalQuantity : quantity,
                    quantity : productInfoCount,
                    checked  : false,
                    currency_id
                }
            }
        }
        else {
            savedData[productId] = {
                imageSrc,
                productName,
                price_rand,
                oldPrice_rand,
                ratingValue,
                totalQuantity : quantity,
                quantity : productInfoCount,
                checked : false,
                currency_id
            }
        }

        localStorage.setItem('cart_data', JSON.stringify(savedData));
        console.log("savedData", savedData);
        this.props.addedToCart(productInfoCount);
    };

    onProductDetail = (data) => {
        const {productId, productName, imageSrc, price, oldPrice,
            ratingValue, quantity, description} = data;
        this.setState({
            productInfo : {
                productId,
                productName,
                imageSrc,
                price,
                oldPrice,
                description,
                ratingValue,
                quantity
            }
        }, () => {
            setTimeout(() => {
                this.setState({
                    indexNumber : 1
                })
            }, 500);
        })
    };

    onSelectPagination = (event, pageNumber) => {
        let realPageNumber = (pageNumber - 1) * 10;
        this.setState({
            stepValue : realPageNumber
        }, () => {
            this.FetchData();
        });
    };

    componentDidMount() {
        this.FetchData();
    }

    async FetchData () {
        const sendData = {
            searchValue : this.state.searchValue,
            categoryValue : this.state.categoryValue,
            sortValue : this.state.sortValue,
            stepValue : this.state.stepValue,
            minPrice : this.state.filterValue[0],
            maxPrice : this.state.filterValue[1],
            maxValue : this.state.maxValue,
            bInitState : this.state.bInitState,
            currency_id : this.state.currency_id
        };

        this.setState({
            loadingProducts : true
        });
        await axios.post(config.ALL_PRODUCTS, sendData)
            .then(response => {
                var result = response.data.result;
                if (response.data.maxValue) {
                    let realValue = parseInt(response.data.maxValue);

                    this.setState({
                        bInitState : false,
                        maxValue : realValue,
                        filterValue : [0, realValue],
                        defaultFilter : [0, realValue]
                    })
                }

                if (response.data.categories) {
                    this.setState({
                        categories : response.data.categories
                    })
                }

                this.setState({
                    showStartValue : response.data.recordCount > 0 ? this.state.stepValue + 1 : 0,
                    showEndValue : this.state.stepValue + result.length,
                    direct_products : result,
                    productCount : response.data.recordCount,
                    paginationCount : Math.floor((response.data.recordCount - 1) / 10),
                    loadingProducts : false
                });
            })
            .catch(function (error) {
            });
    };

    onFilterClick = () => {
        this.setState({
            stepValue : 0
        }, () => {
            this.FetchData();
        });
    };

    onSearchProducts = () => {
        this.setState({
            stepValue : 0
        }, () => {
            this.FetchData();
        });
    };

    onChangefilter = (event, newValue) => {
        this.setState({
            filterValue : newValue
        });
    };

    onAddToCart = (productId, imageSrc, productName, price, oldPrice, ratingValue, totalQuantity) => {
        let savedLocalCart = localStorage.getItem('cart_data');
        let savedData = {};
        let { currency_id } = this.state;

        var price_rand = 0;
        var oldPrice_rand = 0;
        price_rand = price / currency_data[currency_id].rate * currency_data[0].rate;
        oldPrice_rand = price / currency_data[currency_id].rate * currency_data[0].rate;
        
        if (savedLocalCart) {
            savedData = JSON.parse(savedLocalCart);

            if(savedData[productId]) {
                let currentQuantity = savedData[productId].quantity;
                savedData[productId].quantity = ++currentQuantity;
            }
            else {
                savedData[productId] = {
                    imageSrc,
                    productName,
                    price_rand,
                    oldPrice_rand,
                    ratingValue,
                    totalQuantity,
                    quantity : 1,
                    checked : false,
                    currency_id
                }
            }
        }
        else {
            savedData[productId] = {
                imageSrc,
                productName,
                price_rand,
                oldPrice_rand,
                ratingValue,
                totalQuantity,
                quantity : 1,
                checked : false,
                currency_id
            }
        }

        localStorage.setItem('cart_data', JSON.stringify(savedData));
        console.log(savedData);
        this.props.addedToCart(1);

    };

    onSelectSort = (event) => {
        this.setState({
            sortValue : event.value
        }, () => {
            this.FetchData();
        })
    };

    onSeletCurrency = (event) => {
        this.setState({
            currency_id : event.value
        });
    };

    renderView = ({index, key}) => {
        let { currency_id } = this.state;
        if (index === 0) {
            return (
                <div key={key} className="container">
                    <div className="section-title">
                        <h2>Our products</h2>
                        <div className="bar"></div>
                        <p style={{marginBottom: 50}}>All hardware can be pre-installed with Imagine, configured for optimal performance,  installed on premises, or delivered for self setup.</p>
                    </div>
                    <LoadingOverlay active={this.state.loadingProducts}
                                    spinner
                                    text="Loading products">
                        <div className="row">
                            <div className="col-lg-4 col-md-12">
                                <div className="sidebar-area">
                                    <div className="widget widget-search" style={{paddingRight:'40px'}}>
                                        <div>
                                            <input type="text" onChange={(e) => {this.setState({searchValue : e.target.value})}} className="form-control" placeholder="Search" />
                                            <button onClick={() => this.onSearchProducts()} type="button"><i className="icofont-search-2"></i></button>
                                        </div>
                                    </div>

                                    <div className='widget' style={{paddingBottom:'40px'}}>
                                        <h3 className="widget-title">Filter by price</h3>
                                        <div className="bar"></div>
                                        <div style={{padding:'0 20% 0 10px'}}>
                                            <FilterSlider
                                                filtervalue={this.state.filterValue}
                                                defaultValue={[0, 650]}
                                                // value={this.state.filterValue}
                                                // max={this.state.maxValue}
                                                max={this.state.maxValue}
                                                onChangeCommitted={this.onChangefilter}
                                                valueLabelDisplay="auto"
                                                aria-labelledby="range-slider"
                                            />
                                            <div>
                                                <div style={{float:'left'}}>
                                                    <Button onClick={this.onFilterClick} variant="contained" color="default">Filter</Button>
                                                </div>
                                                <div style={{float:'right'}}>
                                                    <label>Price : {'$'}{this.state.filterValue[0]} - {'$'}{this.state.filterValue[1]}</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='widget widget_product_categories'>
                                        <SideCategoryBar selectedId={this.state.selectedCategoryId} onSelectCategory={this.onSelectCategory} categories={this.state.categories}/>
                                    </div>
                                    <div className='widget widget_product_categories'>
                                        <ContactBar/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-12">
                                <div className="row">
                                    <div className="col-lg-12 col-md-12">
                                        <div className="row justify-content-between align-items-center shop-head-line" style={{paddingBottom:'40px'}}>
                                            <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12 mb-2 mt-2 justify-content-start">
                                                <label style={{marginBottom:'0'}}>Showing {this.state.showStartValue} - {this.state.showEndValue} of {this.state.productCount} Results</label>
                                            </div>
                                            <div className="col-lg-5 col-md-12 col-sm-12 col-xs-12 mb-2 mt-2 align-items-center justify-content-start" style={{display:'flex'}}>
                                                <label style={{fontWeight:'bold'}}>Sort by</label>
                                                <FilterSelect onChange={this.onSelectSort}/>
                                            </div>
                                            <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12 mb-2 mt-2 align-items-center justify-content-start" style={{display:'flex'}}>
                                                <label style={{fontWeight:'bold', marginBottom:'0'}}>Currency;</label>
                                                <FilterCurrencySelect onChange={this.onSeletCurrency}/>
                                            </div>
                                        </div>
                                    </div>
                                    {this.state.direct_products ? this.state.direct_products.map((data, idx) => (
                                        <div className="col-lg-12 col-md-12" key={idx}>
                                            <ProductMainListItem
                                                productId={data._id}
                                                imageSrc={config.SERVER_BASE_URL + data.imageurl}
                                                productName={data.name}
                                                currency={currency_data[currency_id].mark}
                                                currentPrice={(data.price * currency_data[currency_id].rate).toFixed(2)}
                                                oldPrice={(data.oldPrice * currency_data[currency_id].rate).toFixed(2)}
                                                ratingValue={(data.rating * currency_data[currency_id].rate).toFixed(2)}
                                                quantity={data.quantity}
                                                onAddToCart={this.onAddToCart}
                                                onProductDetail={this.onProductDetail}
                                                description={data.description ? data.description : ''}
                                            />
                                        </div>
                                    )) : "No products"}

                        </div>
                                {
                                    this.state.paginationCount > 0 &&
                                    <div className='row'>
                                        <div className='col-12 align-items-center'>
                                            <Pagination
                                                count={this.state.paginationCount > 9 ? 10 : this.state.paginationCount + 1}
                                                color="secondary"
                                                shape='round'
                                                boundaryCount={3}
                                                onChange={this.onSelectPagination}
                                            />
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                </LoadingOverlay>
            </div>
            );
        } else {
            return (
                <div className="container">
                    <Button
                        className="btn-gotoshop"
                        variant="text"
                        color="primary"
                        startIcon={<ArrowBackIcon/>}
                        onClick={() => {this.setState({indexNumber : 0})}}>Go to shop list</Button>
                    <div className="section-title">
                        <h2>Product Detail</h2>
                        <div className="bar"></div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="row single-product">
                                <div className="product-img col-lg-6 col-md-6 col-sm-12 px-0">
                                    <img src={this.state.productInfo.imageSrc} alt="item" style={{height : "550px"}} />
                                </div>
                                <div className="product-content col-lg-6 col-md-6 col-sm-12">
                                    <div className='row'>
                                        <div className='col-8'>
                                            <h3 style={{marginBottom : 0}}>
                                                <Link href="#">
                                                    <a style={{fontSize : 25}}>{this.state.productInfo.productName}</a>
                                                </Link>
                                            </h3>
                                        </div>
                                        <div className='col-4'>
                                            <Rating
                                                style={{zIndex:'0'}}
                                                name='rate1'
                                                defaultValue={parseFloat(this.state.productInfo.ratingValue)}
                                                readOnly={true}
                                                precision={0.1}
                                                emptyIcon={<StarBorderIcon fontSize="inherit"/>}
                                            />
                                        </div>
                                    </div>
                                    <h5>{currency_data[currency_id].mark}{this.state.productInfo.price} <span style={{marginLeft:'10px'}}>{this.state.productInfo.oldPrice && currency_data[currency_id].mark}{this.state.productInfo.oldPrice}</span></h5>
                                    <div className='description-wrapper textShowOrigin'>
                                        {
                                            this.state.productInfo.description
                                        }
                                    </div>
                                    <div className="product-btn-wrapper">
                                        <div className="px-3">
                                            <div className="product-quant">
                                                <button type="button" className="sub qty-btn" onClick={() => {
                                                    this.onChangeQuantity(false)
                                                }} data-btn-type="dec" data-id="62">-
                                                </button>
                                                <input type="number" className="get_value_62"
                                                       value={this.state.productInfoCount} min="1" max="3" readOnly/>
                                                <button type="button" onClick={() => {
                                                    this.onChangeQuantity(true)
                                                }}
                                                        className="add qty-btn"
                                                        data-btn-type="inc" data-id="62"
                                                        product-qty="56">+
                                                </button>
                                            </div>
                                        </div>
                                        <div className="px-3">
                                            <Tooltip title="Add to cart">
                                                <Button
                                                    variant="contained"
                                                    color="primary"
                                                    className="cart-btn"
                                                    onClick={this.onProductToCart}>
                                                    Add to cart
                                                </Button>
                                            </Tooltip>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    };

    render() {
        let { products, classes } = this.props;
        return (
            <section className="product-area ptb-100">
                <ViewSlider
                    renderView={this.renderView}
                    numViews={2}
                    activeView={this.state.indexNumber}
                    animateHeight
                />
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cartData: state.cart.cartData
    }
};

const mapDispatchToProps= (dispatch) => {
    return {
        addedToCart : (addedCount) => {dispatch(addedToCart(addedCount))}
    }
};

export default compose(
    withStyles(useStyles),
    connect(
        mapStateToProps,
        mapDispatchToProps
))(ShopVTwo);