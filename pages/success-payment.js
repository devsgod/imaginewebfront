import React, { Component } from 'react';
import Link from "next/link";
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import axios from "axios";
import config from "../config/config.json";
// import config from "../config/config_local.json";

class TeamOne extends Component {

    onInitData = () => {
        localStorage.removeItem('cart_data');
        localStorage.removeItem('cart_count');

        let data = {
            subTotal : 0,
            tax : 0,
            shipping : 0,
            total : 0,
            cartData : {}
        };

        console.log("Nice");

        props.onInitCartCount(0);
        props.onInitCheckout(data);
    };

    // componentWillMount(){
    //     this.onInitData();
    // }

    componentDidMount() {
        const link_route = window.location.href;
        var url = new URL(link_route);
        var orderid = url.searchParams.get("orderid");

        if (!!orderid)
            if (localStorage.getItem('orderData')){          
                                
                var sendData = JSON.parse(localStorage.getItem('orderData'));
                var paymentType = localStorage.getItem('paymentType');
                sendData.orderid = orderid;
                if (paymentType == 'payfast'){
                    axios.post(config.ADD_ORDER, sendData)
                        .then(response => {
                            console.log("ok",response);
                            localStorage.removeItem('orderData');
                            localStorage.removeItem('paymentType');
                            this.onInitData();                            
                        })
                        .catch(function (error) {
                        });
                }
            }
    }

    render() {
        return (
            <React.Fragment>
                <Navbar />
                <section className="page-title-banner">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h2>Thank You</h2>
                            </div>
                        </div>
                    </div>
                    <div className="shape3"><img src={require('../images/shape3.png')} alt="img" /></div>
                </section>
                <div className="thank-you-area">
                    <div className="container">
                        <h4 style={{lineHeight: "40px", fontSize:30}}>Successfully paid <br />
                        Please check your payment status!
                        </h4>
                        <Link href="/shop">
                            <a className="btn btn-primary mt-3">Go to shop page</a>
                        </Link>
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}

export default TeamOne;
