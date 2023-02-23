// import logo from './logo.svg';
import React, {Component} from 'react';
import './App.css';
import FocusInput from './Components/FocusInput';
import ParentComp from './Components/ParentComp';
import RefsDemo from './Components/RefsDemo';
import RefsDemo1 from './Components/RefsDemo1';


//  *********** React.Fragment ***********

class App extends Component {
  render() {
    return (
          <div className="App">

            {/*       Refs with class component     
                         parent : FocusInput.js
                         child  : Input.js 
            */}
            <FocusInput />



            



            
            {/* Refs : Access DOM nodes directly on react. "React.createRef()"
                2nd method is not working.
            */}

              {/* <RefsDemo /> */}

              {/*   :/  (this component only contain 2nd Refs method)                           */}
              {/* <RefsDemo1 />       */}
              



            {/* "Parent Component" we used for comparing "Pure Component" & "Regular Component" 
              * Where PureComp is used for preventing unnecessary re-render 
              * (here, updated state value is same as prev. value)
              * PureComponent implements shouldComponentUpdate() with a shallow props & state comparison.
              * 
              * Avoid Changing Object or Array in state/props, 
              * as Shallow-Comparision check the reference to the First element
              * better to use NEW array/object that reflects changes
            */}

            {/* <ParentComp /> */}
           
          </div>
        );
  }
}








export default App;
