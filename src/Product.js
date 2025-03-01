import React, { useState } from 'react'
import './Product.css'
import { useNavigate } from 'react-router-dom'
import Atoc from './Atoc'


function Product(props) {
    const navi1=useNavigate()
    function change(){
      console.log(props.id)
      localStorage.setItem('userid',props.id)
      navi1('./Atoc')
    } 
 
  return ( 
        <div id='card'>
            <img className='bike'src={props.path} width={'200px'} height={'200px'}/>
            <h2 id='heading'>{props.model}</h2>
            <p id='price'>{props.price} $</p>
            <p>Rating:{props.rating}</p>
            <p>Available Colors</p>
            
            <div>
              <input type='checkbox' id='check1'/>
              <label id='red' for='check1'></label>
              <input  type='checkbox' id='check2'/>
              <label id='silver'for='check2'></label>
              <input type='checkbox' id='check3'/>
              <label id='orange'for='check3'></label>
            </div>
            <br></br>
            <button onClick={change}>ADD To Cart</button>
        </div>
  )
}

export default Product