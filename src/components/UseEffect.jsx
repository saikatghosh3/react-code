import React, { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  console.log("Component re-rendered!"); // Logs every time the component renders

  useEffect(() => {
    console.log(`useEffect: count changed to ${count}`);
    document.title = `Count: ${count}`;
  }, [count]); // Runs only when count changes

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;
