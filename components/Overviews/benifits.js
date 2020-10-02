import React from "react"
import { Row, Col } from "react-bootstrap"
const Benifits = () => {

    return (
        <div  className="backg  imagines">
        <div className="hero-content  container" >
            <div className="section-title" ><h2 className={"response un1"}>Multiple OS Version Playback</h2><div className="bar"></div></div>

            <Row className="un1 mt20">
                <Col  className="benifits-element">
                    <div className="justify-content-center align-items-center benifits-manage benifits-size"></div>
                    <p>A Features in iteself easy to operate</p>
                </Col>

                <Col className="benifits-element">
                    <div className="justify-content-center align-items-center benifits-features benifits-size"></div>
                    <p>A Features in iteself easy to operat</p>
                </Col>

                <Col className="benifits-element">
                    <div className="justify-content-center align-items-center benifits-setup benifits-size"></div>
                    <p>A Features in iteself easy to operat</p>
                </Col>

                <Col className="benifits-element">
                    <div  className="justify-content-center align-items-center benifits-price benifits-size"></div>
                    <p>A Features in iteself easy to operat</p>
                </Col>
 
            </Row>
            
        </div>
        </div>    )
}

export default Benifits