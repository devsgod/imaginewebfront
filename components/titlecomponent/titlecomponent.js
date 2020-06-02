import React from 'react'

export default function titlecomponent({p,title,titlesmall}) {
    return (
        <div className="container">
            <div className="section-title" >

                <h2 style={{ color: "black", marginBottom: 0 ,marginTop:30}}>{title}
                </h2>
                <p >   {p}
                </p>

            </div>
        </div>
    )
}
