// import logo from './logo.svg';
import React, {Component} from 'react';
import './App.css';
import Greeting from './Components/Greet';       // Stateless functional component 1st way of importing file. 'Greeting' is independent variable. (using default export)
import {Greet_2} from './Components/Greet2';     // (single liner) Stateless functional component 2nd way of importing file. 'Greet_2' is the name of the function. (using inline export)
import Welcome from './Components/Welcome';      // Class component. "Welcome" is Independent Variable.
import Hello1 from './Components/Hello';         // One liner const return[separate export line]. "Hello1" is independent variable.
import Message from './Components/Message';
import Counter from './Components/Counter';
import FunctionClick from './Components/FunctionClick';
import ClassClick from './Components/ClassClick';
import EventBind from './Components/EventBind';
import ParentComponent from './Components/ParentComponent';
import UserMessageComponent from './Components/UserMessageComponent';
import NameList from './Components/NameList';
import Form from './Components/Form';
import LifeCycleA from './Components/LifeCycleA';
import FragmentDemo from './Components/FragmentDemo';
import Table from './Components/Table';


//  *********** React.Fragment ***********


class App extends Component {
  render() {
    return (
          <div className="App">

           
          </div>
        );
  }
}








export default App;
