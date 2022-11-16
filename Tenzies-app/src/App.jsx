
import { useState } from 'react'
import './App.css'
import Die from './components/Die'
import {nanoid} from "nanoid"
import { useEffect } from 'react';
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'



export default function App() {
  const diceLength = 10;
  const [dice, setDice] = useState(allNewDice(diceLength))
  const [gameWon, setGameWon] = useState(false)
  const { width, height } = useWindowSize()

  useEffect(() =>{
    setGameWon(gameWon => {
      const allSameValue = dice[0].value
      return dice.every(d => d.selected) && dice.every(d => d.value === allSameValue)
    })

  }, [dice])

  function allNewDice(diceNumber){
    const newDiceValues= []
    for (let index = 0; index < diceNumber; index++) {
      newDiceValues.push(
        { 
          id : nanoid(),
          value : Math.floor(Math.random() * 6) + 1, 
          selected : false
        }
      )
    }
    return newDiceValues;
  }
  
  function rerollDice(){
    const newValues = allNewDice(diceLength)
    setDice(dice => dice.map((d,index) => d.selected ? d : newValues[index] ))
  }
  
  function resetDice(){
    setDice(allNewDice(diceLength))
  }

  function selectDice(dieId){
    setDice(dice => dice.map(d => d.id === dieId ? {...d , selected : !d.selected }: d))
  }

  const diceElems = dice.map(d => <Die key={d.id} {...d} selectDice={() => selectDice(d.id)}></Die>)

  return (
    <main>
      {gameWon ?  
      
      <Confetti
        width={width}
        height={height}
      />
      
      : ""}
      <div className="outerContainer">
        <div className="innerGameContainer">
          
          <h1 className="title">Tenzies</h1>
          <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
          <div className="diceContainer">
              {diceElems}
          </div>
          {gameWon ?
            (<button className='dieRoll' onClick={resetDice}>New Game</button>):
            (<button className='dieRoll' onClick={rerollDice}>ROLL</button>)
          } 
          
        </div>
      </div>
    </main>
  )
};