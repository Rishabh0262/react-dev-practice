import React, { Component } from 'react'
import UpdatedComponent from './withCounter'

class ClickCount extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         clkCount : 0
      }
    }

    // incrementCount() Functionality
    btnClicked() {
        // console.log(this.clkCount)

        this.setState (prevState => {
            return { clkCount : prevState.clkCount + 1}
        })
    }


    // btnClicked = () => {
    //     // console.log(this.clkCount)

    //     this.setState(prevState => {
    //         return { clkCount : prevState.clkCount + 1}
    //     })
    // }

  render() {
    const {clkCount} = this.state   // const name should be same as State prop name
    return (
        <button onClick={() => this.btnClicked()}> {this.props.name} Clicked {clkCount} times</button>
        // <button onClick={this.btnClicked}>Clicked {clkCount} times</button>
    )
  }
}

export default UpdatedComponent(ClickCount)