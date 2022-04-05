import React, {useEffect} from 'react'
import axios from 'axios'
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

  numConverter = (position) => {
    switch(position){
      case 1:
        this.setState({ coordinates: '1,1'})
        break;
        case 2:
          this.setState({ coordinates: '2,1'})
          break;
          case 3:
        this.setState({ coordinates: '3,1'})
        break;
        case 4:
        this.setState({ coordinates: '1,2'})
        break;
        case 5:
        this.setState({ coordinates: '2,2'})
        break;
        case 6:
        this.setState({ coordinates: '3,2'})
        break;
        case 7:
        this.setState({ coordinates: '1,3'})
        break;
        case 8:
        this.setState({ coordinates: '2,3'})
        break;
        case 9:
        this.setState({ coordinates: '3,3'})
        break;
      default: 
      this.setState({ coordinates: '2,2'})
    }
  }
  
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
   this.numConverter(position)
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

 postEmail = () => {
  const x = this.state.coordinates.charAt(0)
  const y = this.state.coordinates.charAt(2)
  const steps = this.state.count
  const email = this.state.formValues

  axios.post('http://localhost:9000/api/result', {x, y, steps, email})
  .then(res => {
    this.setState({...this.state, message: res.data.message})
  })
  .catch(err => {
    this.setState({...this.state, message: err.message})
  })
}

 submitHandler = (evt) => {
   console.log('submit pressed')
    evt.preventDefault()
  if(this.state.formValues === 'foo@bar.baz'){
    this.setState({message: 'foo@bar.baz failure #71'})
}else if(this.state.formValues === 'bad@email'){
  this.setState({message: 'Ouch: email must be a valid email'})
}else if(this.state.formValues === ''){
  this.setState({message: 'Ouch: email is required'})
}else if(this.state.formValues){
  this.postEmail()
  this.setState({message: ''})
}
}

 changeHandler = (evt) => {
  this.setState({ formValues: evt.target.value})
}

componentDidUpdate(prevProps, previousState) {
  if(this.state.position !== previousState.position){
    this.numConverter(this.state.position)
  }
}
  render() {
    const { className } = this.props
    return (
      <div id="wrapper" className={className}>
        <div className="info">
          <h3 id="coordinates">{`Coordinates (${this.state.coordinates})`}</h3>
          <h3 id="steps">{ this.state.count === 1 ? `You moved ${this.state.count} time` : `You moved ${this.state.count} times`}</h3>
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
        <form onSubmit={this.submitHandler}>
          <input id="email" type="email" placeholder="type email" onChange={this.changeHandler} value={this.formValues}></input>
          <input id="submit" type="submit"></input>
        </form>
      </div>
    )
  }
}
