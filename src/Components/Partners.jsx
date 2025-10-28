import React from 'react'
import assets from '../assets/assets'

const Partners = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[90vh] bg-white gap-6 px-10 mt-[10vh] mb-0">
       <p className="text-[#c77239] text-6xl font-semibold text-center">Our Trusted Partners</p>
       <p className="text-gray-700 text-xl text-center">
    Working together with trusted brands to deliver excellence.
  </p>
  <div className='flex flex-row flex-wrap'>
    <img src={assets.b1} className='w-[80vw]' alt="" />
  </div>
    </div>
  )
}

export default Partners
