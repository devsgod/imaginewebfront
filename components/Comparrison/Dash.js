import React from "react"

import { FaCheck} from "react-icons/fa"
import Link from 'next/link';
import dog from "../../images/windows/windowsservice_img.png"
import dash2 from "../../images/dash2.png"
import dash3 from "../../images/dash3.png"
import { FaHospital,FaHeart,FaBook,FaTree,FaShoppingBag} from "react-icons/fa"
import {GiKnifeFork} from "react-icons/gi"
import { Row,Col } from "react-bootstrap"
import {Button} from "@material-ui/core"
import logo1 from "../../images/Windows.svg"
import logo2 from "../../images/LGlogo.svg"
import logo3 from "../../images/Android.svg"
import logo4 from "../../images/Linux.svg"
import win7 from "../../images/windows/windows7_icon.png"
import win8 from "../../images/windows/windows8_icon.png"
import win10 from "../../images/windows/windows9_icon.png"
const Dash = () => {

    return (
        <div className="container">
            <Row style={{marginTop:100}}>
                <Col md={12} lg={6} >
                    <img src={dog} alt=""></img>
                </Col>
                <Col md={12} lg={6}  style={{justifyContent:"center" , alignSelf:"center"}}>
                    <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}  className="settitle">
                        <h2>Minimum <span style={{color:"orange"}}>Specifications</span></h2>
                    </div>   

                    <div style={{display:"flex"}}>
                        <Col>
                            <Col style={{flexDirection:"column",justifyContent:"center",padding:"auto"}}>
                                <Row style={{marginTop: 20 ,justifyContent:"start" , alignContent:"center",paddingRight:30,paddingLeft:55}}>
                                    <FaCheck  style={{alignItems:"center", fontSize: 15,marginTop:3 ,marginRight:10}}></FaCheck>
                                    <p style={{color:"orange"}}>Processor</p>
                                </Row>

                                <Row style={{ marginTop: 10,justifyContent:"start" , alignContent:"center",paddingRight:30,paddingLeft:55}}>
                                    <FaCheck  style={{alignItems:"center", fontSize: 15,marginTop:3 ,marginRight:10}}></FaCheck>
                                    <p style={{color:"orange"}}>Memory</p>
                                </Row>

                                <Row style={{ marginTop: 10,justifyContent:"start" , alignContent:"center",paddingRight:30,paddingLeft:55,}}>
                                    <FaCheck style={{alignItems:"center", fontSize: 15,marginTop:3 ,marginRight:10}}></FaCheck>
                                    <p style={{color:"orange"}}>Connectivity</p>
                                </Row>

                                <Row style={{ marginTop: 10,justifyContent:"start" , alignContent:"center",paddingRight:30,paddingLeft:55,}}>
                                    <FaCheck style={{alignItems:"center", fontSize: 15,marginTop:3 ,marginRight:10}}></FaCheck>
                                    <p style={{color:"orange"}}>Ports</p>
                                </Row>
                            </Col>
                        </Col>

                        <Col style={{flexDirection:"column",justifyContent:"center",padding:"auto"}}>
                            <Row style={{marginTop: 20 ,justifyContent:"start" , alignContent:"center",paddingRight:30,}}>
                                <p style={{color:"black"}}>Minimum Celeron 1.2mgz</p>
                            </Row>
                            <Row style={{marginTop: 10 ,justifyContent:"start" , alignContent:"center",paddingRight:30,}}>
                                <p style={{color:"black"}}>Minimum 4gig RAM</p>
                            </Row>
                            <Row style={{marginTop: 10 ,justifyContent:"start" , alignContent:"center",paddingRight:30,}}>
                                <p style={{color:"black"}}>WIFI and/or LAN</p>
                            </Row>
                            <Row style={{marginTop: 10 ,justifyContent:"start" , alignContent:"center",paddingRight:30,}}>
                                <p style={{color:"black"}}>USB(for keyboards and mouse)</p>
                            </Row>
                        </Col>
                    </div>
                    
                    <div style={{paddingLeft:55,justifyContent:"start",marginTop:20, display:"flex"}}>
                        <div style={{marginRight:50}}>
                            <img src={win7}></img>
                            <p>7 (2009)</p>
                        </div>
                        <div style={{marginRight:50}}>
                            <img src={win8}></img>
                            <p>8 (2012)</p>
                        </div>
                        <div style={{marginRight:50}}>
                            <img src={win10}></img>
                            <p>10 (2015)</p>
                        </div>
                    </div>
                </Col>
            </Row>            
        </div>
    )
}
export default Dash