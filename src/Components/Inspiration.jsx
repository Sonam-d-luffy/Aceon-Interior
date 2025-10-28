import React from 'react'
import assets from '../assets/assets'

const Inspiration = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[90vh] bg-white gap-6 px-10 mt-[10vh] mb-0">
           <p className="text-[#c77239] text-6xl font-semibold text-center">Inspiration to Elevate Your Living</p>
              <p className="text-gray-700 text-xl text-center">
From cozy corners to luxury living, explore designs that match your taste.
  </p>
  <div className='flex flex-row flex-wrap gap-6 justify-center'>
<img src={assets.i9} className='h-[40vh] transition-scale duration-300 hover:scale-110 cursor-pointer rounded-3xl' alt="" />
<img src={assets.i8} className='h-[40vh] transition-scale duration-300 hover:scale-110 cursor-pointer rounded-3xl' alt="" />
<img src={assets.i10} className='h-[40vh] transition-scale duration-300 hover:scale-110 cursor-pointer rounded-3xl' alt="" />
<img src={assets.i11} className='h-[40vh] transition-scale duration-300 hover:scale-110 cursor-pointer rounded-3xl' alt="" />
<img src={assets.i12} className='h-[40vh] transition-scale duration-300 hover:scale-110 cursor-pointer rounded-3xl' alt="" />
<img src={assets.i13} className='h-[40vh] transition-scale duration-300 hover:scale-110 cursor-pointer rounded-3xl' alt="" />
  </div>
    </div>
  )
}

export default Inspiration
