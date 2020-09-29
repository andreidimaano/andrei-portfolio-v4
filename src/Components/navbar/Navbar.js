import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container container'>
                    <Link to='/' className='navbar-logo'>
                        ad
                    </Link>
                    {/* <div className='menu-icon' onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </div> */}
                    <ul className="navbar-menu">
                        <li className='navbar-item'>
                            <a href="#about">
                                <span className= "number-color">01.&nbsp;</span>
                                <span className="text-color">About</span>
                            </a>
                        </li>
                        <li className='navbar-item'>
                            <span className= "number-color">02.&nbsp;</span>
                            <span className="text-color">Experience</span>
                        </li>
                        <li className='navbar-item'>
                            <span className= "number-color">03.&nbsp;</span>
                            <span className="text-color">Work</span>
                        </li>
                        <li className='navbar-item'>
                            <span className= "number-color">04.&nbsp;</span>
                            <span className="text-color">Contact</span>
                        </li>
                        <li className="navbar-button navbar-item" >
                            <a href="/resume.pdf" className="resume">Resume</a>
                        </li>
                    </ul>
                </div>
            </nav>
      </>
    )
}

export default Navbar;  
