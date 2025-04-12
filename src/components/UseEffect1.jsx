
// import React, { useState, useEffect } from 'react'


// const UseEffect1 = () => {
//     const [count, setCount]= useState(0);
//   return (
//     <div>
//       <h1>The count is: {count}</h1>
//       <button onClick={()=> setCount(count +1 )}></button>
//     </div>
//   )
// }

// export default UseEffect1

// the above one is the example of only usestate case 


import React, { useState, useEffect } from 'react'


const UseEffect1 = () => {
    const [ count,setCount]= useState(0);

  useEffect(()=> {
    console.log(`Count updated: ${count}`);
  },[count])

  return (
    <div>
      <h1>The count is : {count}</h1>
      <button onClick={()=> setCount(count +1)}></button>
    </div>
  )
}

export default UseEffect1
