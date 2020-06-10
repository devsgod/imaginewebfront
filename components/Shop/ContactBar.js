import React from 'react';

const ContactBar = (props) => {
    return (
        <div className='contact-bar-wrapper'>
            <div className='image-header'>

            </div>
            <div className='contact-body'>
                <div className='row'>
                    <div className='col-3'><img style={{marginTop:"20px", padding:"5px"}} src={require("../../images/shop/sidebar_svg/1. Imagine.svg")}/></div>
                    <div className='col-9'>
                        <div style={{paddingTop : '20px'}}>
                            IMAGINE SOFTWARE
                        </div>
                        <div style={{paddingTop : '20px'}}>
                            Pre-installed and configured
                        </div>
                    </div>
                    <div style={{height: '10px', width : '100%', borderBottom : '1px solid #ffc800',
                        marginLeft : '40px', marginRight : '40px'
                    }}></div>
                </div>
                <div className='row'>
                    <div className='col-3'><img style={{marginTop:"20px", padding:"5px"}} src={require("../../images/shop/sidebar_svg/2. Payment.svg")}/></div>
                    <div className='col-9'>
                        <div style={{paddingTop : '20px'}}>
                            PAYMENT PROTECTION
                        </div>
                        <div style={{paddingTop : '20px'}}>
                            South Africa and international
                        </div>
                    </div>
                    <div style={{height: '10px', width : '100%', borderBottom : '1px solid #ffc800',
                        marginLeft : '40px', marginRight : '40px'
                    }}></div>
                </div>
                <div className='row'>
                    <div className='col-3'><img style={{marginTop:"20px", padding:"5px"}} src={require("../../images/shop/sidebar_svg/3. Delivery.svg")}/></div>
                    <div className='col-9'>
                        <div style={{paddingTop : '20px'}}>
                            DELIVERY AVAILABLE
                        </div>
                        <div style={{paddingTop : '20px'}}>
                            Local or international delivery
                        </div>
                    </div>
                    <div style={{height: '10px', width : '100%', borderBottom : '1px solid #ffc800',
                        marginLeft : '40px', marginRight : '40px'
                    }}></div>
                </div>
                <div className='row'>
                    <div className='col-3'><img style={{marginTop:"20px", padding:"5px"}} src={require("../../images/shop/sidebar_svg/4. Warranty.svg")}/></div>
                    <div className='col-9'>
                        <div style={{paddingTop : '20px'}}>
                            WARRANTY
                        </div>
                        <div style={{paddingTop : '20px'}}>
                            2~3 year Manufacture warranty
                        </div>
                    </div>
                    <div style={{height: '10px', width : '100%',
                        marginLeft : '40px', marginRight : '40px'
                    }}></div>
                </div>
            </div>
        </div>
    )

};

export default ContactBar;