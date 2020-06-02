import React from 'react'
import { Col, Row } from 'react-bootstrap'

export default function Our(
{ header1,header2,content1,content2,title,pp,img,img2 }
)

{
    const [hover, sethover] = React.useState(true)
    const images=[img,img2]
    let current = img
    if (hover) {
        current = img2
    }


    return (
        <div className="container">
            <Row>
                <div className="section-title" >
                    <h2 style={{ color: "black", marginBottom: 20 }}>{title}</h2>
                    <p style={{ color: "black", marginBottom: 20 }}>{pp}</p>
                </div>
                <Row style={{marginBottom:50}}>
                    <Col lg={4} md={4} style={{ paddingRight: 30, display:"grid" }} className="ourmb">
                        <Col className={hover && "hoverorange"} onMouseOver={() => sethover(true)} style={{  paddingTop: 15 ,paddingBottom:15}}>
                            <h1 style={{ fontWeight: 1000, fontSize: "1.5rem" }}>{header1}</h1>
                            <p style={{ color: "black", fontSize: 15 }}>{content1}</p>
                        </Col>
                        <Col style={{  paddingTop:20}} className={!hover && "hoverorange"} onMouseOver={() => sethover(false)}> 
                            <b style={{ fontSize: "1.5rem" }}>{header2} </b>
                            <p style={{ color: "black", fontSize: 15}}>{content2}</p>
                        </Col>
                    </Col>
                    <Col lg={7} md={7}>
                        {images.map((item)=>( <img key={item} src={item} alt="" style={{width:current===item?"100%":0}}></img>))}
                    </Col>
                </Row>
            </Row>
        </div>
    )
}
