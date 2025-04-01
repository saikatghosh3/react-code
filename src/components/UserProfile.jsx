import React from 'react'
import UserCard from './UserCard'
const UserProfile = () => {
  return (
    <div>
      <h1>User Profile</h1>
      <UserCard name = "Saikat Ghosh" age= {25} location = "Dhaka, Bangladesh" />
    </div>
  )
}

export default UserProfile
