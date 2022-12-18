import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'
const Login = () => {
  const navigate = useNavigate();
  const validate = () => {
    console.log(document.getElementById('email').value)
    if ((document.getElementById('email').value !== '') && (document.getElementById('pass') !== '')) {
      navigate('/main');
    }
    else {
      alert("Enter email and password to signin")
    }
  }
  return (
      <div className='logincontainer'>
          <h3 className='label'>Sign in to your account</h3>
          <input className='input' type='email' placeholder='Email/Phone number' id='email' name='email' required></input><br/>
          <input className='input secondinput' type='password' placeholder='Password' id='pass' name='password' required/><br/>
          <button className='loginbutton' onClick={()=>validate()}>Login</button>
    </div>
  )
}

export default Login
