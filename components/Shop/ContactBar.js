import React from 'react';

const ContactBar = (props) => {
    return (
        <div className='contact-bar-wrapper'>
            <div className='image-header'>

            </div>
            <div className='contact-body'>
                <div className='row'>
                    <div className='col-3'><img className="shop-nav-subimg" src={require("../../images/shop/sidebar_svg/1. Imagine.png")}/></div>
                    <div className='col-9'>
                        <div className="shop-nav-subtitle">
                            IMAGINE SOFTWARE
                        </div>
                        <div className="shop-nav-subtext">
                            Pre-installed and configured
                        </div>
                    </div>
                    <div className="shop-nav-subline"></div>
                </div>
                <div className='row'>
                    <div className='col-3'><img className="shop-nav-subimg" src={require("../../images/shop/sidebar_svg/2. Payment.svg")}/></div>
                    <div className='col-9'>
                        <div className="shop-nav-subtitle">
                            PAYMENT PROTECTION
                        </div>
                        <div className="shop-nav-subtext">
                            South Africa and international
                        </div>
                    </div>
                    <div className="shop-nav-subline"></div>
                </div>
                <div className='row'>
                    <div className='col-3'><img className="shop-nav-subimg" src={require("../../images/shop/sidebar_svg/3. Delivery.svg")}/></div>
                    <div className='col-9'>
                        <div className="shop-nav-subtitle">
                            DELIVERY AVAILABLE
                        </div>
                        <div className="shop-nav-subtext">
                            Local or international delivery
                        </div>
                    </div>
                    <div className="shop-nav-subline"></div>
                </div>
                <div className='row'>
                    <div className='col-3'><img className="shop-nav-subimg" src={require("../../images/shop/sidebar_svg/4. Warranty.svg")}/></div>
                    <div className='col-9'>
                        <div className="shop-nav-subtitle">
                            WARRANTY
                        </div>
                        <div className="shop-nav-subtext">
                            2~3 year Manufacture warranty
                        </div>
                    </div>
                    <div className="shop-nav-subline"></div>
                </div>
            </div>
        </div>
    )

};

export default ContactBar;