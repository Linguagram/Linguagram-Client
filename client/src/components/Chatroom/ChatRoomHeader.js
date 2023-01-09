import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import avatar from "../../pictures/avatar-1.3921191a8acf79d3e907.jpg";
import UserModal from "../Modal/UserModal";
import GroupModal from "../Modal/GroupModal";
import CallingModal from "../Modal/CallingModal";
import { useDispatch, useSelector } from 'react-redux'
import { setAmITheCaller, setIncomingCaller, setOpenChat } from "../../store/actions/actionCreator";
import axios from "axios";
import { URL_SERVER } from "../../baseUrl";
import IncomingCallingModal from "../Modal/IncomingCallingModal";
import { useNavigate } from "react-router-dom";

export default function ChatRoomHeader() {

  const { counterpartUser } = useSelector((state) => state.userReducer);
  const { socketConnect } = useSelector((state) => state.socketReducer);
  const { thisUser } = useSelector((state) => state.userReducer);
  const { incomingCaller } = useSelector((state) => state.userReducer);

  let [isUserModalOpen, setIsUserModalOpen] = useState(false);
  let [isCalling, setIscalling] = useState(false)
  let [isIncomingCall, setIsIncomingCall] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  function closeUserModal() {
    setIsUserModalOpen(false);
  }

  function openUserModal() {
    setIsUserModalOpen(true);
  }

  function calling() {
    setIsUserModalOpen(false)
    setIscalling(true)
    dispatch(setAmITheCaller(true))
    // socketConnect.emit("identify", {userId: thisUser.id}); 
    socketConnect.emit("clickCall", { userToCall: counterpartUser.id, from: thisUser.id })
  }

  function stopCalling() {
    socketConnect.emit("cancelCall", { userToCall: counterpartUser.id, from: thisUser.id })
    setIscalling(false)
  }

  function declineCall() {
    socketConnect.emit("declineCall", { userToDecline: incomingCaller.id, from: thisUser.id })
    dispatch(setIncomingCaller({}))
    setIsIncomingCall(false)
  }

  function closeChat() {
    dispatch(setOpenChat(false))
  }

  const acceptCall = () => {
    socketConnect.emit("acceptCall", { userToReceive: incomingCaller.id, from: thisUser.id })
    navigate('/videocall')
  }

  useEffect(() => {
    // socketConnect.emit("identify", {userId: thisUser.id}); 

    socketConnect.on("yourID", (id) => {
      console.log(id, "id diri sendiri")
    })

    socketConnect.on('incomingCall', async (incomingUserId) => {

      if(Object.keys(incomingCaller).length === 0) {
        const {data} = await axios({
          method: "GET",
          url: `${URL_SERVER}/users/${incomingUserId.from}`,
          headers: {
            'access_token': localStorage.access_token
          },
        });
  
        dispatch(setIncomingCaller(data))
  
        setIsIncomingCall(true)
      }
    });

    socketConnect.on('callIsCanceled', async (incomingUserId) => {
      setIsIncomingCall(false)
      dispatch(setIncomingCaller({}))
      dispatch(setAmITheCaller(false))
    });

    socketConnect.on('callIsDeclined', async (userWhoDeclines) => {
      if(userWhoDeclines.from === counterpartUser.id) {
        setIscalling(false)
        dispatch(setAmITheCaller(false))
      }
    });

    socketConnect.on('confirmAcceptCall', async (confirmerUser) => {
      navigate('/videocall')
    });

  }, [])

  return (
    <div className="flex items-center justify-between w-full p-5 h-1/6 max-h-16">
      <UserModal isOpen={isUserModalOpen} closeModal={closeUserModal} calling={calling}/>
      {/* <GroupModal isOpen={isOpen} closeModal={closeModal}/> */}
      <CallingModal isOpen={isCalling} closeModal={stopCalling} />
      <IncomingCallingModal declineCall={declineCall} isOpen={isIncomingCall} closeModal={stopCalling} acceptCall={acceptCall}/>

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
          <FontAwesomeIcon className="status-icon" icon="circle-dot" />
        </div>
      </div>
      <div className="flex items-center justify-end w-1/3 gap-3 lg:w-1/5 xl:w-1/6 2xl:max-w-fit 2xl:gap-4">
        {
          counterpartUser.email
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
