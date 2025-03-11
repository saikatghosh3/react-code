import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
      <div style={{ textAlign:"center", marginTop: "50px"}}>
        <h1>🚫 404 - Page Not Found</h1>
        <p>Opps! page not found</p>
        <Link to={"/"}>Go back to Home</Link>
      </div>
    </div>
  )
}

export default NotFound
