import React from 'react'
import MiddleThird from './MiddleThird';
import UpperThird from './UpperThird';
import LowerThird from './LowerThird';

const ThirdBar = () => {
  return (
    <div className='w-[800px] bg-gray-100 h-screen relative'>
        <div className='w-full h-24 flex flex-row justify-around items-center bg-white'>
          <UpperThird />
          <div className='flex items-center justify-between gap-4'>
          <i class="fa-solid fa-magnifying-glass text-2xl text-gray-400"></i>
          <i class="fa-solid fa-phone text-gray-500 text-2xl"></i>
          <i class="fa-solid fa-ellipsis-vertical text-gray-500 text-2xl"></i>
          </div>
        </div>
        <div className='bg-gray-100 flex '>
          <MiddleThird />
        </div>
        <div className='absolute bottom-0 w-full'>
        <LowerThird />
        </div>
        
    
    </div>
  )
}

export default ThirdBar