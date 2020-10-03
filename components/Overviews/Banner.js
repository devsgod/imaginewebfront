import React, { Component } from 'react';
import {Row,Col} from "react-bootstrap";
import background from "../../images/overview/top_image.png";
import Link from 'next/link';

class Banner extends Component {
    render() {
        return (
            <section className="page-title-banner-feature banner-responsive" style={{backgroundImage:`url(${background})`,marginBottom:50}}>
                {/* <div className="shape1"><img src={require('../../images/shape3.png')} alt="img" /></div> */}
                <div className="container">
                    <Col >
                        <p className="banner-text">OVERVIEW</p>
                    </Col>
                    <Col style={{color:"white"}}>
                        <Link href="/"><a style={{color:"white"}}>Home</a></Link>  /  <Link><a style={{color:"white"}}>Platform</a></Link>  /  <Link><a style={{color:"white"}}>Overview</a></Link>
                    </Col>
                </div>
                {/* <div className="shape3"><img src={require('../../images/shape3.png')} alt="img" /></div> */}
            </section>
        );
    }
}

export default Banner;
