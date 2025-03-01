import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios1 from 'axios'
import Product from './Product'
import './Atoc.css'

const Atoc = () => {
    const [prod,setprod] = useState([])
    async function fetching() {
      axios1.get('https://dummyjson.com/products/category/smartphones').then((res)=>{
        setprod(res.data.products)
      })
    }
    useEffect(() => {
      fetching()
    },[])
    var id=localStorage.getItem('userid')
    console.log('error')
    return (
        <div id='back'>
          {prod.map((data) => {
            if (data.id == id) {
              return (
                <div id="about" >
                  <img
                    className="bike"
                    src={data.images[0]}
                    width="200px"
                    height="200px"
                  />
                  <h2>{data.title}</h2>
                  <p id="price">${data.price}</p>
                  <div id='maincontent'>
                    <p ><h3 className='h'>Brand : </h3>{data.brand}</p>
                    <p ><h3 className='h'>Category : </h3>{data.category}</p>
                    <p><h3>Size</h3>Width={data.dimensions.width} Height={data.dimensions.height}</p>
                    {/* <p><h3 className='h des'>Description</h3>{data.description}</p> */}
                  </div>
                  
                </div>
              );
            }
            return null;
          })}
        </div>
      );
       
}

export default Atoc