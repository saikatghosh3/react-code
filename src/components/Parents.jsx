import React from 'react'
import Children from './Children'

const Parents = () => {
  return (
    <div>
      <h1>This is the parent commponent</h1>
      <Children name = "saikat" age = {25}/>
    </div>
  )
}

export default Parents
