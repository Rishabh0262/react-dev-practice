import React, { Component } from 'react'
// import withCounter from './withCounter'
import withCounter from './withCounter'

class ClickCount extends Component {

    

  render() {
    const {count, incrementCount} = this.props   // const name should be same as State prop name
    return (
        <button onClick={incrementCount}>  Clicked {count} times</button>
        
    )
  }
}

export default withCounter(ClickCount)