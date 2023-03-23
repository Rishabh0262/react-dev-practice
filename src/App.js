// import logo from './logo.svg';
import React, { Component } from "react";
import "./App.css";

import ComponentC from "./Components/ComponentC";
import { UserProvider } from "./Components/userContext";

//  *********** React.Portals ***********

class App extends Component {
  render() {
    return (
      <div className="App">
        
        {/* ******** Context ********
                Context provides a way to pass data through component-tree
                without having to pass "props" down manually at entry level.

            STEPS
          1. Create Context
          2. Provide the Context value
          3. Consume the Context value
        
        */}

        {/* <UserProvider value="Rishabh" > */}

          <ComponentC />

        {/* </UserProvider> */}
                   
      </div>
    );
  }
}

export default App;
