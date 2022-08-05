import React from 'react'
import './Register.css';
const Register = () => {
  return (
    <div>
          <div className='login-form-container'>
     
     <div className='login-form'>
      <h3>REGISTER</h3>
      <div className='account-form-input-field'>
    <label>Username</label>   
    
      <input className='form-text' type="text" />
      </div>
      <div className='account-form-input-field'>
    <label>Password</label>   
    
      <input className='form-text' type="password" />
      </div>
      <div className='account-form-input-field'>
    <label>Email</label>   
    
      <input className='form-text' type="email" />
      </div>
      <div className='account-form-input-field'>
    <label>re-Password</label>   
    
      <input className='form-text' type="text" />
      </div>
      <div className='account-form-input-field'>
    <label>Address</label>   
    
      <textarea id='addressTextArea' className='form-text' type="text" />
      </div>
      <button className='login-btn'>register</button>
     
     
     </div>
    
        </div>
    </div>
  )
}

export default Register