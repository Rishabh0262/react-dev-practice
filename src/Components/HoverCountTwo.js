import React, { Component } from 'react'

class HoverCountTwo extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }
    }

    incrementCount = () => {
        this.setState(prevState => {
            return {count : prevState.count + 1}
        })
    }

  render() {
    return (
      <h2 onMouseEnter={this.incrementCount} >Hovered {this.state.count} Times</h2>
    )
  }
}

export default HoverCountTwo