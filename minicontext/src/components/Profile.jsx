import React,{useContext} from 'react'
import UserContext from '../assets/context/UserContext'

function Profile() {
    const {user}=useContext(UserContext)
  if(!user) return <div class='text-green-500'>please login</div>

  return <div>welcome{user.username}</div>
}

export default Profile