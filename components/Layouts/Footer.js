import Link from 'next/link';

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer-area ptb-100 pb-0 bg-image">
                <div className="container">
                    <div className="row">

                    <div className="col-lg-1 col-md-6 mr-5">
                            <div className="single-footer-widget">
                                <h3>Industries</h3>

                                <ul className="list">
                                    <li>
                                        <Link href="/industries/retail">
                                            <a>Retail</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/industries/restaurants">
                                            <a>Restaurants</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/industries/education">
                                            <a>Education</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/industries/corporate">
                                            <a>Coporate</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/industries/hospitality">
                                            <a>Hospitality</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/industries/healthcare">
                                            <a>Healthcare</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/industries/gambling">
                                            <a>Casino</a>
                                        </Link>
                                    </li>                                    
                                    <li>
                                        <Link href="/industries/outdoor">
                                            <a>Outdoor</a>
                                        </Link>
                                    </li>    
                                </ul>
                            </div>
                        </div>            

                        <div className="col-lg-1 col-md-6 mr-5">
                            <div className="single-footer-widget">
                                <h3>Sofware</h3>
                                <ul className="list">
                                    <li>
                                        <Link href="/features">
                                            <a>Features</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/allinone">
                                            <a style={{ whiteSpace:"nowrap"}}>All in one</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/widgets">
                                            <a>Widgets</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/licence">
                                            <a>Licensing</a>
                                        </Link>
                                    </li>                                    
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-1 col-md-6 mr-5">
                            <div className="single-footer-widget">
                                <h3>Platform</h3>
                                <ul className="list">
                                    <li>
                                        <Link href="/features">
                                            <a>Windows</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/allinone">
                                            <a>Android</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/widgets">
                                            <a>LG</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/licence">
                                            <a>Linux</a>
                                        </Link>
                                    </li>                                    
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-1 col-md-6 mr-5">
                            <div className="single-footer-widget">
                                <h3>Company</h3>
                                <ul className="list">
                                    <li>
                                        <Link href="/about">
                                            <a>About us</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/contact">
                                            <a>Contact</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/clients">
                                            <a>Clients</a>
                                        </Link>
                                    </li> 
                                    <li>
                                        <Link href="/blog">
                                            <a>Blog</a>
                                        </Link>
                                    </li>                                   
                                </ul>
                            </div>
                        </div>
                        
                        <div className="col-lg-1 col-md-6 mr-5">
                            <div className="single-footer-widget">
                                <h3>Support</h3>

                                <ul className="list">
                                    <li>
                                        <Link href="/shop">
                                            <a>Shop</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={{ pathname:"/licence", query:{name:"faq"}}} >
                                            <a>FAQ</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/signup">
                                            <a>Register</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/login">
                                            <a>Login</a>
                                        </Link>
                                    </li>                                    
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-footer-widget mr-5">                                
                                {/* <p>Drag, drop and schedule content across multiple displays with the ability to scale infinitely. Monitor the status of every display in a single view format or filter to manage each individually from our web-based management  interface.</p> */}

                                <ul className="social-list">
                                    <p style={{color:"orange", fontWeight:600}}>Download the Imagine Player</p>
                                    <li>
                                        <Link href="https://www.facebook.com/imaginedigitalsignage">
                                            <a><i className="icofont-facebook"></i></a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://www.youtube.com/channel/UCGlcTeybhh35gMdAcHPOdiQ/featured?view_as=subscriber">
                                            <a><i className="icofont-youtube"></i></a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://www.instagram.com/explore/locations/831795206873516/imagine-digital-signage/?hl=en">
                                            <a><i className="icofont-instagram"></i></a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://www.linkedin.com/company/imagine-digital-signage/?viewAsMember=true">
                                            <a><i className="icofont-linkedin"></i></a>
                                        </Link>
                                    </li>
                                </ul>
                                <ul className="social-list">
                                    <p style={{color:"orange", fontWeight:600}}>Secure Payments</p>
                                    <li>
                                        <Link href="https://www.facebook.com/imaginedigitalsignage">
                                            <a><i className="icofont-facebook"></i></a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://www.youtube.com/channel/UCGlcTeybhh35gMdAcHPOdiQ/featured?view_as=subscriber">
                                            <a><i className="icofont-youtube"></i></a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://www.instagram.com/explore/locations/831795206873516/imagine-digital-signage/?hl=en">
                                            <a><i className="icofont-instagram"></i></a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://www.linkedin.com/company/imagine-digital-signage/?viewAsMember=true">
                                            <a><i className="icofont-linkedin"></i></a>
                                        </Link>
                                    </li>
                                </ul>
                                <ul className="social-list">
                                    <p style={{color:"orange", fontWeight:600}}>Let's Get Social</p>
                                    <li>
                                        <Link href="https://www.facebook.com/imaginedigitalsignage">
                                            <a><i className="icofont-facebook"></i></a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://www.youtube.com/channel/UCGlcTeybhh35gMdAcHPOdiQ/featured?view_as=subscriber">
                                            <a><i className="icofont-youtube"></i></a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://www.instagram.com/explore/locations/831795206873516/imagine-digital-signage/?hl=en">
                                            <a><i className="icofont-instagram"></i></a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://www.linkedin.com/company/imagine-digital-signage/?viewAsMember=true">
                                            <a><i className="icofont-linkedin"></i></a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="copyright-area">
                    <div className="container">

                        <div className="row h-100 justify-content-center align-items-center">   
                            <div className="col-lg-4 col-md-6">
                                <Link href="/">
                                    <a className="logo" style={{width:150}}>
                                        <img src={require('../../images/logo2.png')} alt="logo2" />
                                    </a>
                                </Link>
                            </div>
                            <div className="col-lg-8 col-md-6" style={{display:"flex", justifyContent: "flex-end"}}>
                                <ul>
                                    <li>
                                        <Link href="#">
                                            <a>Terms & Conditions</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>Privacy Policy</a>
                                        </Link>
                                    </li>
                                </ul>
                                <p style={{marginLeft:30}}>Copyright @ {new Date().getFullYear()} imAGINE. All rights reserved</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
