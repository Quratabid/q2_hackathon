import React from 'react'
import Image from 'next/image'
import { FaStar } from 'react-icons/fa'
import { FaStarHalfAlt } from "react-icons/fa";
const Hero = () => {
  return (
    <div className=''>
      
      <div className=' flex bg-[#F2F0F1] sm:items-center lg:gap-36 lg:px-10 xl:px-44  p-5 mt-5 flex-col lg:flex-row  '>
      <div>
        <h1 className=' font-bold  md:font-extrabold  text-[28px]sm:text-[36px]  md:text-[40px] lg:text-[52px] px-5'>Find Clothes<br />That Matches<br />Your Style</h1>
        
        <p className=''>Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />
         Aperiam modi fugi perferendis adipisci  illo atque culpa   .</p>
       
        <button className=' rounded-full bg-black text-white
        px-20  py-2 mt-5 '>Shop Now</button></div>
       
         <div>
          <Image src="/h2.png" alt='' className=' ' height={448} width={398}/>
         </div>

      </div>
      
      <div className=' bg-black w-full flex gap- h-20 justify-center p-4 flex-wrap md:flex-nowrap '>
<Image src="/v.png" alt='' height={33} width={160}/>
<Image src="/v2.png" alt='' height={38} width={90}/>
<Image src="/v3.png" alt='' height={36} width={155}/>
<Image src="/v4.png" alt='' height={32} width={192}/>
<Image src="/v5.png" alt='' height={33} width={200}/>

      </div>

      {/*  */}
      <div className='flex  justify-center'>
        <h1 className='text-[48px] font-bold pt-5' >New Arrivals</h1>
      </div>

      <div className='flex flex-col md:flex-row p-10 gap-10 pt-3 justify-center font-poppins text-[#000000] font-semibold'>
        <div className='w-[270px] h-[350px]'>
        <Image src="/c3.png" alt='' height={250} width={270}/>
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
        <h1 className='text-[48px] font-bold ' >Top Selling

        </h1>
      </div>
        <div className='flex flex-col p-10 md:flex-row gap-10 justify-center pt-5'>
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
          <Image src="/c1.png" alt='' height={250} width={270}/>
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
       justify-center font-bold   text-[32px]  md:text-[48px] mt-5 pt-7 '>
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
        <div>

        
        <h1 className=' text-[32px] md:text-[48px]  p-10 font-bold '>OUR HAPPY CUSTOMERS</h1></div>
        <div className='  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center  '>
        <div className=''>
         
        <div className='mt- mx-20 flex space-x-3 '>
            <FaStar className='text-yellow-500'/>
            <FaStar className='text-yellow-500'/>
            <FaStar className='text-yellow-500'/>
            <FaStar className='text-yellow-500'/>
            <  FaStarHalfAlt className='text-yellow-500'/>
          </div>
        <h1 className='text-[20px]  font-bold mx-20 mt-3'>Sara M.</h1>
        
        <p className=' mx-20 text-[16px] text-gray-400 '>I am blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses every piece I have bought has exceeded my expectations.</p>
        </div>
        <div className=''>
        <div className='mt-2 mx-20 flex space-x-3 '>
            <FaStar className='text-yellow-500'/>
            <FaStar className='text-yellow-500'/>
            <FaStar className='text-yellow-500'/>
            <FaStar className='text-yellow-500'/>
            <  FaStarHalfAlt className='text-yellow-500'/>
          </div>
        <h1 className='text-[20px]  font-bold mx-20 mt-3'>Alex K.</h1>
        
        <p className=' px-20 text-[16px] text-gray-400 '>Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable  catering to a variety of tastes and occasions.</p>
        </div>
        <div className=''>
        <div className='mt-2 mx-20 flex space-x-3 '>
            <FaStar className='text-yellow-500'/>
            <FaStar className='text-yellow-500'/>
            <FaStar className='text-yellow-500'/>
            <FaStar className='text-yellow-500'/>
            <  FaStarHalfAlt className='text-yellow-500'/>
          </div>
        <h1 className='text-[20px]  font-bold mx-20 mt-3'>James L.</h1>
        
        <p className=' mx-20 text-[16px] text-gray-400 '>As someone who is always on the lookout for unique fashion pieces. I am thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.</p>
        </div>
      </div>
<div       className='bg-black md:h-[180px]  w-full  flex flex-col md:flex-row  justify-center lg:mt-9 p-5  lg:pl-5'>
        <div className='flex-1'>
        <h1 className='font-bold text-[32px]  lg:text-[40px] text-white '>STAY UPTO DATE ABOUT  <br />OUR LATEST OFFERS</h1></div>
       
   <div className='flex-1 space-y-7 '>
<input type="" className='rounded-full text-center border 
w-[280px] h-[42px] lg:w-[349px] lg:h-[46px] border-gray-400 mt-5 ' 
placeholder='Enter your email' />
<div className='border border-gray-400 rounded-full 
lg:w-[349px] lg:h-[46px] w-[280px] h-[42px] p-2 text-black lg:pt-3 bg-white text-center items-center '>
  Subscribe to Newsletter</div></div>
      </div>
{/*       ///////////////////////////////////////// */}
      <div className='flex pt-14 px-6'>
              <h1>Home <span className='mx-3'>/</span></h1>
              <h1>Casual</h1>
            </div>
            <div className='flex  flex-col lg:flex-row'>
              {/* Sidebar */}
              <div className='flex-1 items-center lg:w-[250px] px-6 space-y-8'>
                <div>
                  <h1 className='font-bold text-[20px] pt-4'>Filters</h1>
                </div>
      
                <div className='text-gray-400 space-y-5'>
                  <h1>T-shirts</h1>
                  <h1>Shorts</h1>
                  <h1>Shirts</h1>
                  <h1>Hoodie</h1>
                  <h1>Jeans</h1>
                </div>
      
                <div>
                  <h1>Price</h1>
                  <Image src="/line.png" alt='' height={6} width={150} />
                  <h1 className='mx-1'>$50 <span className='mx-10'></span>$200</h1>
                </div>
      
                <div>
                  <h1>Colors</h1>
                  <div className="flex gap-3 pb-3">
                    {/* Color Circles */}
                    <div className="bg-green-500 rounded-full h-[37px] w-[37px]"></div>
                    <div className="bg-blue-500 rounded-full h-[37px] w-[37px]"></div>
                    <div className="bg-purple-500 rounded-full h-[37px] w-[37px]"></div>
                    <div className="bg-yellow-500 rounded-full h-[37px] w-[37px]"></div>
                    <div className="bg-orange-500 rounded-full h-[37px] w-[37px]"></div>
                   </div> <div className='flex gap-3'>
                    <div className="bg-blue-500 rounded-full h-[37px] w-[37px]"></div>
                    <div className="bg-yellow-500 rounded-full h-[37px] w-[37px]"></div>
                    <div className="bg-orange-500 rounded-full h-[37px] w-[37px]"></div>
                    <div className="border border-gray-400 rounded-full h-[37px] w-[37px]"></div>
                    <div className="bg-purple-500 rounded-full h-[37px] w-[37px]"></div>
                  </div>
                </div>
      
                <div>
                  <h1>Size</h1>
                  <div className='  space-y-4 space-x-3'>
                    {['Small',  'Medium', 'Large','X-Large'].map((size, index) => (
                      <button key={index} className='text-gray-400 h-[39px] w-[90px] border border-gray-500 bg-gray-100 rounded-full'>
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
      
                <div className='space-y-4'>
                  <h1 className='text-[20px] font-bold'>Dress Style</h1>
                  <h2 className='text-gray-400'>Casual</h2>
                  <h2 className='text-gray-400'>Formal</h2>
                  <h2 className='text-gray-400'>Party</h2>
                  <h2 className='text-gray-400'>Gym</h2>
                  <div className='border border-gray-400 rounded-full md:w-[247px] lg:h-[48px] w-[295px] h-[48px] p-3 bg-black lg:pt-3 text-white text-center items-center'>
                    Apply Filter
                  </div>
                </div>
              </div>
      
              {/* Products Section */}
              <div className='flex-1'>
                <h1 className='text-[32px] font-bold mx-12'>Casual</h1>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 pt-3 justify-center'>
                  {/* Product 1 */}
                  <div className='p-5'>
                    <Image src="/c2.png" height={350} width={270} alt=""/>
                    <h1 className='mt-3'>Clothes</h1>
                    <div className='mt-2 flex space-x-1'>
                      <FaStar className='text-yellow-500'/>
                      <FaStar className='text-yellow-500'/>
                      <FaStar className='text-yellow-500'/>
                      <FaStar className='text-yellow-500'/>
                      <FaStar className='text-yellow-500'/>
                    </div>
                    <h1 className='text-[#DB4444] text-[16px] pt-2'>$289</h1>
                  </div>
      
                  {/* Product 2 */}
                  <div className='p-5'>
                    <Image src="/c1.png" height={350} width={270} alt=""/>
                    <h1 className='mt-3'>Clothes</h1>
                    <div className='mt-2 flex space-x-1'>
                      <FaStar className='text-yellow-500'/>
                      <FaStar className='text-yellow-500'/>
                      <FaStar className='text-yellow-500'/>
                      <FaStar className='text-yellow-500'/>
                      <FaStar className='text-yellow-500'/>
                    </div>
                    <h1 className='text-[#DB4444] text-[16px] pt-2'>$289</h1>
                  </div>
      
                  {/* Product 3 */}
                  <div className='p-5'>
                    <Image src="/c3.png" height={350} width={270} alt=""/>
                    <h1 className='mt-3'>Clothes</h1>
                    <div className='mt-2 flex space-x-1'>
                      <FaStar className='text-yellow-500'/>
                      <FaStar className='text-yellow-500'/>
                      <FaStar className='text-yellow-500'/>
                      <FaStar className='text-yellow-500'/>
                      <FaStar className='text-yellow-500'/>
                    </div>
                    <h1 className='text-[#DB4444] text-[16px] pt-2'>$289</h1>
                  </div>
      
                  {/* Product 4 */}
                  <div className='p-5'>
                    <Image src="/c2.png" height={350} width={270} alt=""/>
                    <h1 className='mt-3'>Party wear</h1>
                    <div className='mt-2 flex space-x-1'>
                      <FaStar className='text-yellow-500'/>
                      <FaStar className='text-yellow-500'/>
                      <FaStar className='text-yellow-500'/>
                      <FaStar className='text-yellow-500'/>
                      <FaStar className='text-yellow-500'/>
                    </div>
                    <h1 className='text-[#DB4444] text-[16px] pt-2'>$289</h1>
                  </div>
      
                  {/* Product 5 */}
                  <div className='p-5'>
                    <Image src="/c2.png" height={350} width={270} alt=""/>
                    <h1 className='mt-3'>Menswear</h1>
                    <div className='mt-2 flex space-x-1'>
                      <FaStar className='text-yellow-500'/>
                      <FaStar className='text-yellow-500'/>
                      <FaStar className='text-yellow-500'/>
                      <FaStar className='text-yellow-500'/>
                      <FaStar className='text-yellow-500'/>
                    </div>
                    <h1 className='text-[#DB4444] text-[16px] pt-2'>$289</h1>
                  </div>
      
                  {/* Product 6 */}
                  <div className='p-5'>
                    <Image src="/c1.png" height={350} width={270} alt=""/>
                    <h1 className='mt-3'>Shirts</h1>
                    <div className='mt-2 flex space-x-1'>
                      <FaStar className='text-yellow-500'/>
                      <FaStar className='text-yellow-500'/>
                      <FaStar className='text-yellow-500'/>
                      <FaStar className='text-yellow-500'/>
                      <FaStar className='text-yellow-500'/>
                    </div>
                    <h1 className='text-[#DB4444] text-[16px] pt-2'>$289</h1>
                  </div>
                </div>
              </div>
            </div>
    </div>
  )
}

export default Hero
