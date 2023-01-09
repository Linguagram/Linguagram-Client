import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import avatar from "../../pictures/avatar-1.3921191a8acf79d3e907.jpg";
import UserModal from "../Modal/UserModal";
import GroupModal from "../Modal/GroupModal";
import CallingModal from "../Modal/CallingModal";
import { useDispatch, useSelector } from 'react-redux'
import { setOpenChat } from "../../store/actions/actionCreator";
import Peer from "simple-peer";
import VideoChat from "../Modal/VideoChat";
import swal from 'sweetalert';

export default function ChatRoomHeader() {

  const { counterpartUser } = useSelector((state) => state.userReducer);
  const { thisUser } = useSelector((state) => state.userReducer);
  const { socketConnect } = useSelector((state) => state.socketReducer);

  let [isOpen, setIsOpen] = useState(false);
  let [isCalling, setIscalling] = useState(false)
  const dispatch = useDispatch()

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const { currentSocket } = useSelector((state) => state.socketReducer);

  // console.log(currentSocket, "header")

  const [isVideoModalVisible, setIsVideoModalVisible] = useState(false);
  const handleCloseVideoModal = () => setIsVideoModalVisible(false);

  const [yourID, setYourID] = useState("");
  const [users, setUsers] = useState({});
  const [stream, setStream] = useState();
  const [receivingCall, setReceivingCall] = useState(false);
  const [caller, setCaller] = useState("");
  const [callerSignal, setCallerSignal] = useState();
  const [callAccepted, setCallAccepted] = useState(false);

  const [peerCall, setpeerCall] = useState();
  const [peerAccept, setpeerAccept] = useState();

  const userVideo = useRef();
  const partnerVideo = useRef();
  const peerRef = useRef();

  let peerTest

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then(stream => {
      setStream(stream);
      return stream
    }).then(stream => {
      if (userVideo.current) {
        userVideo.current.srcObject = stream;
      }
      setpeerCall(new Peer({
        initiator: true,
        trickle: false,
        stream: stream,
      }))

    socketConnect.on("yourID", (id) => {
      setYourID(id);
    })
    socketConnect.on("allUsers", (users) => {
      setUsers(users);
    })

    socketConnect.on("hey", (data) => {
      setReceivingCall(true);
      setCaller(data.from);
      setCallerSignal(data.signal);
    })

    socketConnect.on("user left", () => {
      setReceivingCall(false);
      setCaller("");
      setCallAccepted(false)
      setUsers({})
      socketConnect.off("callAccepted")
      peerRef.current.destroy()
      // peerTest = new Peer({
      //   initiator: true,
      //   trickle: false,
      //   stream: stream,
      // })
      // console.log(peerTest)
    })
   })
  }, []);

  useEffect(() => {
    if(Object.keys(currentSocket).length > 0) {
      console.log('masuk use effect chatroom header')
      currentSocket.on("yourID", (id) => {
        console.log(id)
        setYourID(id);
      })
      currentSocket.on("allUsers", (users) => {
        console.log(users)
        setUsers(users);
      })
      
  
      currentSocket.on("hey", (data) => {
        setReceivingCall(true);
        setCaller(data.from);
        setCallerSignal(data.signal);
      })
  
      currentSocket.on("user left", () => {
        setReceivingCall(false);
        setCaller("");
        setCallAccepted(false)
        setUsers({})
        currentSocket.off("callAccepted")
        peerCall.destroy()
        // peerRef.current.destroy()
      })
    }
  }, [currentSocket])

  let key;
  useEffect(() => {
    if(yourID === Object.keys(users)[1] || yourID === Object.keys(users)[1]) {
      key = Object.keys(users)[3]
    } else {
      key = Object.keys(users)[1]
    }
    console.log(yourID, key)
  }, [users])

  // useEffect(() => {
  //   if(stream) {
  //     setpeerCall(new Peer({
  //       initiator: true,
  //       trickle: false,
  //       stream: stream,
  //     }))
  //   }
  // }, [stream])

 

  function callPeer(id) {
    // const peer = new Peer({
    //   initiator: true,
    //   trickle: false,
    //   stream: stream,
    // });
    console.log(key, "id yang mau di call")
    console.log(peerCall, "peer call waktu nge call orang lain")

    peerCall.on("signal", data => {
      console.log('peer dapet signal')
      if(Object.keys(currentSocket).length > 0) {
        console.log(key, data, yourID)
        currentSocket.emit("callUser", { userToCall: key, signalData: data, from: yourID })
      }
    })

    peerCall.on("stream", stream => {
      if (partnerVideo.current) {
        partnerVideo.current.srcObject = stream;
      }
    });

    if(Object.keys(currentSocket).length > 0) {
      currentSocket.on("callAccepted", signal => {
        setCallAccepted(true);
        peerCall.signal(signal);
      })
    }

    // peerRef.current = peer

  }

  function acceptCall() {
    setCallAccepted(true);
    const peer = new Peer({
      initiator: false,
      trickle: false,
      stream: stream,
    });

    peer.on("signal", data => {
      if(Object.keys(currentSocket).length > 0) {
        currentSocket.emit("acceptCall", { signal: data, to: caller })
      }
    })

    peer.on("stream", stream => {
      partnerVideo.current.srcObject = stream;
    });

    peer.signal(callerSignal);
    peerRef.current = peer
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
