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

//  *********** React.Portals ***********

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* ********* Render Props ********* 
                      Alternative for HOC!
                 An alternate way to use function in multiple Component w/o coping it.
                 reusing the functionality
            */}

        <Counter>
          {(count, incrementCount) => (
              <ClickCountTwo count={count} incrementCount={incrementCount} />
            )}
        </Counter>

         {/* *********************************
         here ^ "render" v is just most used NamingConvention. We can write anyting instead of "render"! */}

        <Counter>
          {(count, incrementCount) => (
              <HoverCountTwo count={count} incrementCount={incrementCount} />
            )}
        </Counter>



        {/* <ClickCountTwo />
            <HoverCountTwo />

            <User render={(isLoggedIn)=> isLoggedIn ? "Rishabh" : "Guest"} /> */}










        {/* ********* Higher Order Component ********* 
                  A function that accepts a Component and returns a component
              Here we have used exactly same increamentCounter() to count Clicks & Hovers.
              if there is a way, we could have just Re-use the same functions within component of with sister-component

              Use : sharing common functionality within components without repeating codes.
            
              Naming convention : camelCase for fileName.

            */}

        {/* <ClickCount name="Rishabh" /> */}

        {/* <HoverCount /> */}

        {/*   ******** Error Boundary ********
                it is react-component that catch JS error in their child component tree.
                log those errros
                displays a fallback UI


                A class component becomes an Error Boundary by defining either or both following LifeCycle Method
                * getDerivedStateFromError() : render Fallback UI
                * componentDidCatch() : log error info


                Use : (maybe) as we use multiple mobile specs comparision
            */}

        {/* 
            <ErrorBoundary>
                <Hero heroName={"Superman"} />
            </ErrorBoundary>
            <ErrorBoundary>
                <Hero heroName={"Batman"} />
            </ErrorBoundary>
              <ErrorBoundary>
                <Hero heroName={"Joker"} />
              </ErrorBoundary>
 */}

        {/* By default every thing renders inside "div#root" from 'public/index.html'
            * Portals are used for rendering component to differet <div> e.g. "div.portal-root"
            
            
            
            * dealing parent component CSS, while child comp. is a modal/pop-up/tool-tip.
                        https://codesandbox.io/s/00254q4n6p
                        

            * Event bubbling : an Event fired from inside a portal, will propogate to ancestors
                                in the containing React-tree. Even if those elements are NOT ancestors in the DOM tree
                                https://codepen.io/gaearon/pen/jGBWpE

                                

            */}
        {/* <PortalDemo /> */}
      </div>
    );
  }
}

export default App;
