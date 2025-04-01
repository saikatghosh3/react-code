import React from 'react'

const UserCard = (props) => {
  return (
    <div>
        <div style={{border:"1px soldi gray", padding:"10px", width:"200px", borderRadius: "8px"
         } }>

            <h2>{props.name}</h2>
            <p>Age: {props.age}</p>
            <p>Location: {props.location}</p>
         </div>
      
    </div>
  )
}

export default UserCard
