import React, { useState } from 'react'

const FormReact = () => {
    const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  return (
    <div>
      <form>
        <label>Enter your name:</label>
        <input
          type="text"
          name="username"
          value={inputs.username || ""}
          onChange={handleChange}
        />

        <label>Enter your age:</label>
        <input
          type="number"
          name="age"
          value={inputs.age || ""}
          onChange={handleChange}
        />
      </form>
         
      {/* Display State Updates */}
      <h3>Live Preview:</h3>
      <p>Name: {inputs.username || "Not entered"}</p>
      <p>Age: {inputs.age || "Not entered"}</p>
    </div>
  );
}

export default FormReact
