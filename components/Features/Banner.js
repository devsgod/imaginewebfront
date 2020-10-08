import React, { Component } from 'react';
import {Row,Col} from "react-bootstrap";
import background from "../../images/features/Features.jpg";
import Link from 'next/link';

class Banner extends Component {
    render() {
        return (
            <section className="page-title-banner-feature banner-responsive" style={{backgroundImage:`url(${background})`}}>
                <div className="container">
                    <Col >
                        <p className="banner-text-sec">FEATURES</p>
                    </Col>
                    <Col style={{color:"white"}}>
                        <Link href="/"><a style={{color:"white"}}>Home</a></Link>  /  <Link href="#"><a style={{color:"white"}}>Platform</a></Link>  /  <Link href="/features"><a style={{color:"white"}}>Features</a></Link>
                    </Col>
                </div>
            </section>
        );
    }
}

export default Banner;
