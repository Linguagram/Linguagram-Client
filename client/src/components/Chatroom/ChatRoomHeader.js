import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import avatar from "../../pictures/avatar-1.3921191a8acf79d3e907.jpg";
import UserModal from "../Modal/UserModal";
import GroupModal from "../Modal/GroupModal";
import CallingModal from "../Modal/CallingModal";
import { useDispatch, useSelector } from 'react-redux'
import { setOpenChat } from "../../store/actions/actionCreator";

export default function ChatRoomHeader() {

  const { counterpartUser } = useSelector((state) => state.userReducer);
  const { thisUser } = useSelector((state) => state.userReducer);

  let [isOpen, setIsOpen] = useState(false);
  let [isCalling, setIscalling] = useState(false)
  const dispatch = useDispatch()

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  function calling() {
    setIsOpen(false)
    setIscalling(true)
  }

  function stopCalling() {
    setIscalling(false)
  }


  function closeChat() {
    dispatch(setOpenChat(false))
  }

  return (
    <div className="flex items-center justify-between w-full p-5 h-1/6 max-h-16">
      <UserModal isOpen={isOpen} closeModal={closeModal} calling={calling}/>
      {/* <GroupModal isOpen={isOpen} closeModal={closeModal}/> */}
      <CallingModal isOpen={isCalling} closeModal={stopCalling} />

      <div className="flex items-center w-full gap-3">
        <div onClick={closeChat} className="md:hidden">
          <FontAwesomeIcon
          className="w-8 h-8 text-gray-400 cursor-pointer"
          icon="angle-left"
        />
        </div>
        {
          counterpartUser.email
          ?
            <img src={counterpartUser.Avatar.url} className="avatar-chat" alt="avatar"></img>
          :
            <div className="flex items-center justify-center w-12 h-10 font-bold text-gray-500 rounded-full bg-main-color-blur">
              {counterpartUser.name[0].toUpperCase()}
            </div>
        }
        
        <div className="flex items-center gap-1">
          <button onClick={openModal}>
            {
              counterpartUser.email
              ?
                <h4 className="text-white">
                  {
                     counterpartUser.username
                  }
                </h4>
              :
                <h4 className="text-white">{counterpartUser.name}</h4>
            }
          </button>
          <FontAwesomeIcon className="status-icon" icon="circle-dot" />
        </div>
      </div>
      <div className="flex items-center justify-between w-1/3 gap-3 lg:w-1/5 xl:w-1/6 2xl:max-w-fit 2xl:gap-4">
        <FontAwesomeIcon
          className="text-gray-400 cursor-pointer small-icons"
          icon="magnifying-glass"
        />
        {
          counterpartUser.email
          ?
            <FontAwesomeIcon
            className="text-gray-400 cursor-pointer small-icons"
            icon="video"
            />
          :
            null
        }
        
        <FontAwesomeIcon
          className="text-gray-400 cursor-pointer small-icons"
          icon="trash-can"
        />
      </div>
    </div>
  );
}
