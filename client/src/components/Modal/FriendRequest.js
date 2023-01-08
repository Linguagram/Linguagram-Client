
import React from "react";
import FriendRequestCard from "../Cards/FriendRequestCard";

export default function FriendRequest({ onClose, visible }) {
  const handleOnClose = () => {
    onClose();
  };

  return (
    <div
      className={`${
        visible ? "" : "hidden"
      } fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-60`}>
      <div className="flex flex-col w-full p-5 mx-4 rounded md:mx-0 md:w-1/2 lg:p-8 bg-darker-gray max-h-3/4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl text-white">Friend Requests</h3>
          <h3
            onClick={handleOnClose}
            className="text-4xl text-gray-400 cursor-pointer">
            &times;
          </h3>
        </div>
        <div className="flex flex-col h-full gap-5 my-3 overflow-y-auto lg:my-5 scrollbar-hide">
          <FriendRequestCard />
        </div>
      </div>
    </div>
  );
}