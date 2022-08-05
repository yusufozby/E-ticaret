import React from 'react'
import './Login.css';
import {FaGoogle,FaFacebook} from 'react-icons/fa';

const Login = () => {
  return (
    <div className='login-form-container'>
     
 <div className='login-form'>
  <h3>LOGIN</h3>
  <div className='account-form-input-field'>
<label>Username</label>   

  <input className='form-text' type="text" />
  </div>
  <div className='account-form-input-field'>
<label>Password</label>   

  <input className='form-text' type="password" />
  </div>
  <button className='login-btn'>Login</button>
  <a className='forgot-pswd' href='/'>Forgot password</a>
  <div className='login-with-social-media'>
  <button id='loginFacebook' >Login with facebook <FaFacebook className='login-icon'/></button>
  <button id='loginGoogle' >Login with Google <FaGoogle className='login-icon'/></button>
  </div>
 </div>

    </div>
  )
}

export default Login