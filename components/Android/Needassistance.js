import React from 'react';
import Link from 'next/link';
import {Button} from "@material-ui/core"
import dynamic from 'next/dynamic';
import imaged from "../../images/windows/assistant_suport_icon.png"
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    autoplay: true,
    nav: false,
    mouseDrag: true,
    autoplayHoverPause: true,
    responsiveClass: true,
    dots: false,
    loop: true,
    navText: [
    "<i class='icofont-bubble-left'></i>",
    "<i class='icofont-bubble-right'></i>"
    ],
    responsive:{
        0:{
            items:2,
        },
        768:{
            items:3,
        },
        1024:{
            items:4,
        },
        1200:{
            items:4,
        }
    }
}

class Needassistance extends React.Component {
    state = { display:false};


    componentDidMount(){ 
        this.setState({ display: true }) 
    }
    render() {
        return (
            <div className="partner-area partner-area-pt100">
                <div className="container ptb-100 pt-0">
                   

                    <div className="row h-100 justify-content-center align-items-center" style={{display:"block"}}>

                        <div >
                            <div style={{width: "100%",display:"flex",justifyContent:"center"}}>
                                <img src={imaged} alt="image" style={{width: "10%"}} className="lazyload" />
                            </div>
                        </div>

                        <div style={{display:"flex",flexDirection:"column", justifyContent:"center",alignItems:"center",textAlign:"center"}} >
                            <h4 className="pb-3"  >Need Assistance with getting started?</h4>
                            <p>Get the best support from our technical team.</p>
                            <Link href="/contact" >
                                <Button variant="contained" style={{backgroundColor:"#FB6520",color:"white !important",marginTop:20,}} component={"a"} >
                                Contact
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Needassistance;
