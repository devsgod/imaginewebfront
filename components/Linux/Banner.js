import React, { Component } from 'react';
import Link from 'next/link';
import {Col} from "react-bootstrap";

class Banner extends Component {
    render() {
        return (
            <section className="page-title-banner-linux banner-responsive">
                <div className="container">
                    <Col >
                        <p className="banner-text">LINUX</p>
                    </Col>
                    <Col style={{color:"white"}}>
                        <Link href="/"><a style={{color:"white"}}>Home</a></Link>  /  <Link href="#"><a style={{color:"white"}}>Platform</a></Link>  /  <Link href="/linux"><a style={{color:"white"}}>Linux</a></Link>
                    </Col>
                </div>

            </section>
        );
    }
}

export default Banner;
