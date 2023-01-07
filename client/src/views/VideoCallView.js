import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function VideoCallView() {
  return (
    <div className="bg-darker-gray w-screen h-screen flex flex-1 flex-col items-center justify-between fixed">
      {/* Video call body */}
      <div className="flex flex-1 flex-col justify-center items-center gap-2 md:flex-row md:px-4">
        <div className="">
          <img src="https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1532032877540-0793b44545a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
        </div>
      </div>

      {/* Call control */}
      <div className="bg-black-blue flex w-full gap-8 justify-center py-4 items-center md:py-6">
        <button
          type="button"
          className="w-16 h-16 inline-flex items-center justify-center rounded-full bg-main-color bg-transparent font-medium text-white hover:bg-main-color focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
          <FontAwesomeIcon icon="video" className="text-xl p-4" />
        </button>
        <button
          type="button"
          className="w-16 h-16 inline-flex items-center justify-center rounded-full bg-red-500 bg-transparent font-medium text-white hover:bg-red-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
          <FontAwesomeIcon icon="phone-slash" className="text-xl p-6" />
        </button>
        <button
          type="button"
          className="w-16 h-16 inline-flex items-center justify-center rounded-full bg-main-color bg-transparent font-medium text-white hover:bg-main-color focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
          <FontAwesomeIcon icon="microphone" className="text-xl" />
        </button>
      </div>
    </div>
  );
}
