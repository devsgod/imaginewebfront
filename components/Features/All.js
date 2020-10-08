import React from 'react'
import Bar from "../Features/Bar"
import { FaChrome } from "react-icons/fa"
import { FaApple } from "react-icons/fa"
import { FaWindows } from "react-icons/fa"
import dog from "../../images/ex1.png"
import all2 from "../../images/features/Feature graphics psd.png"
import dash2 from "../../images/ex2.png"
import dash3 from "../../images/ex3.png"
import dash4 from "../../images/ex4.png"

import f1 from "../../images/features/All/1.png"
import f2 from "../../images/features/All/2.png"
import f3 from "../../images/features/All/3.png"
import f4 from "../../images/features/All/4.png"
import f5 from "../../images/features/All/5.png"
import f6 from "../../images/features/All/6.png"
import f7 from "../../images/features/All/7.png"
import f8 from "../../images/features/All/8.png"
import f9 from "../../images/features/All/9.png"

import { FaCheck, FaHospital, FaShoppingBag, } from "react-icons/fa"
import { Row, Col } from "react-bootstrap"
import { Button } from "@material-ui/core"

import Ex from "./exten"

import Multi from "./Multicard"

export default function All() {
    const [first, setfirst] = React.useState(true)
    const [second, setsecond] = React.useState(false)
    const [third, setthird] = React.useState(false)
    const [four, setfour] = React.useState(false)

    React.useEffect(() => {

        const img = new Image();
        img.src = dog; // by
        img.src = dash2;
        img.src = dash3;
    
        img.src = dash4;
       
    }, [])

    return (
    <div style={{backgroundColor:"#f8fafb"}}>
        <div className="container ">
            
            <Ex
            header={"Monitor and manage all your screens and users"}
            title1={"License and status overview"}
            content1={"Manage all your Imagine licences, detect whether the content is playing, or whether the media player is “online, offline or downloading content”."}
            title2={"Map status view"}
            content2={"Assign specific Google pins to each individual screen and view them LIVE for a demographical status overview"}
            title3={"Request screen shots"}
            content3={"Request a screenshot from an online player. The screenshot has a +-5 seconds delay, with OS and software error messages all captured."}
            title4={"Highlight data and library usage"}
            content4={"Monitor your individual data consumption over a day, week or month. Whilst keeping tabs on your library usage."}
            title5={"Highlight user activity"}
            content5={"Monitor different user activity for recent changes and added accountability."}
            img1={f1}
            img2={f2}
            img3={f3}
            img4={f4}
            img5={f5}
            ></Ex>
        </div>

        <Row className="features-area flexcontainer" style={{flexWrap:"nowrap",marginBottom:50, marginLeft:0, marginRight:0}}>
            <Multi from={0} to={1} button={false}></Multi>
        </Row>

        <div className="container-feature-monitor" style={{backgroundColor:"white"}} >
            <Row className="directionrows feature-directionrow">
                <Col md={12} lg={6} className="feature-lib-text">
                    <div  className="settitle feature-lib-text-header">
                        <h2>Manage your content library and folders</h2>
                    </div>
                    <p className="feature-lib-text-contect">Manage your content easily with folders, sort and search tools. Imagine caters for all popular media formats with smooth playback transitions</p>
                        <Row className="feature-lib-text-selector" >
                            <Row style={{ marginTop: 10, justifyContent: "center",flexWrap:"nowrap" }}>
                                <Col xs={5}style={{justifyContent:"start",display:"flex",alignItems:"center"}}>
                                    <FaCheck style={{ alignItems: "center",  }}></FaCheck>
                                    <p style={{  display: "flex",fontSize:15,marginLeft:10, color:"black" }}>Images (Jpegs, PNG)</p>
                                </Col>
                                <Col xs={5}style={{justifyContent:"start",display:"flex",alignItems:"center"}}>
                                    <FaCheck style={{ alignItems: "center",  }}></FaCheck>
                                    <p  style={{  display: "flex",fontSize:15,marginLeft:10, color:"black" }}>PDF viewer</p>
                                </Col>
                            </Row>

                            <Row style={{ marginTop: 10, justifyContent: "center",flexWrap:"nowrap" }}>
                                <Col xs={5}style={{justifyContent:"start",display:"flex",alignItems:"center"}}>
                                    <FaCheck style={{ alignItems: "center",  }}></FaCheck>
                                    <p style={{  display: "flex",fontSize:15,marginLeft:10 , color:"black"}}>Videos (Mp4, Mov, AVI)</p>
                                </Col>
                                <Col xs={5}style={{justifyContent:"start",display:"flex",alignItems:"center"}}>
                                    <FaCheck style={{ alignItems: "center",  }}></FaCheck>
                                    <p style={{  display: "flex",fontSize:15,marginLeft:10, color:"black" }}>Google docs</p>
                                </Col>
                            </Row>

                            <Row style={{marginTop: 10,  justifyContent: "center",flexWrap:"nowrap"}}>
                                <Col xs={5}style={{justifyContent:"start",display:"flex",alignItems:"center"}}>
                                    <FaCheck style={{ alignItems: "center",  }}></FaCheck>
                                    <p style={{  display: "flex",fontSize:15,marginLeft:10, color:"black" }}>PowerPoint (PPT)</p>
                                </Col>
                                <Col xs={5}style={{justifyContent:"start",display:"flex",alignItems:"center"}}>
                                    <FaCheck style={{ alignItems: "center",  }}></FaCheck>
                                    <p style={{  display: "flex",fontSize:15,marginLeft:10, color:"black" }}>Website (URL, RSS, XML)</p>
                                </Col>
                            </Row>

                            <Row style={{marginTop: 10,  justifyContent: "center" ,flexWrap:"nowrap"}}>
                                <Col xs={5}style={{justifyContent:"start",display:"flex",alignItems:"center"}}>
                                    <FaCheck style={{ alignItems: "center",  }}></FaCheck>
                                    <p style={{  display: "flex",fontSize:15,marginLeft:10, color:"black" }}>PDF viewer</p>
                                </Col>
                                <Col xs={5}style={{justifyContent:"start",display:"flex",alignItems:"center"}}>
                                    <FaCheck style={{ alignItems: "center",  }}></FaCheck>
                                    <p  style={{  display: "flex",fontSize:15,marginLeft:10, color:"black" }}>Audio files (Mp3)</p>
                                </Col>
                            </Row>
                        </Row>
                    </Col>

                    <Col md={12} lg={4} style={{display:"flex",alignItems:"center",}} className="feature-lib-img" >
                        <img key="all2" src={all2} alt=""></img>
                    </Col>
                </Row>
                
            </div>

            <div className="container">
                <Ex
                    header={"Monitor and manage all your screens and users"}
                    title1={"Design"}
                    content1={"Select a template or create your own screen layout, adding regions where content will be placed"}
                    title2={"Upload & refine"}
                    content2={"Upload content into your library and drag and drop into the creation regions (see all formats accepted)"}
                    title3={"Schedule"}
                    content3={"Plan ahead and set start and end dates and times. Dive deeper and set playback interval durations"}
                    title4={"Preview"}
                    content4={"A live playback view is available in a new browser "}
                    img1={f6}
                    img2={f7}
                    img3={f8}
                    img4={f9}
                ></Ex>
            </div>

            <Row className="features-area flexcontainer" style={{marginLeft:0, marginRight:0}}>
                <Multi from={4} to={2} button={false}></Multi>
            </Row>
        </div>
    )
}
