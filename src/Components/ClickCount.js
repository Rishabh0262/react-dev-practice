import React, { Component } from 'react'
import UpdatedComponent from './withCounter'

class ClickCount extends Component {

    

  render() {
    const {count, increamentCount} = this.props   // const name should be same as State prop name
    return (
        <button onClick={increamentCount}>  Clicked {count} times</button>
        
    )
  }
}

export default UpdatedComponent(ClickCount)