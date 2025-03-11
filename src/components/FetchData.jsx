import React from 'react'
import { useState, useEffect } from 'react'
import Lightning from './Light';

const FetchData = () => {

    const [data, setData]= useState([]);

    useEffect(() => {
        const fetchData = async () => {
          const response = await fetch("https://jsonplaceholder.typicode.com/posts");
          const json = await response.json();
          setData(json);
        };
      
        fetchData();
      }, []);




  return (
    <div>
  
      <h2>Posts</h2>
      <ul>{data.slice(0,5).map(post => (
        <li key={post.id}>{post.title}</li>
      ))}</ul>
    </div>
  )
}

export default FetchData
