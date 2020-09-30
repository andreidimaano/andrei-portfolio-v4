import React from 'react'
import "./Experience.css"

function Experience() {
    return (
        <div id="jobs" className="experience">
             <h2 className="heading">Andrei's Experience</h2>
             <div className="inner">
                <ul className="jobs-list">
                    <li>
                        <button className="job-item active">
                            <span>nex-ii</span>
                        </button>
                    </li>
                    <li>
                        <button className="job-item">
                            <span>RCHS</span>
                        </button>
                    </li>
                </ul>
                <div className="job-info">
                    <h3>
                        <span>Product Designer</span>
                        <span className="company">&nbsp;@&nbsp;
                            <a className="inline-link" href="https://www.linkedin.com/company/nex-ii/" rel="noopener noreferrer" target="_blank">nex-ii</a>
                        </span>
                    </h3>
                    <p class="range">May 2020 - September 2020</p>
                    <div>
                        <ul>
                            <li>
                                Led design and development of a marketing website and business-to-business platform for startup company, twiine.
                            </li>
                            <li>
                                Worked closely with a team of four mobile engineers to design and develop a social medium application using Figma and Flutter
                            </li>
                            <li>
                                Championed code excellence and maintainability by simplifying designs and creating reusable components for both web and mobile products
                            </li>
                            <li>
                                Mentored interns on design principles, researching designs, and coding practices.
                            </li>
                        </ul>
                    </div>
                </div>
             </div>
        </div>
    )
}

export default Experience

//function that renders paragraphs
/*export let jobInfo = {
    title: "Product Designer"
    location: "@ nex-ii"
    date: "May - September 2020"
    bulletpoints: [
        "Led design and development of a marketing website and business-to-business platform for startup company, twiine.",
        "Worked closely with a team of four mobile engineers to design and develop a social medium application using Figma and Flutter",
        "Championed code excellence and maintainability by simplifying designs and creating reusable components for both web and mobile products",
        "Mentored interns on design principles, researching designs, and coding practices."
    ]
}
*/
//<p>{jobInfo.bulletpoints}</p>
