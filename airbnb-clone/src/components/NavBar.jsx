
import React from 'react';
import logoAirbnb from '../assets/airbnb-logo.png'

export default function NavBar(){

    return (
    <nav className="d-flex navBar">
        <img className="navBar--header_image" src={logoAirbnb} width="82px" height="25px"></img>
    </nav>)
}