import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-yellow-400 text-white py-4 mt-20'>
  <div className='max-w-6xl mx-auto px-4'>
  
  <div className='flex justify-between items-center'>
  
  <div>
 <p className='text-lg font-bold'>Getir Yemek</p>
 <p className='text-sm'>&copy; 2025 Tüm Hakları Saklıdır </p>
  </div>

  <div className='flex space-x-4'>
<a href="" className='text-sm'>Hakkımızda</a>
<a href="" className='text-sm'>Hizmetler</a>
<a href="" className='text-sm'>İletişim</a>
  </div>

  </div>
  </div>
    </footer>
  )
}

export default Footer