import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromBasket,complete } from "../Redux/SepetSlice.jsx";


const Sepet = () => {
 const dispatch = useDispatch();
 const {selectedProduct} = useSelector((store)=>store.sepet);

 const totalPrice = selectedProduct.reduce((total, product) => total + product.count* product.Price, 0);




const handleDelete =(id)=>{
    dispatch(removeFromBasket({id}));
}

const order =()=>{
  dispatch(complete());
}


  return (
    <div>
        <h1 className="text-white text-center text-6xl font-bold mt-12">Seçili Ürünler</h1>
        
        <div className="grid  md:grid-cols-8 sm:grid-cols-2 max-w-7xl mx-auto">

         {selectedProduct.map((product,index)=>(
            <div className="md:col-span-2 sm:col-span-1 mt-10 mx-auto" key={index}>
            <h1 className='text-yellow-500'>{product.Name}</h1>
            <h4 className='text-white mt-2'>Fiyat : {product.Price} TL</h4>
            <h4 className='text-white'>Adet : {product.count} TL</h4>
            <img src={product.Image} className='w-28 h-28' />
            
              <button className="bg-red-700 px-11 py-2 mt-6 text-white rounded-3xl" onClick={()=>handleDelete(product.id)} >Sil</button>
             
            
            </div>
        ))}
        
        </div>
        
        <div className="flex justify-center items-center space-x-14 mt-16">
          <h1 className='text-white text-2xl'>Toplam Tutar : {totalPrice} TL</h1>
          <button className="bg-yellow-400 px-8 py-4 text-2xl  rounded-2xl" onClick={order}>Sipariş Ver</button>
        </div>
         
    </div>
  )
}

export default Sepet