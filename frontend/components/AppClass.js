import React from 'react'
// import { array } from 'yup'


const initialState = {
  position: 5,
  message: '',
  coordinates: '2,2',
  count: 0,
  formValues: ''
}
export default class AppClass extends React.Component {
  state = initialState
  // { position, message, coordinates, count, formValues} = state
  
   left = () => {
     const { position, message, count } = this.state
    if(position === 1 || position ===  4 || position ===  7 ){
      this.setState({
        message: "You can't go left"
      })
    } else {
      this.setState({
        message: "",
        position: position -1,
        count: count + 1
      })
    }
  }

  right = () => {
    const { position, message, count } = this.state
   if(position === 3 || position ===  6 || position ===  9 ){
     this.setState({
       message: "You can't go right"
     })
   } else {
     this.setState({
       message: "",
       position: position +1,
       count: count + 1
     })
   }
 }

 up = () => {
  const { position, message, count } = this.state
 if(position === 1 || position ===  2 || position ===  3 ){
   this.setState({
     message: "You can't go up"
   })
 } else {
   this.setState({
     message: "",
     position: position -3,
     count: count + 1
   })
 }
}

down = () => {
  const { position, message, count } = this.state
 if(position === 7 || position ===  8 || position ===  9 ){
   this.setState({
     message: "You can't go down"
   })
 } else {
   this.setState({
     message: "",
     position: position +3,
     count: count + 1
   })
 }
}

reset = () => {
  this.setState({
    message: "",
    formValues: "",
    position: 5,
    count: 0
  })
}

  render() {
    const { className } = this.props
    return (
      <div id="wrapper" className={className}>
        <div className="info">
          <h3 id="coordinates">Coordinates (2, 2)</h3>
          <h3 id="steps">You moved 0 times</h3>
        </div>
        <div id="grid">
          <div className={`square${this.state.position === 1 ? ' active' : ""}`}>{this.state.position === 1 ? "B" : null}</div>
          <div className={`square${this.state.position === 2 ? ' active' : ""}`}>{this.state.position === 2 ? "B" : null}</div>
          <div className={`square${this.state.position === 3 ? ' active' : ""}`}>{this.state.position === 3 ? "B" : null}</div>
          <div className={`square${this.state.position === 4 ? ' active' : ""}`}>{this.state.position === 4 ? "B" : null}</div>
          <div className={`square${this.state.position === 5 ? ' active' : ""}`}>{this.state.position === 5 ? "B" : null}</div>
          <div className={`square${this.state.position === 6 ? ' active' : ""}`}>{this.state.position === 6 ? "B" : null}</div>
          <div className={`square${this.state.position === 7 ? ' active' : ""}`}>{this.state.position === 7 ? "B" : null}</div>
          <div className={`square${this.state.position === 8 ? ' active' : ""}`}>{this.state.position === 8 ? "B" : null}</div>
          <div className={`square${this.state.position === 9 ? ' active' : ""}`}>{this.state.position === 9 ? "B" : null}</div>
        </div>
        <div className="info">
          <h3 id="message">{this.state.message}</h3>
        </div>
        <div id="keypad">
          <button id="left" onClick={this.left}>LEFT</button>
          <button id="up"onClick={this.up}>UP</button>
          <button id="right"onClick={this.right}>RIGHT</button>
          <button id="down"onClick={this.down}>DOWN</button>
          <button id="reset"onClick={this.reset}>reset</button>
        </div>
        <form>
          <input id="email" type="email" placeholder="type email"></input>
          <input id="submit" type="submit"></input>
        </form>
      </div>
    )
  }
}
