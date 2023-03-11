// import logo from './logo.svg';
import React, {Component} from 'react';
import './App.css';
import PortalDemo from './Components/PortalDemo'
import Hero from './Components/Hero';
import ErrorBoundary from './Components/ErrorBoundary';

//  *********** React.Portals ***********


class App extends Component {
  render() {
    return (
          <div className="App">

            {/*   ******** Error Boundary ********
                it is react-component that catch JS error in their child component tree.
                log those errros
                displays a fallback UI


                A class component becomes an Error Boundary by defining either or both following LifeCycle Method
                * getDerivedStateFromError() : render Fallback UI
                * componentDidCatch() : log error info

            */}


            <ErrorBoundary>

                <Hero heroName={"Superman"} />
                <Hero heroName={"Batman"} />
                <Hero heroName={"Joker"} />

            </ErrorBoundary>









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
