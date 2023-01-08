import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";

export default function VideoCallView() {
  const [mySetting, setMySetting] = useState({
    camera: true,
    mic: true,
  });

  const [friendSetting, setFriendSetting] = useState({
    camera: true,
    mic: true,
  });

  function turnCamera() {
    if(mySetting.camera) {
      setMySetting({
        ...mySetting, camera: false
      })
    } else {
     setMySetting({ ...mySetting, camera: true }) 
    }

  }

  return (
    <div className="bg-darker-gray flex h-screen max-h-screen w-screen flex-1 flex-col items-stretch justify-between overflow-hidden">
      {/* Video call body */}
      <div className="flex max-h-[calc(100%-8rem)] flex-1 flex-col lg:flex-row gap-4">
        {/* Friend */}
        <VidcallContent video={mySetting.camera}/>

        {/* User */}
        <VidcallContent />
      </div>

      {/* Call control */}
      <div className="bg-black-blue flex w-full gap-8 justify-center py-4 items-center md:py-6 h-32">
        <button
          type="button"
          className="w-16 h-16 inline-flex items-center justify-center rounded-full bg-main-color font-medium text-white hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          onClick={turnCamera}
        >
          <FontAwesomeIcon icon="video" className="text-xl p-4" />
        </button>
        <button
          type="button"
          className="w-16 h-16 inline-flex items-center justify-center rounded-full bg-red-500 font-medium text-white hover:bg-red-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
          <FontAwesomeIcon icon="phone-slash" className="text-xl p-6" />
        </button>
        <button
          type="button"
          className="w-16 h-16 inline-flex items-center justify-center rounded-full bg-main-color font-medium text-white hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
          <FontAwesomeIcon icon="microphone" className="text-xl" />
        </button>
      </div>
    </div>
  );
}

function VidcallContent({video, mic}) {
  const userVideo = useRef();
  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        if (userVideo.current) {
          userVideo.current.srcObject = stream;
        }
      });
  }, [video]);

  return (
    <div className="flex max-h-full flex-1 overflow-auto p-4">
      <div className="flex flex-col justify-center max-h-full flex-1 overflow-auto relative object-contain">
        { video ? 
          <video
          playsInline
          className="h-full w-full"
          muted
          ref={userVideo}
          autoPlay
        /> : <div className="bg-black w-full aspect-video"></div>
        }
        <div className="absolute">
          <div className="text-slate-400 w-full bg-black bg-opacity-50 flex justify-between items-center text-sm lg:gap-8 lg:text-base 2xl:text-xl 2xl:mt-2 2xl:justify-center px-4">
            <div>Sandra Brown</div>
            <div className="flex items-center gap-3">
              <FontAwesomeIcon icon="video" />
              <FontAwesomeIcon icon="microphone" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
