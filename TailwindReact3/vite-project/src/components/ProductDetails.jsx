import axios from 'axios';
import React, { useEffect,useState } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import { addToBasket } from '../Redux/SepetSlice';

const ProductDetails = () => {

const [count, setcount] = useState(1);  
const {id} = useParams();
const [product, setproduct] = useState({})
const dispatch = useDispatch();

const amount = product.price * count;

const getProductById= async()=>{
const response = await axios.get(`http://localhost:3000/products/${id}`);
setproduct(response.data);    
};

useEffect(()=>{
    getProductById();
},[id])


const increment =()=>{
   setcount(count+1);
}

const decrement =()=>{
  if(count>1)
  {
    setcount(count-1)
  }
};

const sepeteEkle=()=>{
    const payload = {
        id,
        Name: product.name,
        Price: product.price,
        Image: product.image,
        count
     };
     dispatch(addToBasket(payload));
}



  return (
    <div className='mt-4'>
 <div className='max-w-7xl min-h-full mx-auto'>
   <h1 className='text-white text-4xl mt-16 text-center'>{product.name}</h1>

   <div className='grid grid-cols-1 md:grid-cols-2 mt-12'>

   <div className='col-span-1 w-full'>
  <img className='w-[250px] h-[300px]' src={product.image} />
   </div>

   <div className='col-span-1 w-full'>
    <h3 className='text-center text-white text-2xl'>{product.description}</h3>

    <div className='flex justify-center space-x-4 mt-5'>

   <button className='bg-green-500 px-10 py-2'
    onClick={increment}>
    +</button>

   <span className='text-white text-lg font-bold'>{count}</span>

   <button className='bg-red-700 px-10 py-2' onClick={decrement}>-</button>

    </div>
    <h3 className='text-center text-green-700 text-2xl'>Fiyat :  {amount}TL</h3>
    
    <div className='flex justify-center mt-12'>
    <button className='bg-yellow-400 px-12 py-4'
     onClick={sepeteEkle}>Satın Al</button>
    </div>
    
   </div>
   </div>
</div>          
  

    </div>
  )
}

export default ProductDetails