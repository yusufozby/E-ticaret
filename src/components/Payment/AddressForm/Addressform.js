import React, { useState } from 'react';
import './Addressform.css';
import {useNavigate} from 'react-router-dom';

const Addressform = () => {
    var [tel,setTel] = useState('');
    let navigate = useNavigate();
const format = (e) => {
    
    const extractNumbers = e.target.value.replace(/[\D]/g,"")
    if(extractNumbers.length < 4){
    setTel(extractNumbers)
    }
    else if(extractNumbers.length < 7){
        setTel(`(${extractNumbers.slice(0,3)}) ${extractNumbers.slice(3,6)}`);
    }
    else if(extractNumbers.length < 9){
        setTel(`(${extractNumbers.slice(0,3)}) ${extractNumbers.slice(3,6)} ${extractNumbers.slice(6,8)}`);
    }
    else {
        setTel(`(${extractNumbers.slice(0,3)}) ${extractNumbers.slice(3,6)} ${extractNumbers.slice(6,8)}-${extractNumbers.slice(8,10)}`);
    }
 
        
   
     
    }
  return (
   
<div id='moveDown' className='login-form'>
    <h3>Address Form</h3>
    <div className='account-form-input-field'>
    <label>Name</label>   
    
      <input className='form-text' type="text" />
      </div>
      <div className='account-form-input-field'>
    <label>Surname</label>   
    
      <input className='form-text' type="text" />
      </div>
      <div className='account-form-input-field'>
    <label>Email</label>   
    
      <input className='form-text' type="email" />
      </div>
      <div className='account-form-input-field'>
    <label>Tel no ( without 0 )</label>   
    
      <input className='form-text' type="text" value={tel}   onChange={(e)=>format(e)} />
      </div>
      <div  className='account-form-input-field'>
    <label>Address</label>   
    
      <textarea id='addressHeight' className='form-text' type="text" ></textarea>
      </div>
      <div className='address-buttons'>
        <button onClick={()=>navigate('/Cart')}>Back</button>
        <button onClick={()=>navigate('/Paymentform')}>Next</button>
      </div>
</div>
    
  )
}

export default Addressform