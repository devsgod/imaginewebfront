import React, { Component } from 'react';
import {Row,Col} from "react-bootstrap"
import Link from 'next/link';

import background from "../../images/lg/lgtop_image.png"
class Banner extends Component {
    render() {
        return (
            <section className="page-title-banner-feature banner-responsive"  style={{backgroundImage:`url(${background})`,marginBottom:50}}>
                <div className="container">
                    <Col >
                        <p className="banner-text">LG</p>
                    </Col>
                    <Col style={{color:"white"}}>
                        <Link href="/"><a style={{color:"white"}}>Home</a></Link>  /  <Link><a style={{color:"white"}}>Platform</a></Link>  /  <Link><a style={{color:"white"}}>allinone</a></Link>
                    </Col>
                </div>
            </section>
        );
    }
}

export default Banner;
