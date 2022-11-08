import React from 'react'
import logo from '../assets/logo-instagram.png'

function SiteHeader() {
    return ( 
        <nav className='navBar'>
            <img src={logo} className="navBar--logo"/>
            <h1 className='navBar--title'>Image Generator</h1>
            <span className="navBar--description">React Course - Project 3</span>
        </nav>

     );
}

export default SiteHeader;