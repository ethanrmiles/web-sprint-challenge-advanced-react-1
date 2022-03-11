import React from 'react'
import { useState } from 'react'

const grid =  [[null, null, null], [null, "B", null], [null, null, null]];

const getCoordinates = (array) => {
  //Given a destination, the function returns the coordinates of that location
  const [location, setLocation]=useState()
  for(let i = 0; i < array.length; i++){
    
    for(let j = 0; j < array[i].length; j++){
      const location = ` [${i}][${j}]`
      if(grid[i][j] === 'B') return location 
      }
  }
  setLocation(location)
} 










export default function AppFunctional(props) {  
 const [x,y] = getCoordinates(grid)
 console.log(`${x}${y}`) // (1, 2)
  return (
    <div id="wrapper" className={props.className}>
      <div className="info">
        <h3 id="coordinates">Coordinates (1, 1)</h3>
        <h3 id="steps">You moved 0 times</h3>
      </div>
      <div id="grid">
        <div className="square">1</div>
        <div className="square">2</div>
        <div className="square">3</div>
        <div className="square">4</div>
        <div className="square active">B</div>
        <div className="square">6</div>
        <div className="square">7</div>
        <div className="square">8</div>
        <div className="square">9</div>
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
