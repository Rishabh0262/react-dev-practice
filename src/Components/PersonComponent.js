import React from "react";

function PersonComponent({person}) {
  return (
    <div>
      <h3>
        I am {person.name}. I'm {person.age} years old. I like {person.skill}.
      </h3>
    </div>
  );
}

export default PersonComponent;
