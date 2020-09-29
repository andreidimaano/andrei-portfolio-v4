import React, { Component } from 'react'
import './About.css'

export default class About extends Component {
    render() {
        return (
            <div className="about">
                <div className = "about-wrapper">
                    <div className="title">
                        <span className = "number-color">01.</span>
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
                </div>

                </div>
            </div>
        )
    }
}
