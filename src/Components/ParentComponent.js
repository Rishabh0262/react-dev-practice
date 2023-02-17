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
        return alert(`Hello ${this.state.parentName}, from ${childName}`)     // es6 format           
    }
  render() {
    return (
      <div>
        <ChildComponent greetHandler={() => this.greetParent()}  ></ChildComponent>
      </div>
    )
  }
}

export default ParentComponent