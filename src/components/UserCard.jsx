import React from 'react'

const UserCard = ({user}) => {
  return (
    <div className="w-96 h-180 bg-white shadow-md rounded-lg overflow-hidden transform transition-transform hover:scale-105">
  <div className="float-left w-24 h-24 bg-gray-200 rounded-full p-2">
    <img class="w-full h-full rounded-full object-cover" src={user.image} alt="User photo" />
  </div>
  <div className="ml-40 mt-4">
    <h2 className="text-lg font-semibold">{user.name}</h2>
    <p className="text-gray-500">{user.job}</p>
    <p>{user.time}</p>
  </div>
</div>

  )
}

export default UserCard