import React, { Component } from 'react'

class HoverCountTwo extends Component {
     
  render() {
    const {count , incrementCount} = this.props

    return (
      <h2 onMouseEnter={incrementCount} >Hovered {count} Times</h2>
    )
  }
}

export default HoverCountTwo