import React from 'react'

const SearchField = () => {
  return (
    <div className='flex flex-col'>
        <div className="w-80">
          <input
            type="text"
            placeholder="Search your contacts"
            className="w-full py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          
          
        </div>
      </div>
  )
}

export default SearchField