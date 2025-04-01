import React, { useState } from 'react'

const Inputfield = () => {
const [text, setText] = useState("");

function handleChange(event) {
    setText(event.target.value);
}

  return (
    <div>
      <input type="text" placeholder='Type here....' onChange={handleChange} />
      <p>You typed: {text} </p>
    </div>
  )
}

export default Inputfield
