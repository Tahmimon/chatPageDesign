import React from "react";
import UserCard from "./UserCard";
import users  from './../data';

const UserCardList = () => {
  return (
    <div>
      {users.map(user => <UserCard key={user.name} user={user} />)}
    </div>
  )
};

export default UserCardList;
