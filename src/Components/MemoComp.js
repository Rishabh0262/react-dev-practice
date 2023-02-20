import React from 'react'

function MemoComp({name}) {
  console.log("Render Memo Components")
  return (
    <div>
        Memo Comp 
        {name}
    </div>
  )
}

export default React.memo(MemoComp)

