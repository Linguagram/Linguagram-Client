import React, { useState } from "react";
import ChangeAvatar from "../Modal/ChangeAvatar";
import ChangeProfile from "../Modal/ChangeProfile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Collapsible from "react-collapsible";
import avatar from "../../pictures/avatar-1.3921191a8acf79d3e907.jpg";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useDispatch } from "react-redux";
import { setHomeDrawer } from "../../store/actions/actionCreator";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function SectionSetting() {
  const dispatch = useDispatch();
  const [isAvatarModalVisible, setIsAvatarModalVisible] = useState(false);
  const [isProfileModalBisible, setisProfileModalVisible] = useState(false);

  const handleCloseAvatarModal = () => setIsAvatarModalVisible(false);
  const handleCloseProfileModal = () => setisProfileModalVisible(false);

  return (
    <>
      <div className="flex gap-3 mb-5 text-white md:gap-0 md:justify-between md:mb-8">
        <button
          className="md:hidden"
          onClick={() => dispatch(setHomeDrawer(true))}
        >
          <FontAwesomeIcon className="text-xl text-white" icon="bars" />
        </button>
        <div className="text-xl text-white">Settings</div>
      </div>

      <div className="flex flex-col items-center gap-6">
        <div className="flex items-end">
          <img src={avatar} id="avatar-profile" alt="avatar"></img>
          <div
            onClick={() => setIsAvatarModalVisible(true)}
            id="edit-avatar"
            className="flex items-center justify-center w-10 h-10 bg-gray-700 rounded-full cursor-pointer"
          >
            <FontAwesomeIcon className="text-white" icon="pen" />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-white">Patricia Smith</div>

          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-300 bg-transparent rounded-md focus:outline-none ">
                Available
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
              <Menu.Items className="absolute right-0 z-10 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1 bg-darker-gray">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? "bg-gray text-gray-300" : "text-gray-400",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Available
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? "bg-gray text-gray-300" : "text-gray-400",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Busy
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? "bg-gray text-gray-300" : "text-gray-400",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Do not disturb
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        type="submit"
                        className={classNames(
                          active ? "bg-gray text-gray-300" : "text-gray-400",
                          "block w-full px-4 py-2 text-left text-sm"
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

      <hr className="mt-10 mb-5 line-break" />

      <div className="flex flex-col w-full h-full gap-2 overflow-y-auto scrollbar-hide">
        <div className="text-sm text-gray-400">
          If several languages coalesce, the grammar of the resulting language
          is more simple and regular than that of the individual.
        </div>

        <div className="text-sm text-white mt-7">
          <Collapsible
            className="w-full"
            triggerClassName="triggerCollapsible"
            triggerOpenedClassName="triggerCollapsible"
            openedClassName="bg-black-blue"
            contentInnerClassName="p-3"
            trigger={["Personal Info", <FontAwesomeIcon icon="caret-right" />]}
          >
            <div className="flex flex-col gap-5 p-2">
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-2">
                  <p className="text-gray-400">Name</p>
                  <p className="font-bold">Patricia Smith</p>
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
                <p className="font-bold">patty@mail.com</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-gray-400">Country</p>
                <p className="font-bold">USA</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-gray-400">Native Language</p>
                <p className="font-bold">English</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-gray-400">Language in Learning</p>
                <p className="font-bold">Indonesian</p>
                <p className="font-bold">Korean</p>
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
