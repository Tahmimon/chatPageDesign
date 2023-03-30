import React from "react";

const FirstBar = () => {
  return (
    <div className="w-28 h-screen bg-gray-100 ">
      <div className="flex flex-col justify-center items-center gap-y-3 ">
        <i class="fa-solid fa-user text-gray-500 text-3xl my-2"></i>
        <i class="fa-solid fa-message text-blue-500 text-3xl"></i>
        <i class="fa-solid fa-phone text-gray-500 text-3xl"></i>
        <i class="fa-solid fa-gear text-gray-500 text-3xl"></i>
      </div>
    </div>
  );
};

export default FirstBar;
