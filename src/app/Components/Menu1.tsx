"use client"
import React from 'react'
import { useState } from 'react';
import { Menu } from 'lucide-react';
import Link from 'next/link';
 import { FaSearch } from 'react-icons/fa';
 import { IoCartOutline } from "react-icons/io5";
 import { FaRegUserCircle } from "react-icons/fa";
const Menu1 = () => {
  const [open,setOpen]=useState(false)
    return (
    <div className='md:hidden gap-8 flex justify-between'>
      <div className='flex'>
      <Menu className='md:hidden m-5  '
      onClick={()=>setOpen((prev)=>!prev)} />
       
      
  
        {open && (

          
          <ul className='font-extralight   gap-4 mt-8'>
          <li className='
          text-[16px] font-poppins'><Link href="">Shop </Link></li>
          <li className=' text-[16px] font-poppins'><Link href="">On Sale</Link></li>
          <li className=' text-[16px] font-poppins'><Link href="">New Arrivals</Link></li>
          <li className='  text-[16px] font-poppins'><Link href="">Brands</Link></li>
        </ul>
        )}
       <h1 className='
   text-[18px] font-extrabold  pt-5 lg:text-[32px] lg:font-bold 
   lg:pb-7  '>SHOP.CO</h1>
   <div className='flex  gap-4 mx-9'>
    <Link href="/"className="  text-xl text-[#767373] mt-6">
   <FaSearch /> </Link>
    {/* Cart Icon */}
  <Link href="/cart" className="text-xl mt-6  text-gray-700 hover:text-teal-200">
    <IoCartOutline  />
  </Link> 
     
     <Link href=""> <FaRegUserCircle className="text-xl mt-6  text-gray-700 hover:text-teal-200"/></Link>
     </div>
      </div>
      
    </div>
  )
}

export default Menu1
