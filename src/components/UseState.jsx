import { useState } from "react"



const UseState = () => {

    const [count, setCount] = useState(0)
  return (
    <div>
      <div style={{textAlign:"center", marginTop:"50px"}}>

        <h2>Counter: {count}</h2>
        <button onClick={()=> setCount(count +1)}>Increment</button>
        <button onClick={()=> setCount(count -1)}>Decrement</button>
      </div>

    </div>
  )
}

export default UseState
