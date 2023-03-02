import React, { Component } from 'react'
import FwdRefInput from './FwdRefInput'

export class FwdRefParentInput extends Component {
    constructor(props) {
      super(props)
    
      this.inputRef = React.createRef();
      

    }

    clickHandler = () => {
        this.inputRef.current.focus()
    }

  render() {
    return (
      <div>
        <FwdRefInput ref={this.inputRef}  />
        <button onClick={this.clickHandler} >Focus Input</button>
      </div>
    )
  }
}

export default FwdRefParentInput