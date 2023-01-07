import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function VideoCallView() {
  const [mySetting, setMySetting] = useState({
    camera: true,
    mic: true,
  });

  const [friendSetting, setFriendSetting] = useState({
    camera: true,
    mic: true,
  });

  const videoCallBodyStyle =
    "flex flex-1 justify-center items-center p-4 min-w-0 min-h-0";
  const videoLayout = "flex flex-col gap-4 md:flex-row overflow-auto";

  return (
    <div className="bg-darker-gray flex h-screen max-h-screen w-screen flex-1 flex-col items-stretch justify-between overflow-hidden">
      {/* Video call body */}
      <div className="flex max-h-[calc(100%-8rem)] flex-1 flex-col lg:flex-row">
        {/* Friend */}
        <VidcallContent />
        
        {/* User */}
        <VidcallContent />
      </div>

      {/* Call control */}
      <div className="bg-black-blue flex w-full gap-8 justify-center py-4 items-center md:py-6 h-32">
        <button
          type="button"
          className="w-16 h-16 inline-flex items-center justify-center rounded-full bg-main-color font-medium text-white hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
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

function VidcallContent() {
  return (
    <div className="flex max-h-full flex-1 overflow-auto bg-red-200 p-4">
      <div className="flex flex-col justify-center max-h-full flex-1 overflow-auto bg-green-200 p-4">
        <img
          className="h-full aspect-video object-contain"
          src="https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        />
      </div>
    </div>
  );
}

function VidCallLabel() {
  return (
    <div className="text-slate-400 py-1 flex justify-between items-center px-4 text-sm lg:gap-8 lg:text-base 2xl:text-xl 2xl:mt-2 2xl:justify-center">
      <div>Sandra Brown</div>
      <div className="flex items-center gap-3">
        <FontAwesomeIcon icon="video" />
        <FontAwesomeIcon icon="microphone" />
      </div>
    </div>
  );
}
