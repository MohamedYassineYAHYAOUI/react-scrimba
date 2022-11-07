import React from 'react';
import heroImage from '../assets/photo-grid.png';

function Hero() {
    
    return (  
        <div className='heroBanner'>
            <img src={heroImage} ></img>
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </div>
     );
}

export default Hero;