import React from 'react'
import assets from '../assets/assets'

const Template2 = () => {
  return (
    <div className="w-full h-[50vh] bg-white mt-[2vh]">
      <div className="relative w-full h-full overflow-hidden">
        <img
          src={assets.i19}
          alt="interior"
          className="absolute inset-0 w-full h-[50vh] object-cover"
        />
        <div className='absolute top-[4vh] flex justify-center flex-col items-center align-middle w-full gap-10'>
            <p className="text-white text-6xl font-semibold text-center">Bring Your Dream Space to Life
</p>
     <p className="text-white text-3xl text-center">
   From concept to creation, we make interiors effortless and elegant.
  </p>
      <div className=' flex flex-row gap-10 justify-between align-middle items-center'>
              <button className='transition-scale duration-300
    bg-[#c77239] text-white font-medium 
    rounded-2xl h-[6vh] px-6 flex items-center justify-center 
     transform
    hover:scale-120 hover:bg-white hover:text-[#c77239] hover:border hover:border-[#c77239]
  '>
    Plan Your Paradise With Us
  </button>

  <button className='
    bg-white text-[#c77239] font-medium 
    rounded-2xl h-[6vh] px-6 flex items-center justify-center border border-[#c77239]
    transition-all duration-300 transform
    hover:scale-110 hover:bg-[#c77239] hover:text-white
  '>
    Apply for EMI options
  </button>
        </div>
        </div>
    
        </div>
    </div>
  )
}

export default Template2
