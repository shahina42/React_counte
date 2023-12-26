import { Component } from 'react'
import './App.css'

export class App extends Component {
  constructor() {
    super()
    this.state = {
      counter: 0
    }

  }
  functionDecrement = () => {
    this.setState(() => {
      return {
        counter:
          this.state.counter - 1
      }
    })
  }

  functionIncrement = () => {
    this.setState(() => {
      return {
        counter:
          this.state.counter + 1
      }
    })
  }


  functionReset = () => {
    this.setState(() => {
      return {
        counter:
          this.state.counter = 0
      }
    })
  }

  render() {
    return (
      <>
        <h1 className="heading">Counter App</h1>
        <div className="count" >{this.state.counter}</div>
        <div className="buttons" >
          <button onClick={this.functionIncrement}>+</button>
          <button onClick={this.functionDecrement}>-</button>
          <button onClick={this.functionReset}>Reset</button>
        </div>
      </>
    )
  }
}


