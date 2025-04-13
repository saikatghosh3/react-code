import React, {useRef, useEffect} from "react";

const InputFocus =()=> {
    const inputRef = useRef(null);

    useEffect(()=>{
        inputRef.current.focus();
    },[]);
   
    return ( 
        <div className="">
            <input type="text"
            ref={inputRef} 
            placeholder="Type something...."/>
        </div>
    )


}
export default InputFocus;

// main task is focus, dom element focus, scroll 

// another example is without re-render we will store data. 


