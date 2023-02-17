import React, { Component } from 'react'

class ClassClick extends Component {

    clickFunction() {
        console.log("Click Me button is clicked!")
    }

  render() {
    return (
      <div>
        <button onClick={this.clickFunction}> Click me </button>
      </div>
    )
  }
}

export default ClassClick