import React, { useEffect, useLayoutEffect } from 'react'

const UselayoutEffectHook = () => {


useEffect(()=>{
 console.log("useEffect Hook");
 
},[]);

useLayoutEffect(()=>{
    console.log("useLayoutEffect Hook");
})


  return (
    <div>
      <h2>Test Message</h2>
      {Array(2000).fill().map((item, index)=>(
        <li key={index}>{Math.pow(Math.random(), 10)}</li>
      ))}
    </div>
  )
}

export default UselayoutEffectHook
