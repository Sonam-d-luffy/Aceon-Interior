import React from 'react'
import assets from '../assets/assets'
import { MessageCircleCode, Phone, User } from 'lucide-react'

const Footer = () => {
  return (
        <div className="flex flex-col justify-center items-center h-[50vh] bg-[#c77239] gap-6 px-10 mt-[10vh] mb-0">
      <div className='flex flex-row w-full justify-around'>
        <div className='flex flex-col w-[30vw] gap-4'>
            <img src={assets.aceonlogo} className='w-[10vw]' alt="" />
            <p className='text-2xl text-white'>Smart, stylish, and tailored interiors for homes, offices & retail spaces across India. Creating comfort with purpose.</p>
                 <div className='flex flex-row gap-6'>
    <img src={assets.insta} className='w-5' alt="" />
    <img src={assets.fb} className='w-5' alt="" />
    <img src={assets.x} className='w-5' alt="" />
        </div>
        </div>
        <div className='flex flex-col w-[30vw] gap-4'>
            <p className='text-3xl text-white'>Quick Links</p>
            <p className='text-xl text-white'>Home</p>
            <p className='text-xl text-white'>Services</p>
            <p className='text-xl text-white'>About Us</p>
            <p className='text-xl text-white'>Contact</p>
        </div>
        <div className='flex flex-col w-[30vw] text-white gap-4'>
            <p className='text-3xl text-white'>Contact Info</p>
 <div className='flex flex-row gap-6'>
    <User/> 
        <span>Ankit Sandiliya</span>
        </div>
         <div className='flex flex-row gap-6'>
    <Phone/> 
        <span>+91 99197 55066</span>
        </div>
         <div className='flex flex-row gap-6'>
    <MessageCircleCode/> 
        <span>care@aceoninterio.com</span>
        
        </div>
        
        </div>

      </div>
      <p className='text-white'>© 2025 Aceon Interio. Interior Design & Innovation. All rights reserved.</p>
    </div>
  )
}

export default Footer
