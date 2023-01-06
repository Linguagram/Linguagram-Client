import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import avatar from "../../pictures/avatar-1.3921191a8acf79d3e907.jpg";
import UserModal from "../Modal/UserModal";

export default function ChatRoomHeader() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <div className="flex items-center justify-between w-full p-5 h-1/6 max-h-16">
      <UserModal isOpen={isOpen} closeModal={closeModal}/>

      <div className="flex items-center w-full gap-3">
        <img src={avatar} className="avatar-chat" alt="avatar"></img>
        <div className="flex items-center gap-1">
          <button onClick={openModal}>
            <h4 className="text-white">Doris Brown</h4>
          </button>
          <FontAwesomeIcon className="status-icon" icon="circle-dot" />
        </div>
      </div>
      <div className="flex items-center justify-between w-1/3 gap-3 lg:w-1/5 xl:w-1/6 2xl:max-w-fit 2xl:gap-4">
        <FontAwesomeIcon
          className="text-gray-400 cursor-pointer small-icons"
          icon="magnifying-glass"
        />
        <FontAwesomeIcon
          className="text-gray-400 cursor-pointer small-icons"
          icon="video"
        />
        <FontAwesomeIcon
          className="text-gray-400 cursor-pointer small-icons"
          icon="trash-can"
        />
      </div>
    </div>
  );
}
