import React, { useState, useEffect } from 'react'


const FetchdataUseEffect = () => {
  
    const [users, setUsers]= useState([]);
        useEffect(()=> { 
    const fetchUsers = async ()=>{
        try{
            const res = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await res.json();
            console.log(data);
            setUsers(data);
        }catch(err){
            console.error("Fetching failed:", err)
        }
     }
     fetchUsers();
    }, []);  

  return (
    <div>
       <h2>User List: </h2>
       <ul>
        {users.map(user=>(
            <li key={user.id}> Name: {user.name} and Email:  {user.email}</li>
        ))}
       </ul>
    </div>
  );
};

export default FetchdataUseEffect;
