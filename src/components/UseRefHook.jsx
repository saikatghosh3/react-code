import React,{useEffect, useState, useRef} from 'react'

const UseRefHook = () => {

    // example 1
    // const [value, setValue]= useState(0);
    // const count = useRef(0);

    // useEffect(()=>{
    //     count.current = count.current + 1;
    // })


    // Example2 

    const inputElem = useRef();
    const btnClicked = ()=>{
        console.log(inputElem.current);
        inputElem.current.style.background ="blue";
        
    }
  return (



    <div>
      

{/* <button onClick={()=> {setValue (prev => prev -1)}} >-1</button>
<h1> {value}</h1>
<button onClick={()=> {setValue (prev => prev +1)}} >+1</button> */}

{/* Example2  */}

<input type="text " ref={inputElem} />
<button onClick={btnClicked}> click Here</button>

    </div>
  )
}

export default UseRefHook
