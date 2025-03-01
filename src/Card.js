import React from 'react'
import './Card.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Card = () => {
  const navi=useNavigate();
  var detail=[{name:'rajesh',pin:111}]
  const [first, setfirst] = useState('')
  const [pin, setfirst1] = useState('')
  function login(e){
    detail.map((data,i)=>{
        if(data.name==first && data.pin==pin)
        {
          localStorage.setItem('name',first)
          localStorage.setItem('pin',pin)
          navi('/Home')
        }

    })
  }
  return (
    <div className='main'>
    <div className='login'>
      <h1 id='h1'>LOGIN</h1>
      <input type='text' className='input' placeholder='Name' value={first} onChange={(e)=>setfirst(e.target.value)}/>
      <input type='password'className='input' placeholder='Password' value={pin} onChange={(e)=>setfirst1(e.target.value)}/><br></br>
      <button className='btn' onClick={login}>LOGIN</button>
    </div>
    </div>    
  )
}

export default Card