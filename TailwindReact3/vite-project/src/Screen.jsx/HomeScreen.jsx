import React from 'react'
import MainHead from '../components/MainHead'
import ProductList from '../components/ProductList'
import Moto from '../components/Moto'
import Footer from '../components/Footer'

const HomeScreen = () => {
  return (
    <div>
        <MainHead/>
        <ProductList/>
        <Moto/>
        <Footer/>
    </div>
  )
}

export default HomeScreen