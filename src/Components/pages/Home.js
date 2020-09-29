import React from "react";
import Navbar from "../navbar/Navbar";
import './Home.css'
import About from './About'
import Headline from "./Headline"

function Home() {
    return (
        <div className="home">
            <Navbar />
            <Headline />
            <div id="about">
                <About></About>
            </div>
        </div>
    )
}

export default Home;