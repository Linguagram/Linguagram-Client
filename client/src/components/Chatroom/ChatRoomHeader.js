import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UserModal from "../Modal/UserModal";
import GroupModal from "../Modal/GroupModal";
import CallingModal from "../Modal/CallingModal";
import { useDispatch, useSelector } from 'react-redux'
import { setAmITheCaller, setOpenChat } from "../../store/actions/actionCreator";
import { getUserAvatar } from "../../util/getAvatar";
import { handleSetIsCalling } from "../../store/middlewares/thunk";

export default function ChatRoomHeader() {
  const { socketConnect } = useSelector((state) => state.socketReducer);
  const { thisUser, isCalling, counterpartUser } = useSelector((state) => state.userReducer);
  const { friends } = useSelector((state) => state.friendReducer)

  let [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const dispatch = useDispatch()

  function setIsCalling(state) {
    dispatch(handleSetIsCalling(state));
  }

  function closeUserModal() {
    setIsUserModalOpen(false);
  }

  function openUserModal() {
    setIsUserModalOpen(true);
  }

  function calling() {
    setIsUserModalOpen(false)
    setIsCalling(true)
    dispatch(setAmITheCaller(true))
    // socketConnect.emit("identify", {userId: thisUser.id}); 
    socketConnect.emit("clickCall", { userToCall: counterpartUser.id, from: thisUser.id })
  }

  function stopCalling() {
    socketConnect.emit("cancelCall", { userToCall: counterpartUser.id, from: thisUser.id })
    setIsCalling(false)
  }

  function closeChat() {
    dispatch(setOpenChat(null))
  }

  return (
    <div className="flex items-center justify-between w-full p-5 h-1/6 max-h-16">
      {
      counterpartUser?.type === 'group'
        ?
        <GroupModal isOpen={isUserModalOpen} closeModal={closeUserModal} counterpartUser={counterpartUser} />
        :
        <UserModal isOpen={isUserModalOpen} closeModal={closeUserModal} calling={calling}/>
    }
      <CallingModal isOpen={isCalling} closeModal={stopCalling} />
      {/* <IncomingCallingModal declineCall={declineCall} isOpen={isIncomingCall} acceptCall={acceptCall}/> */}

      <div className="flex items-center w-full gap-3">
        <div onClick={closeChat} className="md:hidden">
          <FontAwesomeIcon
            className="w-8 h-8 text-gray-400 cursor-pointer"
            icon="angle-left"
            />
        </div>
        <img onClick={openUserModal} src={getUserAvatar(counterpartUser)} className="avatar-chat" alt="avatar"></img>
        <div className="flex items-center gap-1">
          <button onClick={openUserModal}>
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
          {
          counterpartUser?.isOnline
            ?
            <FontAwesomeIcon className="status-icon" icon="circle-dot" />
            :
            null
        }
        </div>
      </div>
      <div className="flex items-center justify-end w-1/3 gap-3 lg:w-1/5 xl:w-1/6 2xl:max-w-fit 2xl:gap-4">
        {
        counterpartUser.email && friends.some(el => (el.FriendId === counterpartUser.id && el.UserId === thisUser.id) || (el.UserId === counterpartUser.id && el.FriendId === thisUser.id))
          ?
          <FontAwesomeIcon
            className="text-gray-400 cursor-pointer small-icons"
            onClick={() => calling()}
            icon="video"
            />
          :
          null
      }
      </div>
    </div>
  );
}
