import React from 'react'
import {useNavigate} from 'react-router-dom';
import './Paymentform.css'
const Paymentform = () => {
    let navigate = useNavigate();
  return (
    <div>
        <div id='moveDown' className='login-form'>
    <h3>Payment Form</h3>
    <div className='account-form-input-field'>
    
    <label>Cart Owner name</label>
      <input className='form-text' type="text"/>
      </div>
      <div className='account-form-input-field' >
   
    <label>Cart Owner Surname</label>
      <input className='form-text' type="text" />
      </div>
      <div  className='account-form-input-field'>

      <label>Cart Number</label>
      <input className='form-text ' type="text" />
     
      </div>
      
   
      <div id='cartInfo'  className='account-form-input-field'>

    
<input className='form-text text-w-40' type="text" placeholder='CVV' />
<input className='form-text text-w-40' type="text" placeholder='Expiration Date' />

</div>
    
   <button className='confirm-shopping'>Confirm</button>
   <div className='address-buttons payment-buttons'>
        <button onClick={()=>navigate('/Addressform')}>Back</button>
        
      </div>
   
     
</div>
    </div>
  )
}

export default Paymentform