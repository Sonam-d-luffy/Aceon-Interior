import { MessageCircle, MessageCircleCode, Phone, User } from 'lucide-react'
import React from 'react'
import assets from '../assets/assets'

const Contact = () => {
  return (
      <div className="flex flex-col justify-center items-center h-[80vh] bg-white gap-6 px-10 mt-[10vh] mb-0">
      <p className="text-[#c77239] text-6xl font-semibold text-center">Contact Us</p>
              <p className="text-gray-700 text-xl text-center">
Let's start shaping your dream space together.
  </p>
  <div className='flex flex-row flex-wrap w-[80vw] gap-5'>
    <div className='flex flex-col gap-4'>
        <p className='w-[30vw] text-2xl text-gray-700'>Feel free to reach out if you have a question, a project in mind, or want to say hello.</p>
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
         <div className='flex flex-row gap-6'>
    <img src={assets.insta} className='w-5' alt="" />
    <img src={assets.fb} className='w-5' alt="" />
    <img src={assets.x} className='w-5' alt="" />
        </div>
    
    </div>
    <form className="flex flex-col gap-4 w-full md:w-1/2 bg-[#f9f9f9] p-8 rounded-2xl shadow-lg">
          <input
            type="text"
            placeholder="Name"
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#c77239]"
          />
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#c77239]"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#c77239]"
          />
          <input
            type="text"
            placeholder="Address"
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#c77239]"
          />
          <textarea
            placeholder="Description"
            rows="4"
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#c77239]"
          ></textarea>
          <button
            type="submit"
            className="bg-[#c77239] text-white py-3 rounded-lg font-semibold hover:bg-[#b45f2d] transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact