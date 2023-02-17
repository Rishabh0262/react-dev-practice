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

            <Table></Table>

            {/* To return multiple elements in JSX. Without having parent DIV tag */}
            {/* <FragmentDemo />   */}

          </div>
        );
  }
}












//  *********** Life Cycle Methods ***********
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




//  *********** State check & its Application ***********

// class App extends Component {
//   render() {
//     return (
//           <div className="App">


//                   {/* form handling... */}
//             {/* <Form></Form> */}

//             {/* <NameList></NameList> */}


//                   {/* Conditional Operation on Render() method  */}
//             {/* <UserMessageComponent></UserMessageComponent> */}

//             {/* <ParentComponent></ParentComponent> */}

//             {/* <EventBind></EventBind> */}
//           </div>
//         );
//   }
// }



// //  *********** State check & its Application ***********

// class App extends Component {
//   render() {
//     return (
//           <div className="App">
//             {/* <Message></Message> */}
//             {/* <Counter /> */}
//             <FunctionClick></FunctionClick>
//             <ClassClick></ClassClick>
//           </div>
//         );
//   }
// }


//  *********** Passing the properties ***********

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
