import React, {useEffect, useState, useRef} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import avatar from '../../pictures/avatar-1.3921191a8acf79d3e907.jpg'
import VideoChat from "../Modal/VideoChat";
import Peer from "simple-peer";
import io from "socket.io-client";
import { URL_SERVER } from '../../baseUrl';
import swal from 'sweetalert';


export default function ChatRoomHeader() {

  const [isVideoModalVisible, setIsVideoModalVisible] = useState(false);
  const handleCloseVideoModal = () => setIsVideoModalVisible(false);

  const [yourID, setYourID] = useState("");
  const [users, setUsers] = useState({});
  const [stream, setStream] = useState();
  const [receivingCall, setReceivingCall] = useState(false);
  const [caller, setCaller] = useState("");
  const [callerSignal, setCallerSignal] = useState();
  const [callAccepted, setCallAccepted] = useState(false);

  const userVideo = useRef();
  const partnerVideo = useRef();
  const socket = useRef();

  useEffect(() => {
    socket.current = io.connect(URL_SERVER);
    navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then(stream => {
      setStream(stream);
      return stream
    }).then(stream => {
      if (userVideo.current) {
        userVideo.current.srcObject = stream;
      }
    })

    socket.current.on("yourID", (id) => {
      setYourID(id);
    })
    socket.current.on("allUsers", (users) => {
      setUsers(users);
    })

    socket.current.on("hey", (data) => {
      setReceivingCall(true);
      setCaller(data.from);
      setCallerSignal(data.signal);
    })
  }, []);

  let key;
  useEffect(() => {
    if(yourID === Object.keys(users)[1] || yourID === Object.keys(users)[1]) {
      key = Object.keys(users)[3]
    } else {
      key = Object.keys(users)[1]
    }
    console.log(yourID, key)
  }, [users])
  

  function callPeer(id) {
    console.log(id, "id to call")
    const peer = new Peer({
      initiator: true,
      trickle: false,
      config: {

        iceServers: [
            {
                urls: "stun:numb.viagenie.ca",
                username: "sultan1640@gmail.com",
                credential: "98376683"
            },
            {
                urls: "turn:numb.viagenie.ca",
                username: "sultan1640@gmail.com",
                credential: "98376683"
            }
        ]
    },
      stream: stream,
    });

    peer.on("signal", data => {
      socket.current.emit("callUser", { userToCall: id, signalData: data, from: yourID })
    })

    peer.on("stream", stream => {
      if (partnerVideo.current) {
        partnerVideo.current.srcObject = stream;
      }
    });
    
    socket.current.on("callAccepted", signal => {
      setCallAccepted(true);
      peer.signal(signal);
    })

  }

  function acceptCall() {
    setCallAccepted(true);
    const peer = new Peer({
      initiator: false,
      trickle: false,
      stream: stream,
    });
    peer.on("signal", data => {
      socket.current.emit("acceptCall", { signal: data, to: caller })
    })

    peer.on("stream", stream => {
      partnerVideo.current.srcObject = stream;
    });

    peer.signal(callerSignal);
  }

  // let UserVideo = <video playsInline className='h-48 w-48' muted ref={userVideo} autoPlay />


  // let PartnerVideo;
  // if (callAccepted) {
  //   console.log('parnter video muncul')
  //   PartnerVideo = (
  //     <video playsInline className='h-48 w-48' ref={partnerVideo} autoPlay />
  //   );
  // }

  let incomingCall;
  if (receivingCall) {
    incomingCall = (
      <div className='text-white'>
        <h1>{caller} is calling you</h1>
        <button onClick={acceptCall}>Accept</button>
      </div>
    )
  }

  return (
    <div className='flex items-center justify-between w-full p-5 h-1/6 max-h-16'>
        
        <div>
         {/* {UserVideo} */}
        </div>
        <div>
        
        {/* {PartnerVideo} */}
        </div>
        <div className='flex items-center justify-between w-1/3 gap-3 lg:w-1/5 xl:w-1/6 2xl:max-w-fit 2xl:gap-4'>
            <FontAwesomeIcon className='text-gray-400 cursor-pointer small-icons' icon='magnifying-glass'/>
            <FontAwesomeIcon onClick={() => callPeer(key)} className='text-gray-400 cursor-pointer small-icons' icon='video'/>
            <FontAwesomeIcon onClick={() => setIsVideoModalVisible(true)} className='text-gray-400 cursor-pointer small-icons' icon='trash-can'/>
            {incomingCall}
        </div>

        <VideoChat
          onClose={handleCloseVideoModal}
          visible={callAccepted}
          userVideo = {userVideo}
          partnerVideo = {partnerVideo}
        />
    </div>
  )
}
