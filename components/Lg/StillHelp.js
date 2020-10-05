import React from 'react';
import Link from 'next/link';
import Paper from '@material-ui/core/Paper';
import {Button} from "@material-ui/core"

class StillHelp extends React.Component {
    render() {
        return (
            // <section className="overview-section ptb-100 bg-gray">
            //     <div className="container">
            //         <div className="overview-box">
            //             <div className="row h-100 justify-content-center align-items-center">
            //                 <div className="col-lg-5 offset-lg-1 offset-md-1 col-md-5 still-help">
            //                     <h4>Still need help?</h4>
            //                     <p>Get in touch with our sales, technical or support team</p>
            //                     <Link href="/contact">
            //                         <a className="btn btn-primary btn-still-contact">Contact us</a>
            //                     </Link>
            //                 </div>

            //                 <div className="col-lg-5 offset-lg-1 offset-md-1 col-md-5 still-help">
            //                     <h4>Tutorials?</h4>
            //                     <p>Visit our YouTube and Social channels for news and training guides</p>
            //                     <Link href="#">
            //                         <a className="btn btn-primary">Watch</a>
            //                     </Link>
            //                 </div>
            //             </div>
            //         </div>
            //     </div>
            // </section>

            <div className="container flexcontainer" style={{marginBottom:150}}>
            
                
            <Paper elevation={3} className="flexcontainer">

            <div className="flexcontainer settitle">

            <h2>Still need help?</h2>
            <p style={{textAlign:"center"}}>Get in touch with our sales, technical or support team.</p>
            <div className="flexcontainer" style={{width:"100%",justifyContent:"center",textAlign:"center",alignItems:"center"}}>
                <Link href="/contact">
                    <Button component={"a"} variant="contained"  size="medium" style={{width:"30%",marginTop:20,marginBottom:20,textTransform:"none",backgroundColor:"#FB6520",color:"white"}}>
                        Contact
                    </Button>
                </Link>
            </div>

            </div>


            </Paper>

            </div>
        );
    }
}

export default StillHelp;
