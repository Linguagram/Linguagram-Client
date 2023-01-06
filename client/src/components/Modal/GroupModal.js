import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import avatar from "../../pictures/avatar-1.3921191a8acf79d3e907.jpg";

export default function GroupModal({ isOpen, closeModal }) {
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
                <Dialog.Panel className="w-72 transform overflow-hidden rounded-lg bg-darker-gray p-6 text-left align-middle shadow-lg transition-all">
                  <div className="w-full flex justify-end mb-2">
                    <button onClick={closeModal}>
                      <FontAwesomeIcon
                        icon={"xmark"}
                        className="text-white text-xl hover:text-red-400"
                      />
                    </button>
                  </div>
                  <div className="flex justify-center my-4">
                    <img src={avatar} id="avatar-profile" alt="avatar"></img>
                  </div>
                  <Dialog.Title
                    as="h3"
                    className="text-2xl text-center font-medium leading-6 text-white">
                    Group Name
                  </Dialog.Title>
                  <p className="text-center text-white mt-4 text-sm">
                    Patricia Smith, Doris Brown and 2 others
                  </p>
                  <div className="mt-4 flex justify-center border-t border-light-gray pt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center gap-1 rounded-md border border-transparent bg-main-color-blur p-2 text-sm items-center flex-col font-medium text-white hover:bg-main-color focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}>
                      <p>Join Group</p>
                    </button>
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
