import React, { Component } from 'react'
import UpdatedComponent from './withCounter'


class HoverCount extends Component {
    
  render() {
      const {count, increamentCount} = this.props
    return (
      <div>
        <h2 onMouseMove={increamentCount}>Hovered {count} times</h2>
      </div>
    )
  }
}

export default UpdatedComponent(HoverCount)