import React, { Component } from 'react'
import ComponentF from './ComponentF'
import UserContext from './userContext'

class ComponentE extends Component {

  // (2nd way) if the project supports "public class field" Syntax
  static contextType = UserContext

  render() {
    return (
      <div>
        Component E context {this.context}
        <ComponentF />
        </div>
    )
  }
}

// ComponentE.contextType = UserContext      // 1st way to use Context!

export default ComponentE