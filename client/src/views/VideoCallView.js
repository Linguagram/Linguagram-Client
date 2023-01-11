import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Peer from "simple-peer";
import { setAmITheCaller, setIncomingCaller } from "../store/actions/actionCreator";
import { FerrisWheelSpinner } from 'react-spinner-overlay'

export default function VideoCallView() {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { socketConnect } = useSelector((state) => state.socketReducer);
  const { thisUser, counterpartUser, incomingCaller } = useSelector((state) => state.userReducer);
  const { amITheCaller } = useSelector((state) => state.videoReducer);
  
  const [callerSignal, setCallerSignal] = useState();
  // const [loading, setLoading] = useState(true)
  //

  let myCam = {
    name: thisUser.username,
    camera: true,
    mic: true,
  }

  let counterpartCam = {
    camera: true,
    mic: true,
  }

  if(amITheCaller) {
    counterpartCam.name = counterpartUser.username
  } else {
    counterpartCam.name = incomingCaller.username
  }

  const [mySetting, setMySetting] = useState(myCam);

  const [friendSetting, setFriendSetting] = useState(counterpartCam);

  function turnCamera() {
    if (mySetting.camera) {
      setMySetting({
        ...mySetting,
        camera: false,
      });
    } else {
      setMySetting({ ...mySetting, camera: true });
    }
  }

  function turnMic() {
    if (mySetting.mic) {
      setMySetting({
        ...mySetting,
        mic: false,
      });
    } else {
      setMySetting({ ...mySetting, mic: true });
    }
  }

  const userVideo = useRef();
  const partnerVideo = useRef();
  const peerRef = useRef();
  
  let streamRef



  const call = () => {
    navigator.mediaDevices
    .getUserMedia({ video: true, audio: true })
    .then((stream) => {
      if (userVideo.current) {
        userVideo.current.srcObject = stream;
      }
      streamRef = stream
      return stream
    })
    .then((stream) => {
      const peer = new Peer({
        initiator: true,
        trickle: false,
        config: {
          iceServers: [
            { url: "stun:stun.l.google.com:19302" },
            {
              url: "turn:numb.viagenie.ca",
              credential: "muazkh",
              username: "webrtc@live.com",
            },
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
        // setLoading(true)
        socketConnect.emit("call", { userToCall: counterpartUser.id, signalData: data, from: thisUser.id })
      })
  
      peer.on("stream", stream => {
        if (partnerVideo.current) {
          partnerVideo.current.srcObject = stream;
        }
      });
  
      socketConnect.on("call_accepted", signal => {
        // setLoading(false)
        peer.signal(signal);
      })

      peerRef.current = peer
    })
  }

  if(amITheCaller) {
    // setLoading(false)
    call()
  }

  useEffect(() => {
    if (!socketConnect?.connected) navigate("/home/chats");
    
    if(!amITheCaller) {
      socketConnect.on("call_connect", (data) => {
        // setLoading(false)
        setCallerSignal(data.signal);
      })
    }
    
    socketConnect.on("user left", (data) => {
      if(amITheCaller) {
        if(data.user_left === counterpartUser.id) {
          socketConnect.off("call_accepted")
          dispatch(setAmITheCaller(false))
          peerRef.current.destroy()
          navigate('/home/chats')
        } 
      } else {
        if (data.user_left === incomingCaller.id) {
          socketConnect.off("call_accepted")
          peerRef.current.destroy()
          dispatch(setIncomingCaller({}))
          navigate('/home/chats')
        }
      }
      streamRef.getTracks().forEach(function(track) {
        track.stop();
      });
    })

    socketConnect.on("anotherUserLeaveTheCall", (data) => {
      if(amITheCaller) {
        if(data.from === counterpartUser.id) {
          socketConnect.off("call_accepted")
          dispatch(setAmITheCaller(false))
          peerRef.current.destroy()
          navigate('/home/chats')
        } 
      } else {
        if (data.from === incomingCaller.id) {
          socketConnect.off("call_accepted")
          peerRef.current.destroy()
          dispatch(setIncomingCaller({}))
          navigate('/home/chats')
        }
      }
      streamRef.getTracks().forEach(function(track) {
        track.stop();
      });
    })

  }, []);

  const leaveCall = () => {
    if(amITheCaller) {
      socketConnect.emit("leaveCall", { userToInform: counterpartUser.id, from: thisUser.id })
      dispatch(setAmITheCaller(false))
    } else {
      socketConnect.emit("leaveCall", { userToInform: incomingCaller.id, from: thisUser.id })
      dispatch(setIncomingCaller({}))
    }
    streamRef?.getTracks().forEach(function(track) {
      track.stop();
    });
    socketConnect.off("call_accepted")
    navigate('/home/chats')
  }

 
  
  useEffect(() => {
    if(callerSignal) receiveCall()
  }, [callerSignal]); 

  const receiveCall = () => {
    navigator.mediaDevices
    .getUserMedia({ video: true, audio: true })
    .then((stream) => {
      if (userVideo.current) {
        userVideo.current.srcObject = stream;
      }
      streamRef = stream
      return stream
    })
    .then((stream) => {
      const peer = new Peer({
        initiator: false,
        trickle: false,
        stream: stream,
      });

      peer.on("signal", data => {
        socketConnect.emit("accept_call", { signal: data, to: incomingCaller.id })
      })
  
      peer.on("stream", stream => {
        partnerVideo.current.srcObject = stream;
      });

      peer.signal(callerSignal);

      peerRef.current = peer
    })
  }

  return (
    <>
    {/* <FerrisWheelSpinner message={'Please wait while your friend is trying to connect'} loading={loading}　size={80} overlayColor="rgba(255,255,146,0.3)" /> */}
    <div className="bg-darker-gray flex h-screen max-h-screen w-screen flex-1 flex-col items-stretch justify-between overflow-hidden">
      {/* Video call body */}
      <div className="flex max-h-[calc(100%-8rem)] flex-1 flex-col lg:flex-row gap-4 p-4">
        {/* User */}
        <div className="flex max-h-full flex-1 overflow-auto">
          <div className="flex flex-col justify-center max-h-full flex-1 overflow-auto relative">
            <video
              playsInline
              className="w-full h-fit object-contain max-h-full aspect-video lg:w-full lg:h-fit bg-black"
              muted
              ref={userVideo}
              autoPlay
            />
            <div className="absolute w-full h-fit max-h-full max-w-full aspect-video text-slate-400  text-sm lg:gap-8 lg:text-base 2xl:text-xl 2xl:mt-2 2xl:justify-center flex flex-col justify-end">
              <div className="flex justify-between items-center bg-black bg-opacity-50 px-4">
                <div>{mySetting.name}</div>
                <div className="flex items-center gap-3">
                  <FontAwesomeIcon icon={mySetting.camera ? "video" : "video-slash"} />
                  <FontAwesomeIcon icon={mySetting.mic ? "microphone" : "microphone-slash"} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Friend */}
        <div className="flex max-h-full flex-1 overflow-auto">
          <div className="flex flex-col justify-center max-h-full flex-1 overflow-auto relative">
            <video
              playsInline
              className="w-full h-fit object-contain max-h-full aspect-video lg:w-full lg:h-fit bg-black"
              muted
              ref={partnerVideo}
              autoPlay
            />
            <div className="absolute w-full h-fit max-h-full max-w-full aspect-video text-slate-400  text-sm lg:gap-8 lg:text-base 2xl:text-xl 2xl:mt-2 2xl:justify-center flex flex-col justify-end">
              <div className="flex justify-between items-center bg-black bg-opacity-50 px-4">
                <div>{friendSetting.name}</div>
                <div className="flex items-center gap-3">
                  <FontAwesomeIcon icon={friendSetting.camera ? "video" : "video-slash"} />
                  <FontAwesomeIcon icon={friendSetting.mic ? "microphone" : "microphone-slash"} />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Call control */}
      <div className="bg-black-blue flex w-full gap-8 justify-center py-4 items-center md:py-6 h-32">
        <button
          type="button"
          className={
            mySetting.camera
              ? "w-16 h-16 inline-flex items-center justify-center rounded-full bg-main-color font-medium text-white hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              : "w-16 h-16 inline-flex items-center justify-center rounded-full bg-slate-500 font-medium text-white hover:bg-slate-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2"
          }
          onClick={turnCamera}>
          <FontAwesomeIcon
            icon={mySetting.camera ? "video" : "video-slash"}
            className="text-xl p-4"
          />
        </button>
        <button
          type="button"
          onClick={leaveCall}
          className="w-16 h-16 inline-flex items-center justify-center rounded-full bg-red-500 font-medium text-white hover:bg-red-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
          <FontAwesomeIcon icon="phone-slash" className="text-xl p-6" />
        </button>
        <button
          type="button"
          onClick={turnMic}
          className={
            mySetting.mic
              ? "w-16 h-16 inline-flex items-center justify-center rounded-full bg-main-color font-medium text-white hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              : "w-16 h-16 inline-flex items-center justify-center rounded-full bg-slate-500 font-medium text-white hover:bg-slate-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2"
          }>
          <FontAwesomeIcon
            icon={mySetting.mic ? "microphone" : "microphone-slash"}
            className="text-xl"
          />
        </button>
      </div>
    </div>
    </>
  );
}


