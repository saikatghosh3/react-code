import React, { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [kajs, setKajs] = useState([]);

  // Add Task
  const addTask = () => {
    if (task.trim() !== "") {
      setKajs([...kajs, task]);
      setTask(""); // Clear input
    }
  };

  // Remove Task
  const removeTask = (index) => {
    setKajs(kajs.filter((_, i) => i !== index));
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>To-Do List</h2>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task..."
      />
      <button onClick={addTask}>Add</button>

      <ul style={{listStyle: "none"}}>
        {kajs.map((task, index) => (
          <li key={index}>
            {task} <button onClick={() => removeTask(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

// What happens 
// useState(0) initializes count = 0.
// Clicking "Increment" updates the state (setCount(count + 1)).
// The UI re-renders when count changes