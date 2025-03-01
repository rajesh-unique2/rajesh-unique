import React, { useEffect } from 'react'
import Card from './Card'
import './Home.css'
import Product from './Product'
import { Navigate, useNavigate, } from 'react-router-dom'
import H2r from './h2r.jpeg'
import Haya from './haya.jpeg'
import Duc from './ducati.jpeg'
import axios from 'axios'
import { useState } from 'react'


const Home = () => {
  const navi=useNavigate();
  function logout(){
    localStorage.removeItem('name');
    localStorage.removeItem('pin');
    navi('/Card');
  }
  const [product,setproduct] = useState([])
  async function fetching() {
    axios.get('https://dummyjson.com/products/category/smartphones').then((res)=>{
      setproduct(res.data.products)
    })
  }
  useEffect(() => {
    fetching()
  },[])
  console.log(product);

  
  return (
    <div id='div'>
        <div id='one'>
          <div id='image'>
            <img id='img'src ='https://th.bing.com/th?id=OIP.i5i9-fmI35FOKKqZqzdpUwHaFz&w=282&h=221&c=8&rs=1&qlt=90&o=6&cb=15&dpr=1.5&pid=3.1&rm=2' width={'60px'} height={'60px'} alt={'this is a image'}/>
            </div>
            <div id='nav'>
              <p className='para'>Home</p>
              <p className='para'>About</p>
              <p className='para'>Contact</p>
              <button>Login</button>
            </div>
        </div>
        <div>
        <div id='two'>
          {
            product.length>0 && <div  id='three'>
              {
                product.map((data)=>{
                  
                  return (
                  <Product path={data.images[0]}rating={data.rating} content={data.description} id={data.id} model={data.title} price={data.price}/>

                )
                })
              }
            </div>
          }
        </div>
        </div>
       
    </div>
  )
}

export default Home