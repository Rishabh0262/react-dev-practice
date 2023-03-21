import React, { Component } from 'react'

class ClickCountTwo extends Component {
    

  render() {
    const {count , incrementCount} = this.props
    return (
      <div><button onClick={incrementCount}>Clicked {count} times</button></div>
    )
  }
}

export default ClickCountTwo