import React, { useContext } from 'react'
import { AppContext } from './Appcontext'

const Contact = () => {

    const phone = useContext(AppContext)
  return (
    <div>
      <h2>Contact</h2>
      <h3>phone:{phone}</h3>
    </div>
  )
}

export default Contact
