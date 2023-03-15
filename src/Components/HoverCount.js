import React, { Component } from 'react'

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
        <h2 onMouseMove={this.increamentCount}>Hovered {count} times</h2>
      </div>
    )
  }
}

export default HoverCount