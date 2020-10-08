import React from "react"
import { Row, Col } from "react-bootstrap"
const Benifits = () => {

    return (
        <div  className="backg ">
        <div className="hero-content  container" >
            <div className="section-title" ><h2 className={"response un1"}>Multiple OS Version Playback</h2><div className="bar"></div></div>

            <Row className="un1 mt20">
                <Col  >
                    <div className="justify-content-center align-items-center overview-windows overview-size"></div>
                    <p>A Features in iteself easy to operate</p>
                </Col>

                <Col >
                    <div className="justify-content-center align-items-center overview-linux overview-size"></div>
                    <p>A Features in iteself easy to operat</p>
                </Col>

                <Col >
                    <div className="justify-content-center align-items-center overview-lg overview-size"></div>
                    <p>A Features in iteself easy to operat</p>
                </Col>

                <Col >
                    <div  className="justify-content-center align-items-center overview-android overview-size"></div>
                    <p>A Features in iteself easy to operat</p>
                </Col>
 
            </Row>
            
        </div>
        </div>    )
}

export default Benifits