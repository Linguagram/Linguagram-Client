import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendFriendRequest } from "../../store/middlewares/thunk";
import { getUserAvatar } from "../../util/getAvatar";

export default function UserModal({ isOpen, closeModal, calling }) {
  const dispatch = useDispatch();
  const { counterpartUser, thisUser } = useSelector(
    (state) => state.userReducer
  );
  const { friends } = useSelector((state) => state.friendReducer);

  const addFriend = () => {
    dispatch(sendFriendRequest(counterpartUser.id));
  };

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
            leaveTo="opacity-0"
          >
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
                leaveTo="opacity-0 scale-95"
              >
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
                    <img
                      src={getUserAvatar(counterpartUser)}
                      id="avatar-profile"
                      className="avatar-chat"
                      alt="avatar"
                    ></img>
                  </div>
                  {/* username, email, phone number, country */}
                  <Dialog.Title
                    as="h3"
                    className="text-2xl text-center font-medium leading-6 text-white"
                  >
                    {counterpartUser.username}
                  </Dialog.Title>
                  <div>
                    <div className="text-gray-300 text-lg font-medium text-center">
                    ({ counterpartUser.country })
                    </div>
                    <p className="text-center text-gray-300 mt-1 text-base">
                      {counterpartUser.status}
                    </p>
                    {counterpartUser.email && (
                      <p className="text-center text-slate-400 text-sm mt-3">
                        Interested in: <br />
                        <p className="text-center text-slate-400 mt-1 text-sm">
                          {counterpartUser.UserLanguages.map(
                            (el) => el.Language.name
                          ).join(", ")}
                        </p>
                      </p>
                    )}

                    {counterpartUser.email && (
                      <p className="text-center text-slate-400 text-sm mt-3">
                        Interested topic: <br />
                        <p className="text-center text-slate-400 mt-1 text-sm">
                          {counterpartUser.UserInterests.map(
                            (el) => el.Interest.name
                          ).join(", ")}
                        </p>
                      </p>
                    )}
                  </div>
                  {counterpartUser.email &&
                  friends.some(
                    (el) =>
                      (el.FriendId === counterpartUser.id &&
                        el.UserId === thisUser.id) ||
                      (el.UserId === counterpartUser.id &&
                        el.FriendId === thisUser.id)
                  ) ? (
                    <div className="mt-4 flex justify-center border-t border-light-gray pt-4">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-transparent p-4 text-sm font-medium text-white hover:bg-main-color focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={calling}
                      >
                        <FontAwesomeIcon icon="video" className="text-2xl" />
                      </button>
                    </div>
                  ) : (
                    <div className="flex justify-center w-full gap-2 my-5 text-sm">
                      <button
                        onClick={addFriend}
                        className="inline-block w-full p-2 text-center text-white border rounded-lg bg-main-color border-main-color hover:bg-black-blue hover:border-black-blue focus:outline-none focus:ring active:text-main-color md:w-fit"
                      >
                        <span className="sr-only"> Add Friend </span>
                        Add Friend
                      </button>
                    </div>
                  )}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
