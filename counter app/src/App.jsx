import React, { Component } from 'react'

export default class App extends Component {
    constructor(){
        super()
        this.state={count:0}
    }
    handleIncrement=()=>{
        this.setState=({count:this.state.count+1})
    }
    handleDecrement=()=>{
        this.setState=({count:this.state.count-1})
    }
    handleReset=()=>{
        this.setState=(0)
    }
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <div>
            <button onClick={this.handleIncrement}>+Increment</button>
            <button onClick={this.handleDecrement}>-Decrement</button>
            <button onClick={this.handleReset}>Reset</button>
        </div>
      </div>
    )
  }
}
