import React from 'react'
import Navbar from './components/Navbar'
import {Routes,Route} from "react-router-dom"
import Footer from './components/Footer'
import HomeScreen from './Screen.jsx/HomeScreen'
import Sepet from './components/Sepet'
import ProductDetails from './components/ProductDetails'


const App = () => {
  return (
    <div className='flex flex-col '>
      <Navbar/>
       <Routes>
    <Route path='/' element={<HomeScreen/>} />
    <Route path='/sepet' element={<Sepet/>} />
    <Route path='/detail/:id' element={<ProductDetails/>} />
      </Routes>
    
     
    </div>
  )
}

export default App