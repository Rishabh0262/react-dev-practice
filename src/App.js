// import logo from './logo.svg';
import React, {Component} from 'react';
import './App.css';
import Greeting from './Components/Greet';       // Stateless functional component 1st way of importing file. 'Greeting' is independent variable. (using default export)
import {Greet_2} from './Components/Greet2';     // (single liner) Stateless functional component 2nd way of importing file. 'Greet_2' is the name of the function. (using inline export)
import Welcome from './Components/Welcome';      // Class component. "Welcome" is Independent Variable.
import Hello1 from './Components/Hello';         // One liner const return[separate export line]. "Hello1" is independent variable.
import Message from './Components/Message';
import Counter from './Components/Counter';
import FunctionClick from './Components/FunctionClick';  // L 13
import ClassClick from './Components/ClassClick';     // L 13
import EventBind from './Components/EventBind';       // L 14 : 'this' keyword makes the things difficult to change in state-values. on event handling.
import ParentComponent from './Components/ParentComponent';
import UserMessageComponent from './Components/UserMessageComponent';
import NameList from './Components/NameList';
import Form from './Components/Form';
import LifeCycleA from './Components/LifeCycleA';
import FragmentDemo from './Components/FragmentDemo';
import Table from './Components/Table';


//  *********** React.Fragment  [L-25] ***********


// class App extends Component {
//   render() {
//     return (
//           <div className="App">

//             {/* To return multiple elements in JSX. Without having parent DIV tag
//                   * Though we can use either <> ... </> OR <React.Fragment> ... <React.Fragment> (if we need to pass a key) */}

//             {/* <FragmentDemo />   */}


//             {/* <Table></Table>       Describe inside Commit of react-fragment Branch */}


/*
        Here we used the Table.js & Columns.js(as child component).
        ###     But in child component 2 <td> can't be return in <div> tag... as it is a subcomponent of <table> tag.
        That's why, we need to use either <> ... </> OR <React.Fragment> ... <React.Fragment>
*/


//           </div>
//         );
//   }
// }












//  *********** Life Cycle Methods, [L22 - L] Further details in README.md ***********
/*
  Mounting(4) : Constructor, static getDerivedStateFromProps, render, componentDidMount

  Updatding(5) : static getDerivedStateFromProps, shouldComponentUpdate, render, getSnapshotBeforeUpdate, componentDidUpdate

  Unmounting(1) : componentWillUnmount

  Updating(2) : static getDerivedStateFromError , componentDidCatch
*/

// class App extends Component {
//   render() {
//     return (
//           <div className="App">



//             {/* <LifeCycleA /> */}

//           </div>
//         );
//   }
// }




//  *********** State check & its Application, [L14 - L] ***********

// class App extends Component {
//   render() {
//     return (
//           <div className="App">

//             {/* <EventBind></EventBind> */}   // L 14 - Event Binding :) Detailed Explaination within the Conponent.

//             {/* <ParentComponent></ParentComponent> */}      // L 15 - Methods as props : if child-comp communicate with parent-comp.

//             {/* <NameList></NameList> */}      // L 17,18 -List Rendering : Listing each of elements/SKUs/items with same HTML .

//   {/* Conditional Operation on Render() method  */}
//             {/* <UserMessageComponent></UserMessageComponent> */}    


//   {/* form handling... */}
//             {/* <Form></Form> */}

//           </div>
//         );
//   }
// }








// //  *********** State check & its Application, [L10 - L13] ***********
/*
    variables declared in the function body. inside the constructor.
    state is managed within the component. 
    For changing the state value... we use 
    this.setState((prevState, props) => ({// changes to be made}), () => { // callback function })
          callback func. : the code which we wanted to be executed after the setState().

    state is mutable.
    useState hook : RFCE
    this.state : RCE
*/

// class App extends Component {
//   render() {
//     return (
//           <div className="App">
//             {/* <Message></Message> */}

//             {/* <Counter /> */}

//             <FunctionClick></FunctionClick>      // L13 :  event Handling : we don't use '()' in it[onClick, etc]

//             <ClassClick></ClassClick>
//           </div>
//         );
//   }
// }









//  *********** Passing the properties ***********
/* 
    props are immutable. 
    props get passed to the components.
    prop : RFCE
    this.prop : RCE
*/

// class App extends Component {
//   render() {
//     return (
//           <div className="App">
//             {/* <Greeting></Greeting>              
//             <Greet_2 />
//             <Welcome />
//             <Hello /> */}
//             <Greeting name="Bruce" heroName="Batman">
//               <p>Protector of Gothom.</p>
//               <p>Member of Justice League</p>
//             </Greeting>
//             <Greeting name="Clark" heroName="Superman">
//               <p>Protector of Earth.</p>
//             </Greeting>
//             <Greeting name="Diana" heroName="Wonder Woman" alternateName="/Ms. Prince" />
              
//              <Welcome name="Bruce" heroName="Batman"></Welcome> 
//              <Welcome name="Clark" heroName="Superman" />
//              <Welcome  name="Diana" heroName="Wonder Woman" alternateName="/Ms. Prince" >
//                 <p>
//                   An Ancient God!
//                 </p>
//               </Welcome>

//           </div>
//         );
//   }
// }



//  *********** Differt types of class/function components ***********

// function App() {
//   return (
//     <div className="App">
//       <Greeting></Greeting>           {/*     */}
//       <Greet_2 />
//       {/* <Welcome /> */}
//       <Welcome />
//       <Hello1 />
//     </div>
//   );
// }

export default App;
