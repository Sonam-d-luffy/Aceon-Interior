import React from 'react'
import assets from '../assets/assets'
import { Pause, Play } from 'lucide-react'

const Template = () => {
  return (
    <div className="w-full h-[90vh] bg-white mt-[2vh]">
      <div className="relative w-full h-full overflow-hidden">
        <img
          src={assets.i17}
          alt="interior"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className='absolute top-[4vh] left-[4vw]'>
       <p className='text-5xl text-white'>What Home Owners Feels</p>
       <br />
       <br />
       <p className='text-2xl text-white'>Every Home Tells Different Story</p>
        </div>
         <div className='absolute bottom-[10vh] left-[4vw] w-[40vw]'>
             <p className='text-2xl text-white'>CTO | DESIGNER</p>
        
       <p className='text-5xl font-bold text-white'>Adarsh Pandit</p>
       <br />
       <br />
       <p className='text-2xl text-white'>Figma ipsum component variant main layer. Scrolling thumbnail share text team follower select flatten move. Align ipsum shadow line share duplicate comment component. Undo device comment invite bold.</p>
        </div>
        <div className='absolute top-[4vh] right-[4vw]'>
            <img src={assets.i18} className='h-[80vh] rounded-2xl object-cover blur-xs' alt="" />
            
      {/* Pause icon in center */}
      <div className="absolute inset-0 flex justify-center items-center z-10">
        <div className="bg-white/30 backdrop-blur-md p-5 rounded-full shadow-lg cursor-pointer hover:scale-110 transition-transform">
          <Play className="text-white w-10 h-10" />
        </div>
      </div>
        </div>
        </div>
      </div>
  )
}

export default Template
