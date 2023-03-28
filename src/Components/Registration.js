import React from 'react'
import Navbar from './Navbar'
import reg from '../CssFiles/Registration.module.css';
import { useNavigate } from 'react-router-dom';
function Registration() {
  const navigate=useNavigate()
  function redirectToLogin(){
    navigate('/login')
  }
  return (
    <div>
       <Navbar/>
       <div className={reg.registrationForm}>
        
       <img className={reg.image} src="https://st3.depositphotos.com/3581215/18899/v/600/depositphotos_188994514-stock-illustration-vector-illustration-male-silhouette-profile.jpg" alt="registraationimgae" />
       <input className={reg.inpName} type="text" placeholder='ENTER NAME' />
       <input className={reg.username} type="text" placeholder='ENTER USERNAME' />
       <input className={reg.password} type="password" placeholder='ENTER PASSWORD'/>

        <button className={reg.registerBtn} onClick={redirectToLogin}>Register </button>
       


       </div>
    </div>
  )
}

export default Registration
