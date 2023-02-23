import React, { Component } from 'react'
// import Input form './Input'     // *form is wrong keyword
import  Input  from './Input'

class FocusInput extends Component {
    constructor(props) {
      super(props)
    
      this.componentRefs = React.createRef()

    }

    clickHandler = () => {
        this.componentRefs.current.focusInput()
    }


  render() {
    return (
      <div>
        <Input ref={this.componentRefs} />
        <button onClick={this.clickHandler} >Focus Input</button>
      </div>
    )
  }
}

export default FocusInput