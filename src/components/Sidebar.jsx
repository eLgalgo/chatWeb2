
import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'
import NavBar from './NavBar'
import UserChat from './UserChat'
import Chats from './Chats'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <NavBar/>
        <UserChat/>
        <Chats/>
    </div>
  )
}

export default Sidebar
