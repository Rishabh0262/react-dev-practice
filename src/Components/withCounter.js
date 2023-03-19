import React from "react";

const withCounter = (WrappedComponent, incrementNumber) => {
    class WithCounter extends React.Component {
        constructor(props) {
            super(props)
          
            this.state = {
               count : 0
            }
          }
      
          incrementCount = () => {

            if (incrementNumber) {
              this.setState(prevSate => {
                  return {count : prevSate.count + incrementNumber}
              })
            }
            else {
                this.setState(prevSate => {
                    return {count : prevSate.count + 1}
                })
            }
          }
      
      
        render() {
            console.log("withCounter : " + this.props.name)  // it is working irrespective to the including all props, line 26
            // An extra line will be present as this is used by HoverCount.js as well w/o any props in it.
            return (
            <WrappedComponent 
                count={this.state.count} 
                incrementCount={this.incrementCount} 
                {... this.props}
            />)
        }
    } 
    return WithCounter 
}

export default withCounter
