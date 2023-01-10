import { Fragment } from "react";
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dialog, Transition } from "@headlessui/react";
import { getGroupAvatar } from "../../util/getAvatar";
import { leaveGroup } from "../../store/middlewares/thunk";
import { swalError, swalSuccess } from "../../util/swal";

export default function GroupModal({ isOpen, closeModal, counterpartUser }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLeaveGroup = () => {
    dispatch(leaveGroup(counterpartUser.id))
    .then((_) => {
      closeModal()
      swalSuccess('Success to leave group!')
      console.log(counterpartUser);
      navigate('/home/chats')
    })
    .catch((err) => {
      swalError(err)
    })
  }

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
                    <img src={getGroupAvatar(counterpartUser)} id="avatar-profile" alt="avatar"></img>
                  </div>
                  <Dialog.Title
                    as="h3"
                    className="text-2xl font-medium leading-6 text-center text-white">
                    { counterpartUser.name }
                  </Dialog.Title>
                  <div className="mt-2 text-lg font-light text-center text-white">
                    { counterpartUser.description }
                  </div>
                  <p className="text-white w-full bg-black-blue mt-3 py-1 border-b border-gray-500 text-lg text-gray-300 text-center">Member</p>
                  <div className="flex flex-col flex-1 h-48 p-4 overflow-auto text-sm text-center text-white bg-black-blue">
                    {counterpartUser.GroupMembers.map(el => {
                      return <p key={el.UserId}>{el.User.username}</p>
                    })}
                  </div>
                  <div className="flex justify-center pt-4 mt-4 border-t border-light-gray">
                    <button
                      type="button"
                      className="inline-flex flex-col items-center justify-center gap-1 p-2 text-sm font-medium text-white border border-transparent rounded-md bg-main-color-blur hover:bg-main-color focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={handleLeaveGroup}>
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
