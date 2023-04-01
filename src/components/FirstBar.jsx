import React from "react";

const FirstBar = () => {
  return (
    <div className="w-28 h-screen bg-gray-100">
      <div className="flex flex-col justify-center items-center gap-y-4">
        <i class="fa-solid fa-user text-gray-500 text-3xl my-2 cursor-pointer transform transition-transform hover:scale-150"></i>
        <i class="fa-solid fa-message text-blue-500 text-3xl cursor-pointer transform transition-transform hover:scale-150"></i>
        <i class="fa-solid fa-phone text-gray-500 text-3xl cursor-pointer transform transition-transform hover:scale-150"></i>
        <i class="fa-solid fa-gear text-gray-500 text-3xl cursor-pointer transform transition-transform hover:scale-150"></i>
      </div>
    </div>
  );
};

export default FirstBar;
