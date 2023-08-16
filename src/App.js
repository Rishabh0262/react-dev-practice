import React, {Component} from 'react';
import './App.css';
import ParentComp from './Components/ParentComp';


//  *********** React.Fragment ***********

class App extends Component {
  render() {
    return (
          <div className="App">
            
          {/* ****** PureComponents only works for RCE ***** */}


            {/* 
            
              "Parent Component" we used for comparing "Pure Component" & "Regular Component" 
                * Where PureComp is used for preventing unnecessary re-render 
                * (here, updated state value is same as prev. value)
                * PureComponent implements shouldComponentUpdate() with a shallow props & state comparison. [Re-renders only, when SC return]
                * 
                * Avoid Changing Object or Array in state/props, 
                * as Shallow-Comparision check the reference to the First element
                * better to use NEW array/object that reflects changes
                * 
                **** [(in simple terms), if prevState === newState : "PureComponent" prevents re-render.]
                
            */}


            <ParentComp />


            {/* 
                "RegularComp" doesn't implement shouldComponentUpdate().
                  It always returns true.
                  
                "PureComponent" implements shouldComponentUpdate() 
                  with a 'shallow' props & state comparison.
                
                *shallow comparision (SC)* : 

                  Let's say : 
                    Primitive Datatype : 
                      a (SC) b => "true", means a === b , means value of 'a' = 'b' along with "datatype".
                      Ex. string 'Rishabh' (SC) string 'Rishabh' = "true".
                    
                    Complex DataType : 
                      a (SC) b => "true", Only if a and b reference to exact same Object.

                      Ex. 
                        var a = [1,2,3];
                        var b = [1,2,3];
                        var c = a;

                        a (SC) b; OR a === b  // false
                        a (SC) C; OR a === c  // true

            
            */}
           
          </div>
        );
  }
}








export default App;
