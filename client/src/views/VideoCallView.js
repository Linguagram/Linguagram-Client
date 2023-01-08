import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";

export default function VideoCallView() {
  const [mySetting, setMySetting] = useState({
    name: "Eka Dharma",
    camera: true,
    mic: true,
  });

  const [friendSetting, setFriendSetting] = useState({
    name: "Sandra Brown",
    camera: true,
    mic: true,
  });

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

  return (
    <div className="bg-darker-gray flex h-screen max-h-screen w-screen flex-1 flex-col items-stretch justify-between overflow-hidden">
      {/* Video call body */}
      <div className="flex max-h-[calc(100%-8rem)] flex-1 flex-col lg:flex-row gap-4 p-4">
        {/* Friend */}
        <VidcallContent
          video={mySetting.camera}
          mic={mySetting.mic}
          name={mySetting.name}
        />

        {/* User */}
        <VidcallContent name={friendSetting.name} />
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
  );
}

function VidcallContent({ name, video, mic }) {
  const userVideo = useRef();
  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: video, audio: true })
      .then((stream) => {
        if (userVideo.current) {
          userVideo.current.srcObject = stream;
        }
      });
  }, [video]);

  return (
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
            <div>{name}</div>
            <div className="flex items-center gap-3">
              <FontAwesomeIcon icon={video ? "video" : "video-slash"} />
              <FontAwesomeIcon icon={mic ? "microphone" : "microphone-slash"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
