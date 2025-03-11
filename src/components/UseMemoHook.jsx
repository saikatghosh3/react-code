import React, { useState, useMemo } from 'react';

const UseMemoHook = () => {
  const [number, setNumber] = useState(0);
  const [counter, setCounter] = useState(0);

  function cubeNum(num) {
    console.log('Calculation is done');
    return Math.pow(num, 3);
  }

  const result = useMemo(() => cubeNum(number), [number]);

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <h1>Cube of the number is: {result}</h1>
      <button onClick={() => setCounter(counter + 1)}>Counter ++</button>
      <h1>Counter: {counter}</h1>
    </div>
  );
};

export default UseMemoHook;

// in the above code we are re-rendering only result portion . not the couter portion , in the console the result is clear 
