import React from 'react'
import { RiAccountCircleLine } from "react-icons/ri";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Navbar = () => {


const navigate = useNavigate();


  return (
  <nav className='bg-black text-white'>
    <div className='max-w-7xl mx-auto px-4'>
  
  <div className='flex justify-between items-center h-16 flex-wrap'>
   
   <div className='flex items-center'>
   <img className='h-11 w-16' src='https://upload.wikimedia.org/wikipedia/commons/3/38/Getir_wordmark.svg'/>

   <div className='space-x-5 ml-12'>
     <Link to="/" >Anasayfa</Link>
     <a href='#' >İletişim</a>
     <a  href='#'>Hizmetlerimiz</a>
   </div>
  
   </div>
  
   <div className='space-x-5 flex items-center'> 
    
  <Link to="/sepet"  className='text-yellow-400 text-4xl'> 
    <div className='flex justify-center'> 
    <span className='text-base text-yellow-400'>Sepet</span>
    <FaShoppingCart/>
    </div>
     </Link> 
  
  <button className='bg-yellow-400 text-black p-2 rounded'>Giriş Yap</button>
  <button className='bg-yellow-400 text-black p-2 rounded'>Üye Ol</button>
</div>
  </div>
    </div>

  </nav>
  )
}

export default Navbar