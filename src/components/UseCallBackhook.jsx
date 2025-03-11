import React, { useCallback, useState } from 'react';
import Header from './Header';

const UseCallBackhook = () => {
  const [count, setCount] = useState(0);

  // useCallback memoizes the function to avoid unnecessary re-creation
  const newFn = useCallback(() => {
    console.log('Callback function invoked');
  }, []);

  return (
    <div>
      <Header newFn={newFn} />
      <h2>{count}</h2>
      <button onClick={() => setCount((prev) => prev + 1)}>Click Here</button>
    </div>
  );
};

export default UseCallBackhook;
