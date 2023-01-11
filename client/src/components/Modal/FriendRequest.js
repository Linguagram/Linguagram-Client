import React, { useEffect, useState } from "react";

import FriendRequestCard from "../Cards/FriendRequestCard";

export default function FriendRequest({ onClose, visible, friendRequests }) {
  
  const handleOnClose = () => {
    onClose();
  };

  return (
    <div
      className={`${
        visible ? "" : "hidden"
      } fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-60 max-h-full`}>
      <div className="flex flex-col w-full p-5 mx-4 rounded md:mx-0 md:w-1/2 lg:p-8 bg-darker-gray min-h-fit max-h-[80%]">
        <div className="flex items-center justify-between">
          <h3 className="text-xl text-white">Friend Requests</h3>
          <h3
            onClick={handleOnClose}
            className="text-4xl text-gray-400 cursor-pointer">
            &times;
          </h3>
        </div>
        <div className="flex flex-col gap-5 my-3 overflow-auto lg:my-5 scrollbar-hide">
          {friendRequests.length > 0 ? 
            friendRequests.map(request => {
              return <FriendRequestCard key={request.id} friend={request} />
            }) :
            <p className="text-white">No friend request</p>
          }
          
        </div>
      </div>
    </div>
  );
}
