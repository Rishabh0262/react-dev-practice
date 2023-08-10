import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message : "This is the msg before clicking the btn"
      }

      this.EventHandler3 = this.EventHandler3.bind(this)             // (3.1) this is the `Binding Event handler in Constructor itself`
    }

    EventHandler() {
        this.setState({
            message : "button Clicked via (Inline) Binding Event Handler"
        })

        console.log(this)
    }

    EventHandler2() {
        this.setState({
            message : "button Clicked via Arrow Fn. in render method"
        })

        console.log(this)
    }

    EventHandler3() {
        this.setState({
            message : "button Clicked via Binding Event Handler in constructor"
        })

        console.log(this)
    }

    EventHandler4 = () => {             // 4.1 Here we have use the Arrow function itself in here.
        this.setState({
            message : "button clicked via Class property as Arrow Funtion"
        })
    }

  render() {
    return (
      <div>
        <h2>
            {this.state.message}
        </h2>
        {/* <!-- (1) (Inline) Binding Event Handler, 
                    Every change in "state" causes Re-render the component. 
                    & Generates Brand New Event handler in Everytime it renders. 
                    !!! Problem in complex programs or component having nested component --> */}
        <button onClick={this.EventHandler.bind(this)} > Click </button> 



        {/*  <!-- (2) [don't need binding]  Arrow Fn. in render method --> */}
        <button onClick={() => this.EventHandler2()}> Click-2 </button>  


        {/* <!-- (3)[Recommended] Binding Event Handler in constructor, 
        A line is added at last of constructor. Syntax is similar to (1) --> */}
        <button onClick={this.EventHandler3}> Click-3 </button>                


        {/* <!-- (4) Class property as "Arrow functions", 
        a little change in syntax of writing a function(class Property), at function-declaration. --> */}
        <button onClick={this.EventHandler4}> Click-4 </button>  

      </div>
    )
  }
}

export default EventBind