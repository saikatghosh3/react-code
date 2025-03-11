import { useState, useEffect } from "react";

const UseEffectHook = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCount((prevCount) => prevCount + 1);
    }, 2000);

    // Clean up the timer (optional but good practice)
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <h1>It is rendered {count} times!</h1>
    </div>
  );
};

export default UseEffectHook;
