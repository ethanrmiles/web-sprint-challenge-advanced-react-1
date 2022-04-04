import React, { useEffect } from 'react'
import { useState } from 'react'


export default function AppFunctional(props) {  
  const [findCurrentPositionIndex, setFindCurrentPositionIndex] = useState()
  const [findCurrentPosition, setFindCurrentPosition] = useState()
  const flatGrid = [null, null, null, null, "B", null, null, null, null]

useEffect(() => {
  setFindCurrentPositionIndex(flatGrid.findIndex(ind => ind === "B"))
  setFindCurrentPosition(flatGrid.find(ind => ind === "B"))
}, [])



//  const [x,y] = getCoordinates(grid)
//  console.log(`${x}${y}`) // (1, 2)
  return (
    <div id="wrapper" className={props.className}>
      <div className="info">
        <h3 id="coordinates">{`Coordinates ${findCurrentPositionIndex}`}</h3>
        <h3 id="steps">You moved 0 times</h3>
      </div>
      <div id="grid">
        <div className={`square${flatGrid[0] === findCurrentPosition ? ' active' : ""}`}>{flatGrid[0] === findCurrentPosition ? "B" : 1}</div>
        <div className={`square${flatGrid[1] === findCurrentPosition ? ' active' : ""}`}>{flatGrid[1] === findCurrentPosition ? "B" : 2}</div>
        <div className={`square${flatGrid[2] === findCurrentPosition ? ' active' : ""}`}>{flatGrid[2] === findCurrentPosition ? "B" : 3}</div>
        <div className={`square${flatGrid[3] === findCurrentPosition ? ' active' : ""}`}>{flatGrid[3] === findCurrentPosition ? "B" : 4}</div>
        <div className={`square${flatGrid[4] === findCurrentPosition ? ' active' : ""}`}>{flatGrid[4] === findCurrentPosition ? "B" : 5}</div>
        <div className={`square${flatGrid[5] === findCurrentPosition ? ' active' : ""}`}>{flatGrid[5] === findCurrentPosition ? "B" : 6}</div>
        <div className={`square${flatGrid[6] === findCurrentPosition ? ' active' : ""}`}>{flatGrid[6] === findCurrentPosition ? "B" : 7}</div>
        <div className={`square${flatGrid[7] === findCurrentPosition ? ' active' : ""}`}>{flatGrid[7] === findCurrentPosition ? "B" : 8}</div>
        <div className={`square${flatGrid[8] === findCurrentPosition ? ' active' : ""}`}>{flatGrid[8] === findCurrentPosition ? "B" : 9}</div>
      </div>
      <div className="info">
        <h3 id="message"></h3>
      </div>
      <div id="keypad">
        <button id="left">LEFT</button>
        <button id="up">UP</button>
        <button id="right">RIGHT</button>
        <button id="down">DOWN</button>
        <button id="reset">reset</button>
      </div>
      <form>
        <input id="email" type="email" placeholder="type email"></input>
        <input id="submit" type="submit"></input>
      </form>
    </div>
  )
}
