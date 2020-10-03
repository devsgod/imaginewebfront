import React from 'react'
import Link from '../../utils/ActiveLink';

export default function yazi() {
    return (
        <div className="iceborg-content" style={{backgroundColor:"#F6F9FE"}}>
        <div className="container">
            <div className="row">
                <div className="offset-lg-2 col-lg-8 section-title">
                    <h4 className="text-center mb-4" style={{whiteSpace:"nowrap", fontWeight:600}}>That's just the tip of the iceberg</h4>
                    <div className="bar"></div>
                    <p className="text-center mb-4" style={{color:"black"}}>There are too many great features you'll love to list them all here, but you can check out more of the things that make IMAGINE the best from builder on the web by visiting our plans and pricing page</p>       
                    <div className="btn btn-primary">
                        <Link href="/features"><a>SEE MORE FEATURES</a></Link>    
                    </div>            
                </div>
            </div>
     
        </div>
    
    </div>
     
    )
}
