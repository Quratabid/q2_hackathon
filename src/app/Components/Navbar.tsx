import React from 'react'
import Link from 'next/link'
import { FaSearch } from 'react-icons/fa';
import { IoCartOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (     
<div>

{/* navbar section */}

<div className='bg-white w-full flex'>
{/* Left side of Navbar */}
<div className=' flex  gap-4'>
  <h1 className='
  mx-14 px-3 text-[18px] font-extrabold w-[126px] h-[18px] p-7   lg:text-[32px] lg:font-bold lg:pb-7  '>SHOP.CO</h1>
  <ul className='font-extralight  flex gap-4 mt-10'>
    <li className='
    text-[16px] font-poppins'><Link href="">Shop </Link></li>
    <li className=' text-[16px] font-poppins'><Link href="">On Sale</Link></li>
    <li className=' text-[16px] font-poppins'><Link href="">New Arrivals</Link></li>
    <li className='  text-[16px] font-poppins'><Link href="">Brands</Link></li>
  </ul>
</div>

{/* Searchbar, Heart, and Cart icons in one line */}
  <div className="flex items-center gap-6 ml-auto mt-6 mr-28">
  {/* Searchbar */}
  <div className="border rounded-md px-4 py-2 w-[243px] bg-gray-100 focus-within:border-[#c38b2a] flex items-center">
      <FaSearch className="h-[24px] w-[24px] text-[#767373]" /> 
  <input
      type="text"
      placeholder="What are you looking for?"
      className="w-full bg-transparent outline-none text-sm text-gray-700 placeholder-gray-500"
    />
    
  </div>
    <Link href="/cart" className="text-xl mt-2  text-gray-700
   hover:text-teal-200">
    <IoCartOutline  />
  </Link>
    <Link href=""> <FaRegUserCircle className="text-xl mt-2  text-gray-700 hover:text-teal-200"/>
  </Link>
</div>
</div>
</div>
  )
}

export default Navbar
