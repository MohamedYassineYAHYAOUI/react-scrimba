import React from 'react';
import logo from '../assets/react-icon-small.png'

export default function Navbar(props){
    const {darkMode, toggleDarkMode} = props;
    return (
        <div className='navContainer'>
            <nav className={darkMode ? "dark navBar": "navBar"}>
                <img src={logo} width='40px' height='40px' />
                <h1 >ReactFacts</h1>
                <div className='toggler'>
                    <p className='toggler--light'>Light</p>
                    <div 
                    className='toggler--slider'
                    onClick={toggleDarkMode}>
                        <div className="toggler--cercle"></div>

                    </div>
                    <p className='toggler--dark'>Dark</p>
                </div>
            </nav>
        </div>

    )
}