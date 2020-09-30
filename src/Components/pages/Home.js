import React from "react";
import Navbar from "../navbar/Navbar";
import './Home.css';
import Headline from "./Headline";
import About from './About';
import Experience from "./Experience";
import Work from "./Work";
import Contact from "./Contact";
import Left from "../links/left"
import Right from "../links/Right"

function Home() {
    return (
        <div className="home">
            <Navbar />
            <Left/>
            <Right />
            <div className="content">
                <div className="content-container">
                    <Headline />
                    <About/>
                    <Experience />
                    <Work />
                    <Contact />
                </div>
            </div>
        </div>
    )
}

export default Home;