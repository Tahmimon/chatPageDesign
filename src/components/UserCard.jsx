import React from 'react'

const UserCard = () => {
  return (
    <div class="w-96 h-180 bg-white shadow-md rounded-lg overflow-hidden transform transition-transform hover:scale-105">
  <div class="float-left w-24 h-24 bg-gray-200 rounded-full p-2">
    <img class="w-full h-full rounded-full object-cover" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="User photo" />
  </div>
  <div class="ml-40 mt-4">
    <h2 class="text-lg font-semibold">Durbol Kapoor</h2>
    <p class="text-gray-500">Software Engineer</p>
    <p>12:03 p.m</p>
  </div>
</div>

  )
}

export default UserCard