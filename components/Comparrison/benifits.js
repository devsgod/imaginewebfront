import React from "react"
import { FaWindows, FaApple, FaFacebook, FaHeadphones, FaBookOpen, FaMailchimp } from "react-icons/fa"
import Manage from "../../images/manage.svg"
import { Row, Col } from "react-bootstrap"
import Monitor from "../../images/monitor.svg"
import Analyse from "../../images/analyse.svg"
import Schedule from "../../images/schedule.svg"
import Create from "../../images/create.svg"
import Customise from "../../images/customise.svg"
const Benifits = () => {

    return (
        <div  className="backg  imagines">
        <div className="hero-content  container" >
            <div className="section-title" ><h2 className={"response un1"}>Packed with Benefits</h2><p className="black" >or Windoes brings a hot of benefits to your digital signage network</p></div>

            <Row className="un1 mt20">
                <Col  className="benifits-element">
                    <div className="justify-content-center align-items-center benifits-manage benifits-size"></div>
                    <p>Hardware</p>
                </Col>

                <Col className="benifits-element">
                    <div className="justify-content-center align-items-center benifits-features benifits-size"></div>
                    <p>Special Features</p>
                </Col>

                <Col className="benifits-element">
                    <div className="justify-content-center align-items-center benifits-setup benifits-size"></div>
                    <p>Setup</p>
                </Col>

                <Col className="benifits-element">
                    <div  className="justify-content-center align-items-center benifits-price benifits-size"></div>
                    <p>Price</p>
                </Col>

                <Col className="benifits-element">
                    <div  className="justify-content-center align-items-center benifits-support benifits-size"></div>
                    <p>Support</p>
                </Col>
 
            </Row>
            

        </div>
        </div>    )
}


export default Benifits