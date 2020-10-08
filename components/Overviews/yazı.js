import React from 'react'
import Link from '../../utils/ActiveLink';

export default function yazi() {
    return (
        <div className="iceborg-content" style={{backgroundColor:"#F6F9FE"}}>
        <div className="container">
            <div className="row">
                <div className="offset-lg-2 col-lg-8 section-title">
                    <h4 className="text-center mb-4 htext-title">That's just the tip of the iceberg</h4>
                    <div className="bar" style={{margin:"35px auto"}}></div>
                    <p className="text-center mb-4" style={{color:"#888"}}>There are too many great features you'll love to list them all here, but you can check out more of the things that make <span style={{color:"#fb6520"}}>IMAGINE</span> the best from builder on the web by visiting our plans and pricing page</p>       
                    <div className="btn btn-outline-primary" style={{margin:"25px auto"}}>
                        <Link href="/features"><div className="primaryBtn" >SEE MORE FEATURES</div></Link>    
                    </div>            
                </div>
            </div>
     
        </div>
    
    </div>
     
    )
}
