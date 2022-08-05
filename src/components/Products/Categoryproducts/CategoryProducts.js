import React, { useContext } from 'react'
import { DataContext } from '../../../Context'
import './CategoryProducts.css'
import Resim21 from '../../../img/Resim21.png'
const CategoryProducts = () => {
    const data = useContext(DataContext);
  return (
    <div className='category-products'>
          {(data.searchProducts.length  === 0)  ?
            <div className='product-not-found-container'> 
            <h1  className='no-prod-found'>Error-404 No Product Found !!</h1>  
            <img alt='' src={Resim21} className='no-prod-found-img' />
            </div>
   :         null}
           <div  className='latest-products'>
       
     {
      data.searchProducts.map((prod)=>(
      <div className='column'>
         <div className='product-card'>
         <a href={'/product/'+prod.id}>  <img className='product-img' alt='' src={prod.img}/> </a>
          <div className='product-card-body'>
       <strong className='product-name'>{prod.name}</strong>

           
            <span className='product-desc'> {prod.description}</span>
       {  prod.discount ?  <><span className='product-price-without-discount'> {prod.price+"₺"}</span> <span className='product-price'>{Number((prod.price*75)/100)+"₺"}</span> </>   : <span  className='product-price'>{prod.price+"₺"}</span>  }
       <br/>
     

            <a href={'/product/'+prod.id} className='product-btn'>View Product </a>
            </div> 
         </div>
        </div>
      ))
}
</div>
    </div>
  )
}

export default CategoryProducts