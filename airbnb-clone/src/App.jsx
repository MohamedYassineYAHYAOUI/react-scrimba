import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Card from './components/Card'
import Data from './Data'

import './App.css'

function App() {

  const cards = Data.map(c=><Card
    key={c.id}

    {...c}
    // dispo={c.openSpots}
    // imageSrc={c.coverImg}
    // rating={c.stats.rating}
    // votes={c.stats.reviewCount}
    // country={c.location}
    // sousTexte={c.title}
    // startPrice={c.price}
    ></Card>
  )
  return (
    <div className="App">
      <NavBar></NavBar>
      <Hero></Hero>
      <div className='cardsContainer'>
        {cards}
      </div>
     

    </div>
  )
}

export default App
