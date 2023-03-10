import React, { useEffect, useState } from "react";
import ChangeAvatar from "../Modal/ChangeAvatar";
import ChangeProfile from "../Modal/ChangeProfile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Collapsible from "react-collapsible";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useDispatch, useSelector } from "react-redux";
import { setHomeDrawer } from "../../store/actions/actionCreator";
import { getUserAvatar } from "../../util/getAvatar";
import { editStatusUser, handleSetThisUser } from "../../store/middlewares/thunk";
import { swalSuccess } from "../../util/swal";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function SectionSetting() {
  const dispatch = useDispatch();
  const { thisUser, nativeLanguage, interestLanguage } = useSelector((state) => state.userReducer);
  const [isAvatarModalVisible, setIsAvatarModalVisible] = useState(false);
  const [isProfileModalBisible, setisProfileModalVisible] = useState(false);

  const handleCloseAvatarModal = () => setIsAvatarModalVisible(false);
  const handleCloseProfileModal = () => setisProfileModalVisible(false);

  const setStatus = (payload) => {
    dispatch(editStatusUser(payload))
    .then((res) => {
      dispatch(handleSetThisUser(res))
      swalSuccess('Success to update status')
    })
    .catch((err) => {
      console.log(err);
    })
  }

  if (!thisUser.id) return null;
  else {
    return (
      <>
        <div className="flex gap-3 mb-5 text-white md:gap-0 md:justify-between md:mb-8">
          <button
            className="md:hidden"
            onClick={() => dispatch(setHomeDrawer(true))}
          >
            <FontAwesomeIcon className="text-xl text-white" icon="bars" />
          </button>
          <div className="text-xl text-white">Profile Settings</div>
        </div>

        <div className="flex flex-col items-center gap-6">
          <div className="flex items-end">
            <img
              src={getUserAvatar(thisUser)}
              id="avatar-profile"
              alt="avatar"
              className="object-cover"
            ></img>
            <div
              onClick={() => setIsAvatarModalVisible(true)}
              id="edit-avatar"
              className="flex items-center justify-center w-10 h-10 bg-gray-700 rounded-full cursor-pointer"
            >
              <FontAwesomeIcon className="text-white" icon="pen" />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-white">{thisUser.username}</div>

            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-300 bg-transparent rounded-md focus:outline-none ">
                  { thisUser.status }
                  <ChevronDownIcon
                    className="w-5 h-5 ml-2 -mr-1"
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 origin-top-right bg-white rounded-md shadow-lg w-36 ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1 bg-darker-gray">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                        type="button"
                          onClick={() => setStatus('Available')}
                          className={classNames(
                            active ? "bg-gray text-gray-300" : "text-gray-400",
                            "block px-4 py-2 text-sm w-full text-left"
                          )}
                        >
                          Available
                        </button>
                      )}
                    </Menu.Item>

                    <Menu.Item>
                      {({ active }) => (
                        <button
                        type="button"
                          onClick={() => setStatus('Busy')}
                          className={classNames(
                            active ? "bg-gray text-gray-300" : "text-gray-400",
                            "block px-4 py-2 text-sm w-full text-left"
                          )}
                        >
                          Busy
                        </button>
                      )}
                    </Menu.Item>

                    <Menu.Item>
                      {({ active }) => (
                        <button
                        type="button"
                          onClick={() => setStatus('Do not disturb')}
                          className={classNames(
                            active ? "bg-gray text-gray-300" : "text-gray-400",
                            "block px-4 py-2 text-sm w-full text-left"
                          )}
                        >
                          Do not disturb
                        </button>
                      )}
                    </Menu.Item>

                    <Menu.Item>
                      {({ active }) => (
                        <button
                        type="button"
                          onClick={() => setStatus('Idle')}
                          className={classNames(
                            active ? "bg-gray text-gray-300" : "text-gray-400",
                            "block px-4 py-2 text-sm w-full text-left"
                          )}
                        >
                          Idle
                        </button>
                      )}
                    </Menu.Item>
                    
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>

        <hr className="mt-5 line-break" />

        <div className="flex flex-col w-full h-full gap-2 overflow-y-auto scrollbar-hide">
          <div className="text-sm text-white mt-7">
            <Collapsible
              className="w-full"
              triggerClassName="triggerCollapsible"
              triggerOpenedClassName="triggerCollapsible"
              openedClassName="bg-black-blue"
              contentInnerClassName="p-3"
              trigger={[
                "Personal Info",
                <FontAwesomeIcon icon="caret-right" />,
              ]}
            >
              <div className="flex flex-col gap-5 p-2">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-2">
                    <p className="text-gray-400">Name</p>
                    <p className="font-bold">{thisUser.username}</p>
                  </div>

                  <div className="flex justify-between">
                    <div
                      onClick={() => setisProfileModalVisible(true)}
                      className="flex items-center w-full gap-2 p-2 rounded cursor-pointer bg-gray h-min"
                    >
                      <FontAwesomeIcon icon="pen-to-square" />
                      <h4>Edit</h4>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-gray-400">Email</p>
                  <p className="font-bold">{thisUser.email}</p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-gray-400">Phone Number</p>
                  <p className="font-bold">{thisUser.phoneNumber}</p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-gray-400">Country</p>
                  <p className="font-bold">{thisUser.country}</p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-gray-400">Native Language</p>
                  <p className="font-bold">{ nativeLanguage.name }</p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-gray-400">Language in Learning</p>
                  <p className="font-bold">{ interestLanguage.name }</p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-gray-400">Interests</p>
                  {
                    thisUser.UserInterests.map(interest => {
                      return (
                        <p key={interest.id} className="font-bold">{ interest.Interest.name }</p>
                      )
                    })
                  }
                </div>
              </div>
            </Collapsible>
          </div>
        </div>

        <ChangeAvatar
          onClose={handleCloseAvatarModal}
          visible={isAvatarModalVisible}
        />
        <ChangeProfile
          onClose={handleCloseProfileModal}
          visible={isProfileModalBisible}
        />
      </>
    );
  }
}
