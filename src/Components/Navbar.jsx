import React from 'react'
import assets from '../assets/assets'

const Navbar = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-white">
  <div className="relative w-[80vw] h-[90vh] rounded-2xl overflow-hidden shadow-lg">
    <img
      src={assets.i1}
      alt="interior"
      className="absolute inset-0 w-full h-full object-cover"
    />
    <img src={assets.aceonlogo} className='transition-scale duration-300 hover:scale-120 absolute top-0 left-0 rounded-tl-2xl rounded-br-2xl bg-white' alt="" />
<button className='absolute right-0 bg-[#c77239] items-center rounded-bl-2xl rounded-tl-0 rounded-tr-2xl rounded-br-2xl h-[7vh] w-[19vw] mt-0 pt-0 flex justify-center align-middle  text-white text-2xl border-10 border-white cursor-pointer hover:scale-105' >Build a modern interior</button>

<div className="absolute top-[2vh] right-[22vw] font-semibold flex justify-between gap-8 text-white text-2xl">
  <p className='transition-scale duration-300 hover:scale-120'>Home</p>
  <p className='transition-scale duration-300 hover:scale-120'>About</p>
  <p className='transition-scale duration-300 hover:scale-120'>Services</p>
  <p className='transition-scale duration-300 hover:scale-120'>Contact</p>
  
</div>
<div className="absolute top-[30%] left-[5%] flex flex-col justify-center w-[40vw] text-white leading-relaxed space-y-4">
  <h1 className="text-6xl font-bold">Creating comfort with style</h1>
 <h3 className="text-2xl font-medium text-[#fffefd]">
  Design smart, live smart, and always choose 
  <span className="text-[#c77239] font-semibold"> Aceon </span>
  for interiors
</h3>

</div>
<div className='absolute bottom-[5%] left-[5%] flex flex-row gap-4'>
  <button className='transition-scale duration-300
    bg-[#c77239] text-white font-medium 
    rounded-2xl h-[6vh] px-6 flex items-center justify-center 
     transform
    hover:scale-120 hover:bg-white hover:text-[#c77239] hover:border hover:border-[#c77239]
  '>
    Get Started
  </button>

  <button className='
    bg-white text-[#c77239] font-medium 
    rounded-2xl h-[6vh] px-6 flex items-center justify-center border border-[#c77239]
    transition-all duration-300 transform
    hover:scale-110 hover:bg-[#c77239] hover:text-white
  '>
    Contact Us
  </button>
</div>
<div className='transition-scale duration-300 hover:scale-110 absolute right-[2%] bottom-[2%] h-[40vh] w-[20vw] bg-white rounded-2xl flex flex-col items-center justify-center shadow-lg p-4'>
  <div className='flex flex-row items-center justify-center gap-3 h-full w-full'>
    <img 
      src={assets.i3} 
      alt="Furniture Design" 
      className='h-[80%] w-[50%] object-cover rounded-2xl'
    />

    <div className='flex flex-col justify-center text-left'>
      <h2 className='text-lg font-semibold text-[#c77239] mb-1'>Furniture Design</h2>
      <p className='text-gray-600 text-sm mb-2 leading-snug'>
        Custom furniture solutions for your home or office — stylish, functional, 
        and within your budget. Serving Varanasi...
      </p>
      <h3 className='text-[#c77239] font-semibold text-sm'>Style Within Your ₹ Budget</h3>
    </div>
  </div>
</div>
<div className='absolute right-[2%] top-[30%] flex flex-col bg-blend-color-burn gap-4 '>
    <img className='h-6 w-6'  src={assets.insta} alt="" />
    <img className='h-6 w-6' src={assets.fb} alt="" />
    <img className='h-5 w-5' src={assets.x} alt="" />
</div>

 
  </div>
</div>
  )
}

export default Navbar
