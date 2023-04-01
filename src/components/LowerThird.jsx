import React from 'react'

const LowerThird = () => {
  return (
    <div className="relative w-full">
    <i class="absolute top-3 left-3 text-gray-400 fa-solid fa-house cursor-pointer transform transition-transform hover:scale-150"></i>
  <input
    type="text"
    placeholder="Type your message here"
    className="w-full py-2 pl-10 pr-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent "
  />
  <i class="absolute top-1 right-10 fa-regular fa-face-smile text-2xl cursor-pointer transform transition-transform hover:scale-150"></i>
  <i class="absolute top-1 right-3 text-blue-500 fa-solid fa-play text-2xl cursor-pointer transform transition-transform hover:scale-150"></i>
</div>
   
  )
}

export default LowerThird