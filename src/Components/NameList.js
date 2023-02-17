import React from "react";
import Person from "./PersonComponent";

function NameList() {
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

  let personList = persons.map((person) => ( <Person key={person.id} person = {person} /> ));
  return <div>{personList}</div>;
}

export default NameList;
