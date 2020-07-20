import Link from 'next/link';

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer-area ptb-100 pb-0 bg-image">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-footer-widget mr-5">
                                <Link href="/">
                                    <a className="logo">
                                        <img src={require('../../images/logo2.png')} alt="logo2" />
                                    </a>
                                </Link>
                                <p>Drag, drop and schedule content across multiple displays with the ability to scale infinitely. Monitor the status of every display in a single view format or filter to manage each individually from our web-based management  interface.</p>

                                <ul className="social-list">
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

                        <div className="col-lg-2 col-md-6">
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

                        <div className="col-lg-2 col-md-6">
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
                                            <a>All in one</a>
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

                        <div className="col-lg-2 col-md-6">
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
                                            <a>gambling</a>
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

                        <div className="col-lg-2 col-md-6">
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
                    </div>
                </div>

                <div className="copyright-area">
                    <div className="container">
                        <div className="row h-100 justify-content-center align-items-center">
                            <div className="col-lg-6 col-md-6">
                                <p>Copyright @ {new Date().getFullYear()} imAGINE. All rights reserved</p>
                            </div>
                            
                            <div className="col-lg-6 col-md-6">
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
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
