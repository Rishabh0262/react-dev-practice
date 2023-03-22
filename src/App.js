// import logo from './logo.svg';
import React, { Component } from "react";
import "./App.css";
import PortalDemo from "./Components/PortalDemo";
import Hero from "./Components/Hero";
import ErrorBoundary from "./Components/ErrorBoundary";
import ClickCount from "./Components/ClickCount";
import HoverCount from "./Components/HoverCount";

import ClickCountTwo from "./Components/ClickCountTwo";
import HoverCountTwo from "./Components/HoverCountTwo";
import User from "./Components/User";
import Counter from "./Components/Counter";
import ComponentC from "./Components/ComponentC";

//  *********** React.Portals ***********

class App extends Component {
  render() {
    return (
      <div className="App">
        
        {/* ******** Context ********
          Context provides a way to pass data through component-tree
            without having to pass "props" down manually at entry level.

          1. Create Context
          2. Provide the Context value
          3. Consume the Context value
        
        */}


        <ComponentC />
                   
      </div>
    );
  }
}

export default App;
