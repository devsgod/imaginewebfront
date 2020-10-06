import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {Button} from "@material-ui/core"
import Link from 'next/link';

export default function SimplePaper() {


  return (
    <div className="container" style={{marginTop:100,marginBottom:50}}>
      {/* <Paper elevation={3} > */}
        <div className="settitle section-title">
          <h2>Join Our Partner Platform</h2>
          <p>We love building partnerships. Get in touch!</p>
          <div className="bar"></div>
          
        </div>
        <div className="buttonorta">
          <Link href="/contact/">
            <Button variant="contained" style={{backgroundColor:"#FB6520",color:"white",padding:"6px 50px", fontSize:20 ,textTransform:"none"}} size="large" component="a">Contact</Button>
          </Link>
        </div>
      {/* </Paper>      */}
    </div>
  );
}