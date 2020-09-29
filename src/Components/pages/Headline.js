import React from 'react'
import "./Headline.css"

function Headline() {
    return (
        <div className = "intro-wrapper">
            <div className = "summary-wrapper"> 
                <span className = "my-name">hello, my name is</span>
                <br/>
                <span className = "full-name">Andrei Dimaano,</span>
                <br/>
                <span className = "aspiration">Aspiring Software Engineer</span>
                <br/>
                <span className = "summary"> I'm a second-year student based in Los Angeles, CA <br/>
                                                 interested in building and designing meaningful<br/>
                                                 products.
                </span>
                <div className = "lets-talk" >Let's Talk</div>
            </div>
        </div>
    )
}

export default Headline
