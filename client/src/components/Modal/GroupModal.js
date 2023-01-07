import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import avatar from "../../pictures/avatar-1.3921191a8acf79d3e907.jpg";

export default function GroupModal({ isOpen, closeModal }) {

  // Mock data to test user list
  const users = [
    {id: 1, name: "Patricia Smith"},
    {id: 2, name: "John Smith"},
    {id: 3, name: "Adam Smith"},
    {id: 4, name: "Doris Brown"},
    {id: 5, name: "Jack White"},
    {id: 6, name: "Slash"},
    {id: 7, name: "Lead Belly"},
    {id: 8, name: "Howling Wolf"},
    {id: 9, name: "Chet Baker"},
    {id: 10, name: "Good Day"},
  ]

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
            <div className="flex items-center justify-center h-full p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95">
                <Dialog.Panel className="p-6 overflow-hidden text-left align-middle transition-all transform rounded-lg shadow-lg w-96 bg-darker-gray">
                  <div className="flex justify-end w-full mb-2">
                    <button onClick={closeModal}>
                      <FontAwesomeIcon
                        icon={"xmark"}
                        className="text-xl text-white hover:text-red-400"
                      />
                    </button>
                  </div>
                  <div className="flex justify-center my-4">
                    <img src={avatar} id="avatar-profile" alt="avatar"></img>
                  </div>
                  <Dialog.Title
                    as="h3"
                    className="text-2xl font-medium leading-6 text-center text-white">
                    Group Name
                  </Dialog.Title>
                  <div className="mt-2 text-lg font-light text-center text-white">
                    Members: {users.length}
                  </div>
                  <div className="flex flex-col flex-1 h-48 p-4 mt-6 overflow-auto text-sm text-center text-white bg-black-blue">
                    {users.map(user => {
                      return <p key={user.id}>{user.name}</p>
                    })}
                  </div>
                  <div className="flex justify-center pt-4 mt-4 border-t border-light-gray">
                    <button
                      type="button"
                      className="inline-flex flex-col items-center justify-center gap-1 p-2 text-sm font-medium text-white border border-transparent rounded-md bg-main-color-blur hover:bg-main-color focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}>
                      <p>Leave Group</p>
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
