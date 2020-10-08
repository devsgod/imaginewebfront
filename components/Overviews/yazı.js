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
                    <p className="text-center mb-4" style={{color:"#888"}}>There are so many beneficial features which make Imagine Digital Signage special. Please visit our features page to get a bigger overview into our full software's capabilities</p>       
                    <div className="btn btn-outline-primary" style={{margin:"25px auto"}}>
                        <Link href="/features"><div className="primaryBtn" >SEE MORE FEATURES</div></Link>    
                    </div>            
                </div>
            </div>
     
        </div>
    
    </div>
     
    )
}
