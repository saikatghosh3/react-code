import React from 'react'

const Header = () => {
    console.log("header Rendered");
    
  return (
    <div>
      <h2>Header </h2>
    </div>
  )
}

export default React.memo (Header)
