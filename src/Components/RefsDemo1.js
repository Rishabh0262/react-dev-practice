import React, { Component } from 'react'

class RefsDemo1 extends Component {

    constructor(props) {
      super(props)

        this.cbRef = null;
        this.setCbRef = element => {
            this.cbRef = element
        }

    }

    componentDidMount() {
        if (this.cbRef) {
            this.cbRef.focus()
        }
    }

    clickHandler = () => {
        alert("click")
    }

  render() {
    return (
      <div>
        <input type="text" ref={this.cbRef} />
        <button onClick={this.clickHandler}>click</button>
      </div>
    )
  }
}

export default RefsDemo1