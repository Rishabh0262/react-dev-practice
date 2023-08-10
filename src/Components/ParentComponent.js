import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentName : 'Parent'

      }

    //   this.greetParent = this.greetParent.bind(this)       // won't be needed, as used '() =>' in render
    }


    greetParent (childName) {

        // return alert ("Hello " + this.state.parentName + ", from " + childName)     // Regular format 
        return alert(`Hello ${this.state.parentName}, from ${childName}`)     // es6 format : template literal         
    }

  render() {
    return (
      <div>
        <ChildComponent greetHandler={() => this.greetParent()}  ></ChildComponent>
        <p>The button is in the ChildComponent.</p>
      </div>
    )
  }
}

export default ParentComponent