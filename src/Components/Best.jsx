import React from 'react'
import assets from '../assets/assets'

const Best = () => {
  return (
   <div className="flex flex-col justify-center  items-center h-[90vh] bg-white gap-6 px-10 py-20 mt-[4vh]">
        <p className="text-[#c77239] text-6xl font-semibold text-center">Best of our creations</p>
         
  <div className="flex flex-wrap justify-center gap-10 mt-10">
        {/* Card 1 */}
        <div className="bg-white shadow-lg rounded-2xl overflow-hidden w-[350px] hover:scale-105 transition-transform duration-500 hover:shadow-2xl">
          <img src={assets.i14} alt="Full Interior" className="h-56 w-full object-cover" />
          <div className="p-5 flex flex-col gap-3">
            <h2 className="text-2xl font-semibold text-[#c77239]">Scandinavian Minimalist Bed Frame
</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
           A clean, minimalist bed frame crafted from solid pine with a smooth matte finish. Designed for modern bedrooms, it provides sturdy support while keeping the aesthetic light and airy
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-lg rounded-2xl overflow-hidden w-[350px] hover:scale-105 transition-transform duration-500 hover:shadow-2xl">
          <img src={assets.i15} alt="Modular Kitchen" className="h-56 w-full object-cover" />
          <div className="p-5 flex flex-col gap-3">
            <h2 className="text-2xl font-semibold text-[#c77239]">Luxurious Velvet Sofa</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
            Plush velvet sofa with a minimalist design and deep cushioning for maximum comfort. The rich fabric and sturdy frame make it an ideal centerpiece for living rooms, blending style and relaxation seamlessly.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-lg rounded-2xl overflow-hidden w-[350px] hover:scale-105 transition-transform duration-500 hover:shadow-2xl">
          <img src={assets.i16} alt="Commercial Spaces" className="h-56 w-full object-cover" />
          <div className="p-5 flex flex-col gap-3">
            <h2 className="text-2xl font-semibold text-[#c77239]">Modern Wooden Dining Table</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
           A sleek handcrafted wooden dining table designed for contemporary homes. Made from premium oak with a natural finish,


            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Best
