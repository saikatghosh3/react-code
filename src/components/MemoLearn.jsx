import React, {useState} from 'react'
import MeomolearnC from './MeomolearnC'

const MemoLearn = () => {
const [count, setCount] = useState(0);
const [name, setName] = useState("saikat");

  return (
    <div>
      {/* <button onClick={()=>setCount(count +1 )}>Click {count}</button>
      <MeomolearnC name = "saikat"/> */} 
      {/* above portion is for static code  */}

      <div>
      <button onClick={() => setCount(count + 1)}>Click {count}</button>

      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
        />
      </div>

      <MeomolearnC name={name} />
    </div>
      




    </div>
  )
}

export default MemoLearn
