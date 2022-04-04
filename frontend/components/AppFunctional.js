import React, { useEffect } from 'react'
import { useState } from 'react'


export default function AppFunctional(props) {  
  const [position, setPosition] = useState(4)
  const [message, setMessage] = useState()

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


  return (
    <div id="wrapper" className={props.className}>
      <div className="info">
        <h3 id="coordinates">{`Coordinates ${position}`}</h3>
        <h3 id="steps">You moved 0 times</h3>
      </div>
      <div id="grid">
        <div className={`square${position === 0 ? ' active' : ""}`}>{position === 0 ? "B" : 0}</div>
        <div className={`square${position === 1 ? ' active' : ""}`}>{position === 1 ? "B" : 1}</div>
        <div className={`square${position === 2 ? ' active' : ""}`}>{position === 2 ? "B" : 2}</div>
        <div className={`square${position === 3 ? ' active' : ""}`}>{position === 3 ? "B" : 3}</div>
        <div className={`square${position === 4 ? ' active' : ""}`}>{position === 4 ? "B" : 4}</div>
        <div className={`square${position === 5 ? ' active' : ""}`}>{position === 5 ? "B" : 5}</div>
        <div className={`square${position === 6 ? ' active' : ""}`}>{position === 6 ? "B" : 6}</div>
        <div className={`square${position === 7 ? ' active' : ""}`}>{position === 7 ? "B" : 7}</div>
        <div className={`square${position === 8 ? ' active' : ""}`}>{position === 8 ? "B" : 8}</div>
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
