import React from 'react'
import { useState } from 'react'

const Simpleform = () => {

    const [name, setName] = useState("");
       function handleSubmit(event){
        event.preventDefault();
        alert(`Hello, ${name}! your form is submitted.`);
       }
     
  return (
    <div>
       <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Enter your name' onChange={(e)=> setName(e.target.value)}/>
        <button type='submit'> Submit</button>
       </form>
    </div>
  )
}

export default Simpleform
