import React from 'react';
import logo from '../assets/react-icon-small.png'

export default function Navbar(){

    return (
        <div className='navContainer'>
            <nav className='d-flex navBar'>
                <img src={logo} width='40px' height='40px' />
                <h1 >ReactFacts</h1>
                <span >React Course - Project 1</span>
            </nav>
        </div>

    )
}