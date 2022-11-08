import React from 'react'
import starImage from '../assets/star.png'


function Card(props) {
    
    const {coverImg, stats, location, title, price, openSpots} = props;
    let badgeText
    if (openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (location === "Online") {
        badgeText = "ONLINE"
    }
    
    return (
    <div className='cardContent'>
        {badgeText&& <div className='card--badge'>{badgeText}</div> }
        <img className='cardImage' src={`./src/assets/${coverImg}`} />
        <div className='cardInfo'>

            <img  src={starImage} width="14px" height="14px"/>
            <span>{stats.rating}</span>
            <span className="grey">({stats.reviewCount})</span>
            <span className="grey">{location}</span>
        </div>
        <p className='cardContent--sousTexte'>{title}</p>
        <span className='cardContent--price'><b>From $ {price}</b> / person </span>
    </div>
 );
}

export default Card;