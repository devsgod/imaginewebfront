import React from 'react';
import { withRouter } from 'next/router';
import { connect } from 'react-redux'
import Link from '../../utils/ActiveLink';
import SideDrawer from './SideDrawer';
import SearchForm from './SearchForm';

import Topbar from './Topbar';
import {addedToCart, initCartCountSet} from "../../store/actions/cartActions";

// import 'lazysizes';
// // import a plugin
// import 'lazysizes/plugins/parent-fit/ls.parent-fit';

class Navbar extends React.Component {
    _isMounted = false;

    state = {
        drawer: false,
        searchForm: false,
        collapsed: true,
    };

    toggleNavbar = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
        // if (this.state.collapsed) {document.body.style.overflow = "hidden";} else {document.body.style.overflow = "scroll";}
    };

    handleDrawer = () => {
        this.setState( prevState => {
            return {
                drawer: !prevState.drawer
            };
        });
    };

    handleSearchForm = () => {
        this.setState( prevState => {
            return {
                searchForm: !prevState.searchForm
            };
        });
    };

    componentDidMount() {
        this._isMounted = true;
        var ratio = window.devicePixelRatio || 1;
        var w = screen.width;
        console.log(w)
        if (w>768){
            let elementId = document.getElementById("navbar");
            document.addEventListener("scroll", () => {
                if (window.scrollY > 170) {
                    elementId.classList.add("is-sticky");
                } else {
                    elementId.classList.remove("is-sticky");
                }
            });
            window.scrollTo(0, 0);
        }
        

        // set cart count

        const link_route = window.location.href;
        var url = new URL(link_route);
        var successState = url.searchParams.get("orderid");

            let localCartsCount = localStorage.getItem('cart_count');
            let realCount = 0;

            if (successState == "" || successState == undefined){
                if (localCartsCount) {
                    realCount = parseInt(localCartsCount);
                }
            } else {
                localStorage.removeItem('cart_data');
                localStorage.removeItem('cart_count');
            }

            this.props.iniCartCountSet(realCount);

    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        let { pathname } = this.props.router;
        let { cartCount } = this.props;

        let layOutCls = '';
        let logo = require('../../images/logo.png');
        if (pathname == '/digital-marketing'){
            layOutCls = 'marketing-navbar';
            logo = require('../../images/logo2.png');
        }

        const { collapsed } = this.state;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
        
        return (
            <React.Fragment>
                <div>
                <header id="header">
                    <Topbar />
                    <div id="navbar" className={`crake-nav ${layOutCls}`}>
                        <div className="container">
                            <nav className="navbar navbar-expand-md navbar-light">
                                <Link href="/">
                                    <a className="navbar-brand">
                                        <img data-src={logo} alt="logo" className="lazyload" />
                                    </a>
                                </Link>

                                <button 
                                    onClick={this.toggleNavbar} 
                                    className={classTwo}
                                    type="button" 
                                    data-toggle="collapse" 
                                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                                    aria-expanded="false" 
                                    aria-label="Toggle navigation"
                                >
                                    <span className="navbar-toggler-icon"></span>
                                </button>

                                <div className={classOne} id="navbarSupportedContent">
                                    <ul className="navbar-nav nav ml-auto">                                        
                                        
                                        <li className="nav-item">
                                            <Link activeClassName="active" href="/">
                                                <a className="nav-link"><i className="icofont-home"></i> Home</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link activeClassName="active" href="#">
                                                <a className="nav-link">Software</a>
                                            </Link>
                                            <ul className="dropdown_menu">
                                                <li className="nav-item">
                                                    <Link activeClassName="active" href="/overview">
                                                        <a className="nav-link"><div className="icon text-center"><i className="icofont-paper-plane"></i></div> Overview</a>
                                                    </Link>
                                                </li> 
                                                <li className="nav-item">
                                                    <Link activeClassName="active" href="/features">
                                                        <a className="nav-link"><div className="icon text-center"><i className="icofont-newspaper"></i></div> Features</a>
                                                    </Link>
                                                </li> 
                                                <li className="nav-item">
                                                    <Link activeClassName="active" href="/widgets">
                                                        <a className="nav-link"><div className="icon text-center"><i className="icofont-responsive"></i></div> Widgets</a>
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link activeClassName="active" href="/licence">
                                                        <a className="nav-link"><div className="icon text-center"><i className="icofont-license"></i></div>Licence</a>
                                                    </Link>                                            
                                                </li>                                                                                          
                                            </ul>
                                        </li>       

                                        <li className="nav-item">
                                            <Link activeClassName="active" href="#">
                                                <a className="nav-link">Platforms</a>
                                            </Link>
                                            <ul className="dropdown_menu">
                                                <li className="nav-item">
                                                    <Link activeClassName="active" href="/windows">
                                                        <a className="nav-link"><div className="icon text-center"><i className="icofont-brand-windows"></i></div>Windows</a>
                                                    </Link>
                                                </li> 
                                                <li className="nav-item">
                                                    <Link activeClassName="active" href="/allinone">
                                                        <a className="nav-link"><div className="icon text-center"><i className="icofont-document-folder"></i></div> LG all in one</a>
                                                    </Link>
                                                </li> 
                                                <li className="nav-item">
                                                    <Link activeClassName="active" href="/android">
                                                        <a className="nav-link"><div className="icon text-center"><i className="icofont-brand-android-robot"></i></div> Android</a>
                                                    </Link>
                                                </li> 
                                                <li className="nav-item">
                                                    <Link activeClassName="active" href="/linux">
                                                        <a className="nav-link"><div className="icon text-center"><i className="icofont-penguin-linux"></i></div> Linux</a>
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link activeClassName="active" href="/comparrison">
                                                        <a className="nav-link"><div className="icon text-center"><i className="icofont-cubes"></i></div>Comparrison</a>
                                                    </Link>                                            
                                                </li>                                                                                          
                                            </ul>
                                        </li>                                    
                                        
                                        <li className="nav-item">
                                            <Link activeClassName="active" href="/shop">
                                                <a className="nav-link">Shop</a>
                                            </Link>                                            
                                        </li>  

                                        {/* <li className="nav-item"><a href="#" className="nav-link">Industries</a>
                                            <ul className="dropdown_menu">
                                                <li className="nav-item">
                                                    <Link activeClassName="active" href="/industries/retail">
                                                        <a className="nav-link"><div className="icon text-center"><i className="icofont-basket"></i></div> Retail</a>
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link activeClassName="active" href="/industries/restaurants">
                                                        <a className="nav-link"><div className="icon text-center"><i className="icofont-restaurant"></i></div> Restaurants</a>
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link activeClassName="active" href="/industries/education">
                                                        <a className="nav-link"><div className="icon text-center"><i className="icofont-education"></i></div> Education</a>
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link activeClassName="active" href="/industries/corporate">
                                                        <a className="nav-link"><div className="icon text-center"><i className="icofont-workers-group"></i></div> Corporate</a>
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link activeClassName="active" href="/industries/hospitality">
                                                        <a className="nav-link"><div className="icon text-center"><i className="icofont-gift"></i></div> Hospitality</a>
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link activeClassName="active" href="/industries/healthcare">
                                                        <a className="nav-link"><div className="icon text-center"><i className="icofont-heart-beat"></i></div> Healthcare</a>
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link activeClassName="active" href="/industries/gambling">
                                                        <a className="nav-link"><div className="icon text-center"><i className="icofont-bill"></i></div> Gambling</a>
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link activeClassName="active" href="/industries/outdoor">
                                                        <a className="nav-link"><div className="icon text-center"><i className="icofont-ui-home"></i></div> Outdoor</a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li> */}
                                        
                                        <li className="nav-item"><a href="#" className="nav-link">Company</a>
                                            <ul className="dropdown_menu">
                                                <li className="nav-item">
                                                    <Link activeClassName="active" href="/contact">
                                                        <a className="nav-link"><div className="icon text-center"><i className="icofont-ui-dial-phone"></i></div> Contact</a>
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link activeClassName="active" href="/clients">
                                                        <a className="nav-link"><div className="icon text-center"><i className="icofont-users"></i></div> Clients</a>
                                                    </Link>
                                                </li>
                                                {/* <li className="nav-item">
                                                    <Link activeClassName="active" href="/partners">
                                                        <a className="nav-link"><div className="icon text-center"><i className="icofont-users-social"></i></div> Partners</a>
                                                    </Link>
                                                </li> */}
                                                <li className="nav-item">
                                                    <Link activeClassName="active" href="/about">
                                                        <a className="nav-link"><div className="icon text-center"><i className="icofont-info"></i></div> About</a>
                                                    </Link>                                                    
                                                </li>                                               

                                                <li className="nav-item">
                                                    <Link activeClassName="active" href="/blog">
                                                        <a className="nav-link"><div className="icon text-center"><i className="icofont-price"></i></div> Blog</a>
                                                    </Link>                                                    
                                                </li>                                                
                                            </ul>
                                        </li>
                           
                                        {/* <li>
                                            <div className="col-12 sign-btns-nav">
                                                <Link href="/login">
                                                    <a>Sign in</a>
                                                </Link>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="col-12 sign-btns-nav">
                                                <Link href="/signup">
                                                    <a>Sign up</a>
                                                </Link>
                                            </div>
                                        </li> */}
                                    </ul>
                                </div>
                                <div className="mr-auto others-option">
                                    <ul className="navbar-nav">
                                        <li className="nav-item cart-wrapper">
                                            <Link activeClassName="active" href="/cart">
                                                <a>
                                                    <i style={{color : cartCount > 0 && '#ffbc00'}} className="icofont-shopping-cart cart-icon"></i>
                                                    <span style={{backgroundColor : cartCount > 0 && '#ff0101'}} >{cartCount}</span>
                                                </a>
                                            </Link>
                                        </li>                                        
                                        <li onClick={this.handleDrawer}>
                                            <div className="side-menu">
                                                <span className="bar-1"></span>
                                                <span className="bar-2"></span>
                                                <span className="bar-3"></span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="btn btn-primary mr-auto others-option">
                                    <Link href="/signup"><a className="nav-signup">Sign Up</a></Link>                                    
                                </div>
                            </nav>
                        </div> 
                    </div>
                </header>
                <div>
                {this.state.drawer ? <SideDrawer onClick={this.handleDrawer} /> : ''}
                {this.state.searchForm ? <SearchForm onClick={this.handleSearchForm} /> : ''}
                </div>

                
                </div>
                
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state)=>{
    return{
        cartCount : state.cart.cartCount
    }
};

const mapDispatchToProps = (dispatch) => ({
    iniCartCountSet : (initCount) => {dispatch(initCartCountSet(initCount))}
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar))
