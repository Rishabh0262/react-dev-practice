import React, { Component } from 'react'

export class RegularComp extends Component {
  render() {
    console.log("Regular Component render")
    return (
      <div>RegularComp, Name is {this.props.name}</div>
    )
  }
}

export default RegularComp