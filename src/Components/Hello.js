import React from "react";

const Hello = () => {
    
    return (
        <div className = "helloClass">
            <h1>Hello!</h1>
        </div>
    )


//  *********** Without using JSX ***********

    // return React.createElement(
    //     'div',
    //     {id: 'hello', className: 'helloClass'},
    //     React.createElement('h1', null, "Hello!")
    // )

}

export default Hello;     