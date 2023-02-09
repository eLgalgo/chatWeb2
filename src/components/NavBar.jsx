import { signOut } from 'firebase/auth'
import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext';
import { auth } from '../firebase'

const NavBar = () => {
    const {currentUser} = useContext(AuthContext);
  return (
    <div className='navBar'>
        <span>Cha en la We</span>
        <div>
            <span>{currentUser.displayName}</span>
            <button onClick={()=> signOut(auth)}>Salir</button>
        </div>
    </div>
  )
}

export default NavBar