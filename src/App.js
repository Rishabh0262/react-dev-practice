// import logo from './logo.svg';
import React, {Component} from 'react';
import './App.css';
import ParentComp from './Components/ParentComp';


//  *********** React.Fragment ***********

class App extends Component {
  render() {
    return (
          <div className="App">
            


            {/* "Parent Component" we used for comparing "Pure Component" & "Regular Component" 
              * Where PureComp is used for preventing unnecessary re-render 
              * (here, updated state value is same as prev. value)
              * PureComponent implements shouldComponentUpdate() with a shallow props & state comparison.
              * 
              * Avoid Changing Object or Array in state/props, 
              * as Shallow-Comparision check the reference to the First element
              * better to use NEW array/object that reflects changes
            */}
            <ParentComp />
           
          </div>
        );
  }
}








export default App;
