import React from 'react'
import assets from '../assets/assets'

const Philosphy = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[50vh] bg-white gap-6 px-10">
  {/* Heading */}
  <p className="text-[#c77239] text-6xl font-semibold text-center">Our Philosophy</p>

  {/* Subheading */}
  <p className="text-gray-700 text-xl text-center">
    Designing spaces that reflect your lifestyle and inspire everyday living.
  </p>

  {/* Content Section */}
  <div className="flex flex-row justify-between items-center w-full max-w-6xl gap-8 mt-6">
    
    {/* Left Text */}
    <div className="w-1/2 text-gray-800 text-lg leading-relaxed">
      Aceon Interio offers complete interior solutions tailored to your budget and space.
      Whether it's a shop, villa, hotel, restaurant, or showroom, we design with precision and style.
      Experience innovative space management and modern aesthetics, all under one roof.
      Transform your space beautifully and affordably with Aceon Interio.
    </div>

    {/* Right Images */}
    <div className="relative w-1/2 flex justify-center items-center">
      {/* Main large image */}
      <img src={assets.i4} className="w-[60%] rounded-xl shadow-lg" alt="main" />
      
      {/* Floating smaller images */}
      <img src={assets.i5} className="absolute top-0 left-5 w-[25%] rounded-lg shadow-md animate-slide-down" alt="" />
      <img src={assets.i6} className="absolute bottom-5 right-5 w-[25%] rounded-lg shadow-md animate-slide-up" alt="" />
      <img src={assets.i7} className="absolute top-10 right-16 w-[20%] rounded-lg shadow-md animate-slide-left" alt="" />
    </div>
  </div>
</div>

  )
}

export default Philosphy
