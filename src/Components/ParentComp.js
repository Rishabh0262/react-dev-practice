import React, { Component } from 'react'
import RegularComp from './RegularComp'
import PureComp from './PureComp'


export class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name : "Rishabh"
      }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name : "Rishabh"
            })
        }, 2000)
    }

  render() {
    console.log("********** Parent Component Render *********")
    return (
      <div>ParentComp
        <RegularComp name={this.state.name} />
        <PureComp name={this.state.name} />
      </div>
    )
  }
}

export default ParentComp