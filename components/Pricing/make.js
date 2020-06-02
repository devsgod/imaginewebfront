import React from 'react';
import {Grid} from "@material-ui/core";
import img from "../../images/whitel.png";
import {FaSwimmer} from "react-icons/fa";
import {Row, Col} from 'react-bootstrap';

export default function make() {
    return (
        <div className="container">
           <Row>
            <Col lg={6} md={6} sm={12} xs={12}>
                <img src={img}></img>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12} className="settitle"> 
                <h2>Looking for a White Label version</h2>
                <p style={{textAlign:"start",marginBottom:20,fontSize:20,marginTop:20}}>Our white label software version allows users to customize the Imagine Software interface and design elements with their own company identity. All features and functionality is identical to the regular software. This version can be hosted on our cloud server or installed on external 3rd party server.</p>
            </Col>
           </Row>
        </div>
    )
}