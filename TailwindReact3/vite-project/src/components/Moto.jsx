import React from 'react'

const Moto = () => {
  return (
    <div className='min-h-full mt-24 '>

     <h1 className='text-yellow-400 font-extrabold text-center text-4xl'>Hızlı Teslimat</h1>
    <div className='w-full max-w-7xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-6 md:grid-cols-12 lg:grid-cols-18 gap-12'>
    

    <div className='w-full  sm:col-span-4 md:col-span-8 '>
        
    <img className='w-full h-96'  src='https://st4.depositphotos.com/4218696/37940/i/450/depositphotos_379407650-stock-photo-delivery-guy-opening-bag-standing.jpg'/>
    </div>


    <div className='w-full sm:col-span-2 md:col-span-4 h-40 '>
     <p className='font-thin text-lg text-white'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt alias nemo labore nostrum dolorum magni ducimus, modi adipisci odit assumenda vero aspernatur!</p>
    </div>

   
    </div>
    </div>
  )
}

export default Moto