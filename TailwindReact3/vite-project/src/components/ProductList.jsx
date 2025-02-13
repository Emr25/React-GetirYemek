import React, { useEffect } from 'react'
import { FaTurkishLiraSign } from "react-icons/fa6";
import {useDispatch, useSelector} from 'react-redux'
import { fethProducts } from '../Redux/ProductSlice';
import { addToBasket } from '../Redux/SepetSlice';
import { useNavigate } from 'react-router-dom';



const ProductList = () => {

const dispatch = useDispatch()
const {products} = useSelector((store)=>store.product)
const navigate = useNavigate();





useEffect(()=>{
  dispatch(fethProducts())
},[])


  return (
    <div className='min-h[400px] max-h[450px]  mt-32 '>
   <h1 className='text-4xl font-bold text-center text-yellow-400'> 
      Sıcak Yemekler
   </h1>
   
   <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12'>

   {products.map((product)=>(
    <div key={product.id} className='rounded-lg p-6 w-60 mx-auto border-4 border-white mt-8 '>
         
         <img src={product.image} className='w-full h-36 object-cover mb-4 rounded-lg' />
         <h2 className='text-2xl font-thin text-white'>{product.name}</h2>
         <p className='text-white font-thin text-sm'>{product.description}</p>
         <div className='flex'>
         <a className='text-green-500 text-2xl font-extrabold'>{product.price}</a>
         <span className='p-4'> <FaTurkishLiraSign/> </span>
         </div>

         <div className='flex justify-center mt-4'> 
            <button className='bg-yellow-400 text-black font-extrabold p-4 rounded-3xl'
            onClick={()=>navigate(`/detail/${product.id}`)}
            >Sipariş Ver</button>
         </div>
     </div>
   ))}


   </div>

    </div>
  )
}

export default ProductList