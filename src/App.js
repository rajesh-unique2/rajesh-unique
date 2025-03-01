import logo from './logo.svg';
import './App.css';
import Card from './Card.js'
import Home from './Home.js'
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Product from './Product.js';
import Atoc from './Atoc.js';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Card/>}/>
      <Route path='/Home' element={<Home/>} />
      <Route path='/Card' element={<Card/>}/>
      <Route path='/Product' element={<Product/>}/>
      <Route path='/Home/Atoc' element={<Atoc/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
