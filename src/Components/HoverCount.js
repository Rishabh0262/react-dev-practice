import React, { Component } from 'react'
import withCounter from './withCounter'


class HoverCount extends Component {
    
  render() {
      const {count, incrementCount} = this.props
    return (
      <div>
        <h2 onMouseEnter={incrementCount}>Hovered {count} times</h2>
      </div>
    )
  }
}

export default withCounter(HoverCount)