import React from 'react'
import './Login.css'
const Login = () => {
  return (
      <div className='logincontainer'>
          <h3 className='label'>Sign in to your account</h3>
          <input className='input' type='email' placeholder='Email/Phone number' name='email'></input><br/>
          <input className='input secondinput' type='password' placeholder='Password' name='password' /><br/>
          <a href='/main'><button className='loginbutton'>Login</button></a>
    </div>
  )
}

export default Login
