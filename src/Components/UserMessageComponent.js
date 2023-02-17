import React, { Component } from "react";

class UserMessageComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      login: 0,
    };
  }

  render() {


    
    return this.state.login ? (
      <div>
        <h2>Hello Rishabh</h2>
      </div>
    ) : (
      <div>
        <h2>Hello User</h2>
      </div>
    );






    // let message

    // if ( this.state.login)
    //     message = <div><h2>Hello Rishabh</h2></div>
    // else
    //     message = <div><h2>Hello User</h2></div>

    // return (<div>{message}</div>)







    // if (this.state.login)
    //     return (<div><h2>Hello Rishabh</h2></div>)
    // else
    //     return (<div><h2>Hello User</h2></div>)
  }
}

export default UserMessageComponent;
