import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
      super(props)
      // ref... approach 1
        this.inputRef = React.createRef()


      // ref... approach 2
        this.cbRef = null
        this.setCbRef = element => {
          this.cbRef = element
        }      
    }

    componentDidMount() {
      // ref... approach 1
        // this.inputRef.current.focus()
        // console.log(this.inputRef)


      // ref... approach 2
        if (this.cbRef) {
          this.cbRef.focus() 
        }


    }

    clickHandler = () => {
        // alert(this.inputRef.current.value)
        alert(this.inputRef.current.value)

    }

  render() {
    return (
      <div>
        RefsDemo   {/* Although we can use "autoFocus" attribute of <input> */}
        <input type="text" ref={this.inputRef} placeholder="ref approach 1"  />
        <input type="text" ref={this.cbRef} placeholder="ref approach 2" />
        <button onClick={this.clickHandler}>click</button>
      </div>
    )
  }
}

export default RefsDemo