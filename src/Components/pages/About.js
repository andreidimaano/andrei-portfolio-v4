import React from 'react'
import './About.css'

function About() {
    return (
        <div id="about" className="about-style">
            <h2 className="heading">About Andrei</h2>
            <div class="inner">
                <div className="about-text">
                    <div>
                        <p>
                            Hello! I’m  Andrei, a 19-year-old aspiring SWE based in Los Angeles, CA.
                        </p>
                        <p>
                            I enjoy building and designing, whether that be a website, a mobile 
                            application, or anything in between. I aspire to create meaningful 
                            products that spark joy in other people’s lives (s.o to Marie Kondo).
                        </p>
                        <p>
                            Currently attending <a rel="noopener noreferrer" target="_blank" href="https://www1.cs.ucr.edu/">UC Riverside</a>, 
                            I’m a second-year student and have been coding for one year. I’m 
                            currently invested in building projects with my friends and exploring 
                            new technologies through personal projects.
                        </p>
                        <p>
                            Here are the technologies I’ve been working with recently:
                        </p>
                    </div>
                    <ul className="skills-list">
                        <li>JavaScript (ES6+)</li>
                        <li>React</li>
                        <li>Node.js</li>
                        <li>C++</li>
                        <li>Flutter</li>
                        <li>Figma</li>
                    </ul>
                </div>
                <div className="about-img">
                    <div className="wrapper">
                        <img className="img" src="images/Andrei.jpg" alt="Andrei img"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About

{/* <div className = "about-super-wrapper">
                <div className = "about-wrapper">
                    <div className="title">
                        <span className = "number-color">01.&nbsp;</span>
                        <span className = "text-color">About Me </span>
                        <hr className="solid"/>
                    </div>
                
                    <div className = "about-info">
                        <span>Hello! I’m  Andrei, a  second-year student based in Los Angeles, CA.</span>
                        <br/><br/>
                        <span>I enjoy building and designing, whether that be a website, a mobile <br/>
                            application, or anything in between. I aspire to create meaningful <br/>
                            products that spark joy in other people’s lives (s.o to Marie Kondo). 
                        </span>
                        <br/><br/>
                        <span>
                            Currently attending UC Riverside, I’m a second-year student and <br/>
                            have been coding for one year. I’m currently invested in building <br/>
                            projects with my friends and exploring new technologies through <br/>
                            personal projects.
                        </span>
                        <br/><br/>
                        <span>
                            Here are the technologies I’ve been working with recently:
                        </span>
                        <ul className = "list">
                            <li>Javascript (ES6+)</li>
                            <li>React</li>
                            <li>Node.js</li>
                            <li>C++</li>
                            <li>Flutter</li>
                            <li>Figma</li>
                        </ul>
                    </div>
                </div>
                <div className = "photo-wrapper">
                    <img src="/images/Andrei.jpg" className = "photo" alt="andrei-img"/>
                </div>
            </div> */}