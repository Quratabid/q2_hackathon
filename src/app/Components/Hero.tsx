import React from 'react'
import Image from 'next/image'
import { FaStar } from 'react-icons/fa'
import { FaStarHalfAlt } from "react-icons/fa";
const Hero = () => {
  return (
    <div className='w-screen'>
      
      <div className=' flex bg-[#F2F0F1] gap-52 p-5 mt-5 flex-col lg:flex-row  '>
      <div>
        <h1 className=' font-bold  md:font-extrabold text-[36px]   md:text-[52px] mx-5'>Find Clothes<br />That Matches<br />Your Style</h1>
        
        <p className='mx-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.  Aperiam modi fugi<br /> perferendis adipisci  illo atque culpa   .</p>
       
        <button className=' rounded-full bg-black text-white
        px-20  py-2 mt-5 '>Shop Now</button></div>
       
         <div>
          <Image src="/h2.png" alt='' className='pt-5' height={448} width={398}/>
         </div>

      </div>
      
      <div className=' bg-black w-screen flex gap-20 h-20 justify-center p-4 flex-wrap md:flex-nowrap '>
<Image src="/v.png" alt='' height={33} width={160}/>
<Image src="/v2.png" alt='' height={38} width={90}/>
<Image src="/v3.png" alt='' height={36} width={155}/>
<Image src="/v4.png" alt='' height={32} width={192}/>
<Image src="/v5.png" alt='' height={33} width={200}/>

      </div>

      {/*  */}
      <div className='flex  justify-center'>
        <h1 className='text-[48px] font-bold pt-6' >New Arrivals</h1>
      </div>

      <div className='flex flex-col md:flex-row p-10 gap-20 pt-3 justify-center font-poppins text-[#000000] font-semibold'>
        <div className='w-[270px] h-[350px]'>
        <Image src="/c.png" alt='' height={250} width={270}/>
        <h1 className='mt-3'>Kids T-Shirt</h1>
        <h1 className='text-[#DB4444] text-[16px]'>$289</h1>
        <div className='mt-2 flex space-x-1 '>
            <FaStar className='text-yellow-500'/>
            <FaStar className='text-yellow-500'/>
            <FaStar className='text-yellow-500'/>
            <FaStar className='text-yellow-500'/>
            <FaStar className='text-yellow-500'/>
          </div>
        </div>
        <div className='w-[270px] h-[350px]'>
        <Image src="/c2.png" alt='' height={250} width={270}/>
        <h1 className='mt-3'> Men Shirt</h1>
        <h1 className='text-[#DB4444] text-[16px]'>$289</h1>
        <div className='mt-2 flex space-x-1 '>
            <FaStar className='text-yellow-500'/>
            <FaStar className='text-yellow-500'/>
            <FaStar className='text-yellow-500'/>
            <FaStar className='text-yellow-500'/>
            <FaStar className='text-yellow-500'/>
          </div>
        </div>
        <div className='w-[270px] h-[350px]'>
        <Image src="/c3.png" alt='' height={250} width={270}/>
        <h1 className='mt-3'>Product</h1>
        <h1 className='text-[#DB4444] text-[16px]'>$289</h1>
        <div className='mt-2 flex space-x-1 '>
            <FaStar className='text-yellow-500'/>
            <FaStar className='text-yellow-500'/>
            <FaStar className='text-yellow-500'/>
            <FaStar className='text-yellow-500'/>
            <FaStar className='text-yellow-500'/>
          </div>
        </div>
        <div className='w-[270px] h-[350px]'>
        <Image src="/c4.png" alt='' height={250} width={270}/>
        <h1 className='mt-3'>Clothes</h1>
        <h1 className='text-[#DB4444] text-[16px]'>$289</h1>
        <div className='mt-2 flex space-x-1 '>
            <FaStar className='text-yellow-500'/>
            <FaStar className='text-yellow-500'/>
            <FaStar className='text-yellow-500'/>
            <FaStar className='text-yellow-500'/>
            <FaStar className='text-yellow-500'/>
          </div>
        </div>
        
        </div>


        {/* 2nd row  top selling*/}
        <div className='flex justify-center'>
        <h1 className='text-[48px] font-bold pt-10' >Top Selling

        </h1>
      </div>
        <div className='flex flex-col p-10 md:flex-row gap-20 justify-center pt-5'>
        <div className='w-[270px] h-[350px]'>
          <Image src="/c3.png" alt='' height={250} width={270}/>
          <h1 className='mt-3'>Brand</h1>
          <h1 className='text-[#DB4444]'>$269</h1>
          
          {/* Ratings (Stars) using React Icons */}
          <div className='mt-2 flex space-x-1 '>
            <FaStar className='text-yellow-500'/>
            <FaStar className='text-yellow-500'/>
            <FaStar className='text-yellow-500'/>
            <FaStar className='text-yellow-500'/>
            <FaStar className='text-yellow-500'/>
          </div>
        </div>
        <div className='w-[270px] h-[350px]'>
          <Image src="/c4.png" alt='' height={250} width={270}/>
          <h1 className='mt-3'>Shirt</h1>
          <h1 className='text-[#DB4444]'>$269</h1>

          
          {/* Ratings (Stars) using React Icons */}
          <div className='mt-2 flex space-x-1 '>
            <FaStar className='text-yellow-500'/>
            <FaStar className='text-yellow-500'/>
            <FaStar className='text-yellow-500'/>
            <FaStar className='text-yellow-500'/>
            <FaStarHalfAlt className='text-yellow-500'/>
          </div>
        </div>
        <div className='w-[270px] h-[350px]'>
          <Image src="/c.png" alt='' height={250} width={270}/>
          <h1 className='mt-3'>T-shirt</h1>
          <h1 className='text-[#DB4444]'>$269</h1>
          
          {/* Ratings (Stars) using React Icons */}
          <div className='mt-2 flex space-x-1 '>
            <FaStar className='text-yellow-500'/>
            <FaStar className='text-yellow-500'/>
            <FaStar className='text-yellow-500'/>
            <FaStar className='text-yellow-500'/>
            {/* gradient */}
            <div className="relative w-[10px] h-[10px]">
        <FaStar className='absolute inset-0 text-yellow-500' />
        <FaStarHalfAlt className='absolute inset-0 text-gray-400' />
      </div>
          </div>
        </div>
        <div className='w-[270px] h-[350px]'>
          <Image src="/c2.png" alt='' height={250} width={270}/>
          <h1 className='mt-3'>Shirt</h1>
          <h1 className='text-[#DB4444]'>$69</h1>
          
          {/* Ratings (Stars) using React Icons */}
          <div className='mt-2 flex space-x-1'>
            <FaStar className='text-yellow-500'/>
            <FaStar className='text-yellow-500'/>
            <FaStar className='text-yellow-500'/>
            <FaStar className='text-gray-400'/>
            <FaStar className='text-gray-400'/>
          </div>
        </div>
      </div>

      <div className='flex text-center  bg-[#F0F0F0] 
       justify-center font-bold   text-[32px]  md:text-[48px] mt-14 pt-7 '>
        <h1 className=''>BROWSE BY DRESS STYLE</h1>
        </div>
        <div>
        <div className='  flex flex-col md:flex-row p-5 justify-center gap-3 bg-[#F0F0F0]'>
        <Image src="/a2.png" alt='' className='' height={289} width={407}/>
        
        <Image src="/a.png" alt=''className='' height={289} width={684}/>
        </div>
        <div className='flex flex-col md:flex-row justify-center gap-3 pb-5 
        bg-[#F0F0F0]'>
        <Image src="/a3.png" alt='' height={289} width={684}/>
        <Image src="/a4.png" alt='' height={289} width={407}/>
        </div>
        </div>

     
    </div>
  )
}

export default Hero
