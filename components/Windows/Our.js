import React from 'react'
import { Col, Row } from 'react-bootstrap'

export default function Our(
{ title,img,img2 }
)

{
    return (
        <div className="container">
            <Row>
                <div style={{margin:"auto"}} >
                    <p style={{ color: "black", marginBottom: 20, fontSize:40, fontWeight:"bold", textAlign:"center"  }}>{title}</p>                    
                </div>
                <Row style={{marginBottom:50, marginTop:50}}>
                    <div className="bar"></div>
                    <Col lg={6} md={6}>
                        <img key="img2" src={img2} alt="" style={{width:"100%"}}></img>
                    </Col>
                    <Col lg={6} md={6}>
                        <img key="img" src={img} alt="" style={{width:"100%"}}></img>
                    </Col>
                </Row>
            </Row>
        </div>
    )
}
