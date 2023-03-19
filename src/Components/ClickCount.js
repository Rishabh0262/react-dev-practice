import React, { Component } from 'react'
// import withCounter from './withCounter'
import withCounter from './withCounter'

class ClickCount extends Component {

    

  render() {
    const {count, incrementCount} = this.props   // const name should be same as State prop name
    console.log(this.props.name)    // just to check if the prop is available or not... 
    // previously it was not working as the (line 26) rest of the props was not included on the WrappedComponent in withCounter.js for HOC
    return (
        <button onClick={incrementCount}> {this.props.name} Clicked {count} times</button>
        
    )
  }
}

export default withCounter(ClickCount, 5)