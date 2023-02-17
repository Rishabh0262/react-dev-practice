import React from 'react'

function FunctionClick() {

    function clickFunction() {
        console.log("Click button is clicked!")

    }

  return (
    <div>
        <button onClick={clickFunction}> Click </button>
    </div>
  )
}

export default FunctionClick