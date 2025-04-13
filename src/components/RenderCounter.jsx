
import React, {useEffect, useRef, useState} from "react";

const RenderCounter =() =>{
    const [input, setInput] = useState('');
    const renderCount = useRef(1);


    useEffect(()=>{
        renderCount.current = renderCount.current +1;
    })
    return(
        <div className="">
            <input type="text"
            value={input} 
            onChange={(e)=> setInput(e.target.value)}/>
            <p>Component rendered: {renderCount.current} times</p>
        </div>
    )
}

export default RenderCounter;