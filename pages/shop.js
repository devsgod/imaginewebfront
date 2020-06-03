import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import Banner from '../components/Shop/Banner';
import ShopVTwo from '../components/Shop/ShopVTwo';

import ShopVOneA from '../components/Shop/ShopVOneA';

class ShopOne extends Component {

    componentDidMount() {
        localStorage.removeItem('orderData');
        localStorage.removeItem('paymentType');
    }

    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Banner />
                <ShopVTwo />
                <Footer />
            </React.Fragment>
        );
    }
}

export default ShopOne;