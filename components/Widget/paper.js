import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {Button} from "@material-ui/core"
import Link from 'next/link';

export default function SimplePaper() {


  return (
    <div className="container" style={{marginTop:0,marginBottom:0}}>
      {/* <Paper elevation={3} > */}
        <div className="settitle section-title">
          <h2 style={{marginTop:50, marginBottom:0}}>Join Our Partner Platform</h2>
          <p>We love building partnerships. Get in touch!</p>
          <div className="bar"></div>
          
        </div>
        <div className="buttonorta" style={{paddingBottom:50}}>
          <Link href="/contact">
            <div variant="contained" className="btn btn-outline-primary primaryBtn" size="large" component="a">CONTACT</div>
          </Link>
        </div>
      {/* </Paper>      */}
    </div>
  );
}