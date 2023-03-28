import React from 'react'
import { useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate=useNavigate()
  function redirectToLogin(){
    navigate('/login')
  }
  function redirectToRegistration(){
    navigate('/registration')
  }
  function redirectToAboutMe(){
    navigate('/aboutme')
  }
  return (
    <div>
      <nav className='completeNavbar'>
      <h1 className='name'>Rohan</h1>
        <ul className='navbar' >
          <li style={{cursor:'pointer'}} onClick={redirectToAboutMe}>About Me</li>
          <li style={{cursor:'pointer'}} onClick={redirectToRegistration}>Registration</li>
          <li style={{cursor:'pointer'}} onClick={redirectToLogin}>Login</li>
          <img src="https://i.pinimg.com/736x/2b/f6/22/2bf622a1228054df5223a2d061af23cf.jpg" alt="icon" className='icon'/>

        </ul>
      </nav>
    </div>
  )
}

export default Navbar
