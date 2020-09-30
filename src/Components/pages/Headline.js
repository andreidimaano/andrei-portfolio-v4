import React from 'react'
import "./Headline.css"

function Headline() {
    return (
        <div className="headline">
            <div>
                <h2 className="big-heading">Andrei Dimaano</h2>
            </div>
            <div>
                <h3 className="big-heading">Aspiring Software Engineer</h3>
            </div>
            <div>
                <a className="email-link"href="mailto:andreiidimaano@gmail.com">Get In Touch</a>
            </div>
        </div> 
    )
}

export default Headline;

{/* <div className="headline">
<span className = "my-name">hello, my name is</span><br/>
<span className = "full-name">Andrei Dimaano,</span>
    <br/>
    <span className = "aspiration">Aspiring Software Engineer</span>
    <br/>
    <span className = "summary"> I'm a second-year student based in Los Angeles, CA <br/>
                                     interested in building and designing meaningful<br/>
                                     products.
    </span>
    <div className = "lets-talk" >Let's Talk</div>
</div> */}


