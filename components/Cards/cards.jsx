import React, { useEffect } from "react"
import {Button} from "@material-ui/core"
import { Row, Col } from "react-bootstrap"
import Link from 'next/link';

import logo2 from "../../images/home/lg.png"
import logo3 from "../../assets/back/home/hard.png"
import logo1 from "../../images/Cards/Software (1).png"


const Cards = () => {

    return (
        <div className="container mt100"  >
            <Row>
                <Col>
                    <div className="mb30">
                        <div className="section-title">
                            <h2 >What Are You Looking For?</h2>
                            <p className="black">Getting started on the right foot</p>                          
                        </div>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col lg={4} md={4}  sm={12} xs={12} >
                    <div >
                        <div className="service-item responsecard">
                            <img src={logo1} alt="" className="imglogo"></img>
                            <h4 className="mb10 mt5">Software</h4>
                            <p className="responsecardp">Digital Signage software which manages your screens and controls your  content displayed.</p>                          
                            <Link href="/software/features">
                                <Button variant="contained" className="buttonmres1">Overview</Button>
                            </Link>
                        </div>
                    </div>
                </Col>
                <Col lg={4} md={4} sm={12} xs={12}>
                    <div>
                        <div className="service-item responsecard">
                            <img src={logo2} alt="" className="imglogo" ></img>
                            <h4 className="mb10 mt5">All in ONE</h4>
                            <p className="responsecardp">LG Digital Signage screens with on-board media players, pre-installed Imagine for instant launch.</p>
                            <Link href="/allinone">
                                <Button variant="contained" className="mt10" >LG Setup</Button>
                            </Link> 
                        </div>
                    </div>
                </Col>
                <Col lg={4} md={4} sm={12} xs={12}>
                    <div >
                        <div className="service-item responsecard">
                            <img src={logo3} alt="" className="imglogo"></img>
                            <h4 className="mb10 mt5">Hardware</h4>
                            <p className="responsecardp">Don’t yet have hardware? Shop online from a selection of media players, screens and accessories.</p>
                            <Link href="/shop">
                                <Button variant="contained" className="buttonmres2">Shop Now</Button>
                            </Link>
                        </div>
                    </div>
                </Col>
            </Row>
            <div className="tcenter2">Want to know more? Visit our 
                <Link href={{ pathname:"/licence", query:{name:"faq"}}} ><a className="colororange">FAQ page here</a></Link>
            </div>
        </div>


    )


}



export default Cards