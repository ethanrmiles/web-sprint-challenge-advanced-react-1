import React, { useEffect } from 'react'
import { useState } from 'react'



export default function AppFunctional(props) {  
  const [position, setPosition] = useState(4)
  const [message, setMessage] = useState()
  const [coordinates, setCoordinates] = useState('2,2')

  //ASSIGN YOUR NUMBERS TO COORDINATES

// const left = () =>  position > 0 ? setPosition(position -1) : position
const left = () => {
  if(position === 0 || position ===  3 || position ===  6 ){
    setMessage("You can't go left")
  } else {
    setMessage(null)
    setPosition(position -1)
    
  }
}

const right = () => {
  if(position === 2 || position ===  5 || position ===  8 ){
    setMessage("You can't go right")
  } else {
    setMessage(null)
    setPosition(position +1)
   
  }
}

const up = () => {
  if(position === 0 || position ===  1 || position ===  2 ){
    setMessage("You can't go up")
  } else {
    setMessage(null)
    setPosition(position -3)
  }
}
// const down = () => setPosition(position + 3)
const down = () => {
  if(position === 6 || position ===  7 || position ===  8 ){
    setMessage("You can't go down")
  } else {
    setMessage(null)
    setPosition(position +3)
  }
}

const reset = () => setPosition(4)

const numConverter = (position) => {
  switch(position){
    case 0:
      setCoordinates('1,1')
      break;
      case 1:
        setCoordinates('2,1')
        break;
        case 2:
      setCoordinates('3,1')
      break;
      case 3:
      setCoordinates('1,2')
      break;
      case 4:
      setCoordinates('2,2')
      break;
      case 5:
      setCoordinates('3,2')
      break;
      case 6:
      setCoordinates('1,3')
      break;
      case 7:
      setCoordinates('2,3')
      break;
      case 8:
      setCoordinates('3,3')
      break;
    default: 
    setCoordinates('2,2')
  }
}

useEffect(() => {
  console.log('position changed!')
  numConverter(position)
}, [position])


  return (
    <div id="wrapper" className={props.className}>
      <div className="info">
        <h3 id="coordinates">{`Coordinates (${coordinates})`}</h3>
        <h3 id="steps">You moved 0 times</h3>
      </div>
      <div id="grid">
        <div className={`square${position === 0 ? ' active' : ""}`}>{position === 0 ? "B" : null}</div>
        <div className={`square${position === 1 ? ' active' : ""}`}>{position === 1 ? "B" : null}</div>
        <div className={`square${position === 2 ? ' active' : ""}`}>{position === 2 ? "B" : null}</div>
        <div className={`square${position === 3 ? ' active' : ""}`}>{position === 3 ? "B" : null}</div>
        <div className={`square${position === 4 ? ' active' : ""}`}>{position === 4 ? "B" : null}</div>
        <div className={`square${position === 5 ? ' active' : ""}`}>{position === 5 ? "B" : null}</div>
        <div className={`square${position === 6 ? ' active' : ""}`}>{position === 6 ? "B" : null}</div>
        <div className={`square${position === 7 ? ' active' : ""}`}>{position === 7 ? "B" : null}</div>
        <div className={`square${position === 8 ? ' active' : ""}`}>{position === 8 ? "B" : null}</div>
      </div>
      <div className="info">
        <h3 id="message">{message}</h3>
      </div>
      <div id="keypad">
        <button id="left"  onClick={left}>LEFT</button>
        <button id="up" onClick={up}>UP</button>
        <button id="right"  onClick={right}>RIGHT</button>
        <button id="down" onClick={down}>DOWN</button>
        <button id="reset" onClick={reset}>reset</button>
      </div>
      <form>
        <input id="email" type="email" placeholder="type email"></input>
        <input id="submit" type="submit"></input>
      </form>
    </div>
  )
}
