import React from 'react'
import { RiFacebookLine } from "react-icons/ri";
import { RiLinkedinLine } from "react-icons/ri";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  return (
    <div>
     <div>
     <div className='flex flex-col lg:flex-row md:w-full md:flex-wrap lg:flex-nowrap md:space-x-4 lg:space-x-6 p-9 lg:px-8 h-[555px] gap-5 justify-between pt-32'>
      <div className=''>
        <h1 className='font-bold text-[33.45px] mx-10'>SHOP.CO</h1>
      <h1 className='text-gray-400 pt-6 mx-10'>400 University Drive Suite 200 Coral  <br /> Gables,<br />
      FL 33134 USA </h1>
      <div className="flex  mx-8 mt-7  gap-5">
          <Link href="https://www.facebook.com" className=" text-xl hover:text-teal-200 w-[24px] h-[24px]">
            <RiFacebookLine />
          </Link>
          <Link href="https://www.twitter.com" className=" text-xl hover:text-teal-200 w-[24px] h-[24px]">
            <FiTwitter />
          </Link>
          <Link href="https://www.instagram.com" className=" text-xl hover:text-teal-200 w-[18px] h-[18px]">
            <FaInstagram />
          </Link>
          <Link href="https://www.linkedin.com" className="text-xl w-[24px] h-[24px]">
            <RiLinkedinLine />
          </Link>
        </div>

      
      </div>

      
      {/* ***Links */}
      <div className="flex flex-col items-start   space-y-2 gap-[24px] mx-10">
      <h1 className=" text-[#9F9F9F] text-base w-[40px] h-[24px] ">Links</h1>
          <h1 className="font-medium text-base w-[48px] h-[24px]">Features</h1>
          <h1 className="font-medium text-base w-[49px] h-[24px]">About</h1>
          <h1 className="font-medium text-base w-[68px] h-[24px]">Work</h1>
          <h1 className="font-medium text-base w-[48px] h-[24px]">Details</h1>
          
          
         
        </div>

        {/* Quick Links Section */}
        <div className="flex flex-col  items-start space-y-2 gap-[24px] mx-10">
          <h1 className="
          text-[#9F9F9F] text-[16px] ">Help</h1>
          <h1 className="font-medium text-base ">Customer Support</h1>
          <h1 className="font-medium text-base">Delivery Details</h1>
          <h1 className="font-medium text-base">Terms & Conditions</h1>
          <h1 className="font-medium text-base">Privacy Policy</h1>
        </div>
        
        <div className="flex flex-col items-start space-y-2 gap-[24px] mx-10">
          <h1 className="
          text-[#9F9F9F] text-[16px] ">FAQ</h1>
          <h1 className="font-medium text-base ">Account</h1>
          <h1 className="font-medium text-base">Manage Deliveries</h1>
          <h1 className="font-medium text-base ">Orders</h1>
          <h1 className="font-medium text-base ">Payment</h1>
        </div>

        <div className="flex flex-col  items-start space-y-2 gap-[24px] mx-10">
          <h1 className="
          text-[#9F9F9F] text-[16px] ">RESOURCES   </h1>
          <h1 className="font-medium text-base">Free Ebooks</h1>
          <h1 className="font-medium text-base">Development Tutorial</h1>
          <h1 className="font-medium text-base">How to blog</h1>
          <h1 className="font-medium text-base ">Youtube Playlists</h1>
        </div>
          
      </div>
        </div>
        </div>
  )
}

export default Footer
