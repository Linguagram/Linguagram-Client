import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import avatar from "../../pictures/avatar-1.3921191a8acf79d3e907.jpg";

export default function IncomingCallingModal({ isOpen, closeModal, acceptCall, declineCall }) {
  const navigate = useNavigate();
  const { incomingCaller } = useSelector((state) => state.userReducer);
  
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95">
                <Dialog.Panel className="w-80 transform overflow-hidden rounded-lg bg-darker-gray p-6 text-left align-middle shadow-lg transition-all">
                  <div className="flex justify-center my-4">
                    {incomingCaller?.Avatar?.url ? <img src={incomingCaller.Avatar.url} id="avatar-profile" alt="avatar"></img> : ''}
                  </div>
                  <Dialog.Title
                    as="h3"
                    className="text-2xl text-center font-medium leading-6 text-white">
                    {incomingCaller.username}
                  </Dialog.Title>
                  <div>
                    <p className="text-center text-slate-400 mt-1 text-sm">
                      {incomingCaller.username} is calling you...
                    </p>
                  </div>
                  <div className="flex mt-4 border-t border-light-gray justify-center items-center gap-5">
                    <div className="flex justify-center pt-4">
                      <button
                        onClick={acceptCall}
                        type="button"
                        className="w-16 h-16 inline-flex items-center justify-center rounded-full bg-green-500 font-medium text-white hover:bg-green-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
                        <FontAwesomeIcon
                          icon="phone"
                          className="text-xl p-6"
                        />
                      </button>
                    </div>
                    <div className=" flex justify-center pt-4">
                      <button
                        onClick={declineCall}
                        type="button"
                        className="w-16 h-16 inline-flex items-center justify-center rounded-full bg-red-500 font-medium text-white hover:bg-red-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
                        <FontAwesomeIcon
                          icon="phone-slash"
                          className="text-xl p-6"
                        />
                      </button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
