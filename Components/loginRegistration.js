import '../Css/LoginRegistrationCss.css'
import { useState } from "react";


export function LoginRegistration() {
  const [form , setForm]=useState(true)
  
function handleLogin(){
  return(
  setForm(true)
  )
}

 function handleRegistration(){

  return(
  setForm(false) 
  
  )
}

return(

    <form className='completeForm'> 

    {form === true ? <Login/> : <Registration/>}
 <button onClick={handleLogin} > Login</button>
 <button onClick={handleRegistration}>Registration</button>
  </form>
  );
}


function Login(){
  return(
    <>  
    <input type="email" placeholder="enter email"/>
    <br/><br/>
    <input type="password" placeholder="enter password"/>
    <br/><br/>
    </>
  )

}

function Registration(){
  return(
    <>  
    <input type="text" placeholder="enter First Name"/>
    <br/><br/>
    <input type="text" placeholder="enter Last Name"/>
    <br/><br/>
    <input type="email" placeholder="enter email"/>
    <br/><br/>
    <input type="password" placeholder="enter password"/>
    <br/><br/>
    </>
  )
  }