import React from "react";

function Greet_1({name, alternateName, heroName, children}) {           // destructuring props & state [alt. syntax => ccc (Welcome.js)]
    // console.log(props);
    return (
        <div>
            <h1> Hello {name}{/*if(alternateName)*/}{alternateName}, AKA {heroName}</h1>
            {children}
        </div>
    )
}

export default Greet_1;     // we export the funciton's name