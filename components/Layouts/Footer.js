import Link from 'next/link';
import img_window from '../../images/footer/windows_ftr.png'
import img_linux from '../../images/footer/linux_ftr.png'
import img_lg from '../../images/footer/lgwbos_ftr.png'
import img_android from '../../images/footer/android_ftr.png'
import img_paypal from '../../images/footer/paypal _ftr.png'
import img_visa from '../../images/footer/visa _ftr.png'
import img_facebook from '../../images/footer/facebook _Ftr.png'
import img_instagram from '../../images/footer/insta _Ftr.png'
import img_linkedin from '../../images/footer/linked in _Ftr.png'
import img_youtube from '../../images/footer/youtube _Ftr.png'

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer-area ptb-100 pb-0 bg-image">
                <div className="container">
                    <div className="row footer-menu" style={{justifyContent:"center"}}>

                        <div className="mr-5">
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

                        <div className="mr-5">
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

                        <div className="mr-5">
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

                        <div className="mr-5">
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
                        
                        <div className="mr-5">
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

                        <div >
                            <div className="single-footer-widget mr-5">                                
                                {/* <p>Drag, drop and schedule content across multiple displays with the ability to scale infinitely. Monitor the status of every display in a single view format or filter to manage each individually from our web-based management  interface.</p> */}

                                <ul className="social-list">
                                    <p style={{color:"orange", fontWeight:600, marginTop:0}}>Download the Imagine Player</p>
                                    <li>
                                        <Link href="#">
                                            <a><img src={img_window}></img></a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a><img src={img_linux}></img></a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a><img src={img_lg}></img></a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a><img src={img_android}></img></a>
                                        </Link>
                                    </li>
                                </ul>
                                <ul className="social-list">
                                    <p style={{color:"orange", fontWeight:600}}>Secure Payments</p>
                                    <li>
                                        <Link href="#">
                                            <a><img src={img_visa}></img></a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a><img src={img_paypal}></img></a>
                                        </Link>
                                    </li>
                                </ul>
                                <ul className="social-list">
                                    <p style={{color:"orange", fontWeight:600}}>Let's Get Social</p>
                                    <li>
                                        <Link href="https://www.facebook.com/imaginedigitalsignage">
                                            <a><img src={img_facebook}></img></a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://www.linkedin.com/company/imagine-digital-signage/?viewAsMember=true">
                                            <a><img src={img_linkedin}></img></a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://www.instagram.com/explore/locations/831795206873516/imagine-digital-signage/?hl=en">
                                            <a><img src={img_instagram}></img></a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://www.youtube.com/channel/UCGlcTeybhh35gMdAcHPOdiQ/featured?view_as=subscriber">
                                            <a><img src={img_youtube}></img></a>
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
                            <div className="col-lg-8 col-md-6 footer-bottom">
                                <div style={{display:"flex"}}>
                                    <div>
                                        <Link href="#">
                                            <a style={{color:"#818992"}}>Terms & Conditions &nbsp;</a>
                                        </Link>
                                    </div>                                    
                                    <div>
                                        <Link href="#">
                                            <a style={{color:"#818992"}}>Privacy Policy &nbsp;&nbsp;</a>
                                        </Link>
                                    </div>
                                </div>
                                <div style={{color:"#818992"}}>Copyright @ {new Date().getFullYear()} imAGINE. All rights reserved</div>                                        
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
