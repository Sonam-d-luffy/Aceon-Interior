import React from 'react'
import assets from '../assets/assets'

const Services = () => {
  return (
   <div className="flex flex-col justify-center  items-center h-[90vh] bg-white gap-6 px-10 py-20 mt-[20vh]">
        <p className="text-[#c77239] text-6xl font-semibold text-center">Our Services</p>
          <p className="text-gray-700 text-xl text-center">
    Comprehensive solutions tailored to your needs.
  </p>
  <div className="flex flex-wrap justify-center gap-10 mt-10">
        {/* Card 1 */}
        <div className="bg-white shadow-lg rounded-2xl overflow-hidden w-[350px] hover:scale-105 transition-transform duration-500 hover:shadow-2xl">
          <img src={assets.i7} alt="Full Interior" className="h-56 w-full object-cover" />
          <div className="p-5 flex flex-col gap-3">
            <h2 className="text-2xl font-semibold text-[#c77239]">Full Interior</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Aceon Interio offers complete interior solutions tailored to your budget and space.
              Whether it's a shop, villa, hotel, restaurant, or showroom, we design with precision
              and ensure that functionality meets aesthetics seamlessly.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-lg rounded-2xl overflow-hidden w-[350px] hover:scale-105 transition-transform duration-500 hover:shadow-2xl">
          <img src={assets.i6} alt="Modular Kitchen" className="h-56 w-full object-cover" />
          <div className="p-5 flex flex-col gap-3">
            <h2 className="text-2xl font-semibold text-[#c77239]">Modular Kitchen</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              We design stylish and functional modular kitchens that maximize space and
              convenience. Choose from premium finishes, materials, and layouts that reflect your
              unique lifestyle.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-lg rounded-2xl overflow-hidden w-[350px] hover:scale-105 transition-transform duration-500 hover:shadow-2xl">
          <img src={assets.i5} alt="Commercial Spaces" className="h-56 w-full object-cover" />
          <div className="p-5 flex flex-col gap-3">
            <h2 className="text-2xl font-semibold text-[#c77239]">Commercial Spaces</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Transform your workspace into a modern, efficient, and inspiring environment.
              Our expert team combines design and functionality to create professional interiors
              that leave a lasting impression.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
   
