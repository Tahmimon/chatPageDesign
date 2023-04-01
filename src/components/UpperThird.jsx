import React from 'react'

const UpperThird = () => {
  return (
    <div className='flex justify-around gap-2 mr-24'>
          <div>
            <img className='w-20 h-20 rounded-full object-cover' src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="chat-logo" />
          </div>
          <div>
            <h1 className='text-2xl font-bold'>Durbol Kapoor</h1>
            <p className='text-gray-500'>durbol@gmail.com</p>
            <p>Last seen at 12:05 p.m</p>
          </div>
          </div>
  )
}

export default UpperThird