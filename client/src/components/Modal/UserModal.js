import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import avatar from "../../pictures/avatar-1.3921191a8acf79d3e907.jpg";
import { getUserAvatar } from "../../util/getAvatar";

export default function UserModal({ isOpen, closeModal, calling }) {
  const navigate = useNavigate();
  const { counterpartUser } = useSelector((state) => state.userReducer);
  const { thisUser } = useSelector((state) => state.userReducer);
  // console.log(counterpartUser)

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
                  <div className="w-full flex justify-end mb-2">
                    <button onClick={closeModal}>
                      <FontAwesomeIcon
                        icon={"xmark"}
                        className="text-white text-xl hover:text-red-400"
                      />
                    </button>
                  </div>
                  <div className="flex justify-center my-4">
                    {
                      counterpartUser.email
                      ?
                        <img src={getUserAvatar(counterpartUser)} id='avatar-profile' className="avatar-chat" alt="avatar"></img>
                      :
                        <div className="flex items-center justify-center w-12 h-10 font-bold text-gray-500 rounded-full bg-main-color-blur">
                          {counterpartUser.name[0].toUpperCase()}
                        </div>
                    }
                  </div>
                  {/* username, email, phone number, country */}
                  <Dialog.Title
                    as="h3"
                    className="text-2xl text-center font-medium leading-6 text-white">
                    {
                      counterpartUser.email
                      ?
                        counterpartUser.username
                      :
                        counterpartUser.name
                    }
                  </Dialog.Title>
                  <div>
                    {
                      counterpartUser.email &&
                      <p className="text-center text-slate-400 mt-1 text-sm">
                        {counterpartUser.email}
                      </p>
                    }

                    {
                      counterpartUser.email &&
                      <p className="text-center text-slate-400 mt-1 text-sm">
                        {counterpartUser.phoneNumber}
                      </p>
                    }

                    {
                      counterpartUser.email &&
                      <p className="text-center text-slate-400 mt-1 text-sm">
                        {counterpartUser.country}
                      </p>
                    }

                    {
                      counterpartUser.email &&
                      <p className="text-center text-slate-400 text-sm mt-3">
                        Interested in: <br /> 
                          <p className="text-center text-slate-400 mt-1 text-sm">
                            {counterpartUser.UserLanguages.map(el => el.Language.name).join(', ')}
                          </p>
                      </p>
                    }

                    {
                      counterpartUser.email &&
                      <p className="text-center text-slate-400 text-sm mt-3">
                        Matching topics: <br /> 
                          <p className="text-center text-slate-400 mt-1 text-sm">
                            {counterpartUser.UserInterests.map(el => el.Interest.name).join(', ')}
                          </p>
                      </p>
                    }
                    
                  </div>
                  {
                    counterpartUser.email &&
                    <div className="mt-4 flex justify-center border-t border-light-gray pt-4">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-transparent p-4 text-sm font-medium text-white hover:bg-main-color focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={calling}>
                        <FontAwesomeIcon icon="video" className="text-2xl" />
                      </button>
                    </div>
                  }
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
