import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';

import Multi from "./Multicard"
import { FaCheck, FaHospital, FaShoppingBag, } from "react-icons/fa"
import { Row, Col } from "react-bootstrap"
import Bar from "../Features/Bar"
import { FaChrome } from "react-icons/fa"

import {FaArrowDown as ExpandMoreIcon} from 'react-icons/fa';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SimpleExpansionPanel(
    {
        title1,content1,title2,content2,title3,content3,title4,content4,title5,content5,header,img1,img2,img3,img4,img5
        
        
        }
) {
  const classes = useStyles();
  const Arrayimages=[img1,img2,img3,img4,img5]

    const [first, setfirst] = React.useState(true)
    const [second, setsecond] = React.useState(false)
    const [third, setthird] = React.useState(false)
    const [four, setfour] = React.useState(false)
    const [five, setfive] = React.useState(false)
    let current = img1
    if (first) {
        current = img1
    }
    if (second) {
        current = img2
    }
    if (third) {
        current = img3
    }
    if (four) {
        current = img4
    }
    if (five) {
        current = img5
    }

  return (
    <Row className="mt40 mb100">
      <div className="exhead settitle ">
        <h2 className="exheadh2" >{header}</h2>
      </div>
      <Col md={12} lg={6} className="excol1">
      {
      Arrayimages.map((item, index)=>(
        <img key={index} src={item} alt="" style={{width:current===item?"100%":0}}></img>))
      }

    </Col>
    <Col md={12} lg={6} className="excol2">      
    <div className={classes.root}>
      <ExpansionPanel onClick={()=>
            {setfirst(!first)
                setsecond(false)
                setthird(false)
                setfour(false)
                setfive(false)}}
            defaultExpanded={first}
            expanded={first}
          >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
            <h2 style={{fontSize:20}} className={first ? "orangem blackm":"blackm"}>{title1}</h2>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <p style={{color:"black"}}>
            {content1}
          </p>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel  onClick={()=>
            {setfirst(false)
                setsecond(!second)
                setthird(false)
                setfour(false)
                setfive(false)            
            }}
            expanded={second}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon/>}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <h2 style={{fontSize:20}} className={second ? "orangem blackm":"blackm"}>{title2}</h2>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
            <p style={{color:"black"}}>
            {content2}
            </p>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel onClick={()=>
            {setfirst(false)
                setsecond(false)
                setthird(!third)
                setfour(false)
                setfive(false)
            }}
            expanded={third}    
            >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"          
        >
          <h2 style={{fontSize:20}} className={third ? "orangem blackm":"blackm"}>{title3}</h2>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <p style={{color:"black"}}>
          {content3}
          </p>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel onClick={()=>
            {setfirst(false)
                setsecond(false)
                setthird(false)
                setfour(!four)
                setfive(false)
            }}
            expanded={four} 
            >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h2 style={{fontSize:20}} className={four ? "orangem blackm":"blackm"}>{title4}</h2>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails
         
        >
          <p style={{color:"black"}}>
          {content4}
          </p>
        </ExpansionPanelDetails>
      </ExpansionPanel>
     {title5&&(
          <ExpansionPanel onClick={()=>
            {setfirst(false)
                setsecond(false)
                setthird(false)
                setfour(false)
                setfive(!five)
            
            }}
            expanded={five}      
           
            >
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          
          >
            <h2 style={{fontSize:20}} className={five ? "orangem blackm":"blackm"}>{title5}</h2>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails
      
          >
            <p style={{color:"black"}}>
            {content5}
            </p>
          </ExpansionPanelDetails>
        </ExpansionPanel>
     )}
    </div></Col>
    </Row>
  );
}