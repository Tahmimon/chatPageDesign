import React from "react";
import UserCardList from "./UserCardList";
import SearchField from './SearchField';

const SecondBar = () => {
  return (
    <div className="w-96 h-screen bg-white flex flex-col gap-0">
    <div className="w-96 h-24 flex flex-row  items-center justify-center gap-x-1">
      <SearchField />
      <i class="fa-solid fa-magnifying-glass text-2xl text-gray-400 cursor-pointer overflow-hidden transform transition-transform hover:scale-150"></i>
    </div>
      
      <UserCardList />
      </div>
  );
};

export default SecondBar;
