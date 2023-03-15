import React, { Component } from 'react'
import UpdatedComponent from './withCounter'


class HoverCount extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }
    }

    increamentCount = () => {
        this.setState(prevSate => {
            return {count : prevSate.count + 1}
        })
    }


  render() {
      const {count} = this.state
    return (
      <div>
        <h2 onMouseMove={this.increamentCount}>{this.props.name} Hovered {count} times</h2>
      </div>
    )
  }
}

export default UpdatedComponent(HoverCount)