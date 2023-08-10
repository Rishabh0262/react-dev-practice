import React from "react";
import Person from "./PersonComponent";

function NameList() {
  const names = ["Bruce", "Clark", "Diana", "Barry", "Bruce"]     // we could have used 'values' as the Key, the key needs to be *unique*.   #28 
  let nameList = names.map((name, index) => <h2 key={index}> {index} {name} </h2>)
  /*    We should avoid using *index* as "key".     Except all 3 unavoidable circumstances (inclusively)... : 
      
      1. List doesn't have a Unique id.
      2. List is Static & won't change.
      3. List will nvr reordered or filtered.
  */
 
  // return <div> {nameList} </div>






  
  const persons = [
    {
      id: 1,
      name: "Clark",
      age: 25,
      skill: "React",
    },
    {
      id: 2,
      name: "Bruce",
      age: 30,
      skill: "Angular",
    },
    {
      id: 3,
      name: "Diana",
      age: 28,
      skill: "Vue",
    },
  ];



  let personList = persons.map((person) => ( <Person key={person.id} person = {person} /> ))    
  // we've used <Person /> to refactor the jsx into the separate component. 
    // 'key' prop is required for the React itself to render the list [not for use to  use]
    // keys help react to indentify which item in the list has changed or added or removed. help in handling UI update.


  
  return <div>{personList}</div>;
}

export default NameList;
