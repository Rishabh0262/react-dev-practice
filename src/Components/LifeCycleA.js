import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

class LifeCycleA extends Component {
    // Mounting
    constructor(props) {
      super(props)
    
      this.state = {
         name : "Rishabh"
      }

      console.log("LifeCycleA Constructor")
    }


    
    // Mounting , Updating
    static getDerivedStateFromProps(props, state) {
        console.log("LifeCycleA getDerivedStateFromProps")
        return null
    }

    // Mounting
    componentDidMount () {
        console.log("LifeCycleA componentDidMount")
    }


    // updating
    shouldComponentUpdate () {
        console.log("LifeCycleA shouldComponentUpdate")
        return true
    }

    // updating
    getSnapshotBeforeUpdate () {
        console.log("LifeCycleA getSnapShotBeforeUpdate")
        return null;
    }

    // updating
    componentDidUpdate () {
        console.log("LifeCycleA componentDidUpdate")
    }


    changeInState = () => {
        this.setState({
            name : "Rishabh Gupta"
        })
    }

    // Mounting , Updating
  render() {
    console.log("LifeCycleA render()")
    return (
        <div>
            <div>LifeCycleA</div>
            <div>
                <button onClick={this.changeInState}> change state</button>
            </div>
            <LifeCycleB />
        </div>
      
    )
  }
}

export default LifeCycleA


/*
*********** Console Result ***********

    * LifeCycleA constructor
    * LifeCycleA getDerivedStateFromProps
    * LifeCycleA render()
    
    ** LifeCycleB constructor
    ** LifeCycleB getDerivedStateFromProps
    ** LifeCycleB render()
    ** LifeCycleB componentDidMount

    * LifeCycleA componentDidMount


    ******* after clicking |change state| *********  
    
    
    * LifeCycleA getDerivedStateFromProps
    * LifeCycleA shouldComponentUpdate
    * LifeCycleA render()
    
    ** LifeCycleB getDerivedStateFromProps
    ** LifeCycleB shouldComponentUpdate
    ** LifeCycleB render()
    ** LifeCycleB getSnapShotBeforeUpdate

    * LifeCycleA getSnapShotBeforeUpdate
    ** LifeCycleB componentDidMount
    * LifeCycleA componentDidMount







*/