import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import { Grid, Button } from '@material-ui/core';
import {img} from "react-icons/fa"
import Logo1 from "../../images/customisable.svg"
import Logo2 from "../../images/easy to navigate.svg"
import Logo3 from "../../images/secure and reliable.svg"

export default function Card(){

    return(
        <div className="container" style={{paddingBottom:70, paddingTop:25}}>

            <Grid className="card-grid" >
                <Grid item={true} md={4} lg={4} sm={12} xs={12} className="flexcontainer cardhover flexcontainerrelative cardm borderhover card-overview">
                    <div className="flexcontaineralign" >
                        <img src={Logo1} alt="" className="flexcontaineralignimage " ></img>
                    </div>
                    <div>
                        <div style={{marginTop:30,marginBottom:20}}>
                            <p style={{color:"black",fontWeight:1000, fontSize:24}} className="cardtitlehover">Easy to Navigate
                            </p>
                        </div>
                    <p  style={{color:"black"}} className="hoverp">A feature in itself, Imagine is intuitive and easy to operate.` However connect  with our support team at any stage with the online chat.</p>
                    </div>
                </Grid>

                <Grid item={true} md={4}lg={4} sm={12} xs={12} className="flexcontainer cardhover flexcontainerrelative cardm borderhover card-overview">
                    <div className="flexcontaineralign" >
                        <img src={Logo2} alt="" className="flexcontaineralignimage" ></img>
                    </div>
                    <div>
                        <div style={{marginTop:30,marginBottom:20}}>
                            <p style={{color:"black",fontWeight:1000, fontSize:24}} className="cardtitlehover">Secure & reliable
                            </p>
                        </div>
                        <p  style={{color:"black"}} className="hoverp">Hosted on secure servers with 99.9% daily uptime and secured with a 2-tier password authentication.</p>
                    </div>
                </Grid>
                
                <Grid item={true} md={4}lg={4} sm={12} xs={12} className="flexcontainer cardhover flexcontainerrelative cardm borderhover card-overview">
                    <div className="flexcontaineralign">
                        <img src={Logo3} alt="" className="flexcontaineralignimage"></img>
                    </div>
                    <div>
                        <div style={{marginTop:30,marginBottom:20}}>
                            <p style={{color:"black",fontWeight:1000, fontSize:24}} className="cardtitlehover">Customisable</p>
                        </div>
                        <p  style={{color:"black"}} className="hoverp">There are zero limitations to Imagines capabilities, with custom features added frequently to specific industry needs.</p>
                    </div>
                </Grid>
            </Grid>
       </div>
    )
 }