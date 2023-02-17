import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
  render() {
    console.log("pure component render")
    return (
      <div>PureComp</div>
    )
  }
}

export default PureComp