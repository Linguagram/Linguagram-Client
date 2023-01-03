import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import avatar from '../../pictures/avatar-1.3921191a8acf79d3e907.jpg'

export default function ChatRoomMessage() {

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

  return (
    <div className='flex flex-col flex-grow p-5 overflow-y-auto'>

        <div className=''>
            <div className='flex items-end gap-3 mb-7'>
                <div>
                    <img src={avatar} className='avatar-chat' alt='avatar'></img>
                </div>
                <div className='flex flex-col gap-1'>
                    <div className='flex gap-2'>
                        <div className='flex flex-col gap-3 p-3 rounded bg-main-color message-box'>
                            <h5 className='text-white'>Good Morning</h5>
                            <div className='flex items-center justify-end gap-1'>
                                <FontAwesomeIcon className='text-xs text-gray-400' icon='clock'/>
                                <h6 className='text-xs text-gray-400'>10.00</h6>
                            </div>
                        </div>
                        <Menu as="div" className="relative inline-block text-left">
                            <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-300 bg-transparent rounded-md focus:outline-none ">
                                <FontAwesomeIcon className='text-sm text-gray-400 cursor-pointer' icon='ellipsis-vertical' aria-hidden="true"/>
                            </Menu.Button>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="absolute left-0 z-10 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div className="py-1 bg-darker-gray">
                                        <Menu.Item>
                                        {({ active }) => (
                                            <a
                                            href="#"
                                            className={classNames(
                                                active ? 'bg-gray text-gray-300' : 'text-gray-400',
                                                'block px-4 py-2 text-sm'
                                            )}
                                            >
                                            Edit
                                            </a>
                                        )}
                                        </Menu.Item>
                                        <Menu.Item>
                                        {({ active }) => (
                                            <a
                                            href="#"
                                            className={classNames(
                                                active ? 'bg-gray text-gray-300' : 'text-gray-400',
                                                'block px-4 py-2 text-sm'
                                            )}
                                            >
                                            Delete
                                            </a>
                                        )}
                                        </Menu.Item>
                                    </div>
                                </Menu.Items>
                            </Transition>
                        </Menu>  
                    </div>
                    <div className='text-gray-400'>
                        Doris Brown
                    </div>
                </div>
            </div>
        </div>

        <div className='flex justify-end'>
            <div className='flex items-end gap-3 mb-7'>
                <div className='flex flex-col gap-1'>
                    <div className='flex gap-2'>
                        <Menu as="div" className="relative inline-block text-left">
                            <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-300 bg-transparent rounded-md focus:outline-none ">
                                <FontAwesomeIcon className='text-sm text-gray-400 cursor-pointer' icon='ellipsis-vertical' aria-hidden="true"/>
                            </Menu.Button>
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
                                                active ? 'bg-gray text-gray-300' : 'text-gray-400',
                                                'block px-4 py-2 text-sm'
                                            )}
                                            >
                                            Edit
                                            </a>
                                        )}
                                        </Menu.Item>
                                        <Menu.Item>
                                        {({ active }) => (
                                            <a
                                            href="#"
                                            className={classNames(
                                                active ? 'bg-gray text-gray-300' : 'text-gray-400',
                                                'block px-4 py-2 text-sm'
                                            )}
                                            >
                                            Delete
                                            </a>
                                        )}
                                        </Menu.Item>
                                    </div>
                                </Menu.Items>
                            </Transition>
                        </Menu>  
                        <div className='flex flex-col gap-3 p-3 rounded bg-gray message-box'>
                            <h5 className='text-white'>Good morning, How are you? What about our next meeting?</h5>
                            <div className='flex items-center gap-1'>
                                <FontAwesomeIcon className='text-xs text-gray-400' icon='clock'/>
                                <h6 className='text-xs text-gray-400'>10.00</h6>
                            </div>
                        </div>
                    </div>
                    <div className='text-right text-gray-400'>
                        Doris Brown
                    </div>
                </div>
                <div>
                    <img src={avatar} className='avatar-chat' alt='avatar'></img>
                </div>
            </div>
        </div>

        <div className=''>
            <div className='flex items-end gap-3 mb-7'>
                <div>
                    <img src={avatar} className='avatar-chat' alt='avatar'></img>
                </div>
                <div className='flex flex-col gap-1'>
                    <div className='flex gap-2'>
                        <div className='flex flex-col gap-3 p-3 rounded bg-main-color message-box'>
                            <h5 className='text-white'>Yeah Everything is fine.</h5>
                            <div className='flex items-center justify-end gap-1'>
                                <FontAwesomeIcon className='text-xs text-gray-400' icon='clock'/>
                                <h6 className='text-xs text-gray-400'>10.00</h6>
                            </div>
                        </div>
                        <Menu as="div" className="relative inline-block text-left">
                            <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-300 bg-transparent rounded-md focus:outline-none ">
                                <FontAwesomeIcon className='text-sm text-gray-400 cursor-pointer' icon='ellipsis-vertical' aria-hidden="true"/>
                            </Menu.Button>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="absolute left-0 z-10 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div className="py-1 bg-darker-gray">
                                        <Menu.Item>
                                        {({ active }) => (
                                            <a
                                            href="#"
                                            className={classNames(
                                                active ? 'bg-gray text-gray-300' : 'text-gray-400',
                                                'block px-4 py-2 text-sm'
                                            )}
                                            >
                                            Edit
                                            </a>
                                        )}
                                        </Menu.Item>
                                        <Menu.Item>
                                        {({ active }) => (
                                            <a
                                            href="#"
                                            className={classNames(
                                                active ? 'bg-gray text-gray-300' : 'text-gray-400',
                                                'block px-4 py-2 text-sm'
                                            )}
                                            >
                                            Delete
                                            </a>
                                        )}
                                        </Menu.Item>
                                    </div>
                                </Menu.Items>
                            </Transition>
                        </Menu>  
                    </div>
                    <div className='text-gray-400'>
                        Doris Brown
                    </div>
                </div>
            </div>
        </div>

        <div className=''>
            <div className='flex items-end gap-3 mb-7'>
                <div>
                    <img src={avatar} className='avatar-chat' alt='avatar'></img>
                </div>
                <div className='flex flex-col gap-1'>
                    <div className='flex gap-2'>
                        <div className='flex flex-col gap-3 p-3 rounded bg-main-color message-box'>
                            <h5 className='text-white'>& Next meeting tomorrow 10.00AM</h5>
                            <div className='flex items-center justify-end gap-1'>
                                <FontAwesomeIcon className='text-xs text-gray-400' icon='clock'/>
                                <h6 className='text-xs text-gray-400'>10.00</h6>
                            </div>
                        </div>
                        <Menu as="div" className="relative inline-block text-left">
                            <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-300 bg-transparent rounded-md focus:outline-none ">
                                <FontAwesomeIcon className='text-sm text-gray-400 cursor-pointer' icon='ellipsis-vertical' aria-hidden="true"/>
                            </Menu.Button>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="absolute left-0 z-10 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div className="py-1 bg-darker-gray">
                                        <Menu.Item>
                                        {({ active }) => (
                                            <a
                                            href="#"
                                            className={classNames(
                                                active ? 'bg-gray text-gray-300' : 'text-gray-400',
                                                'block px-4 py-2 text-sm'
                                            )}
                                            >
                                            Edit
                                            </a>
                                        )}
                                        </Menu.Item>
                                        <Menu.Item>
                                        {({ active }) => (
                                            <a
                                            href="#"
                                            className={classNames(
                                                active ? 'bg-gray text-gray-300' : 'text-gray-400',
                                                'block px-4 py-2 text-sm'
                                            )}
                                            >
                                            Delete
                                            </a>
                                        )}
                                        </Menu.Item>
                                    </div>
                                </Menu.Items>
                            </Transition>
                        </Menu>  
                    </div>
                    <div className='text-gray-400'>
                        Doris Brown
                    </div>
                </div>
            </div>
        </div>

        <div className=''>
            <div className='flex items-end gap-3 mb-7'>
                <div>
                    <img src={avatar} className='avatar-chat' alt='avatar'></img>
                </div>
                <div className='flex flex-col gap-1'>
                    <div className='flex gap-2'>
                        <div className='flex flex-col gap-3 p-3 rounded bg-main-color message-box'>
                            <h5 className='text-white'>Good Morning</h5>
                            <div className='flex items-center justify-end gap-1'>
                                <FontAwesomeIcon className='text-xs text-gray-400' icon='clock'/>
                                <h6 className='text-xs text-gray-400'>10.00</h6>
                            </div>
                        </div>
                        <Menu as="div" className="relative inline-block text-left">
                            <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-300 bg-transparent rounded-md focus:outline-none ">
                                <FontAwesomeIcon className='text-sm text-gray-400 cursor-pointer' icon='ellipsis-vertical' aria-hidden="true"/>
                            </Menu.Button>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="absolute left-0 z-10 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div className="py-1 bg-darker-gray">
                                        <Menu.Item>
                                        {({ active }) => (
                                            <a
                                            href="#"
                                            className={classNames(
                                                active ? 'bg-gray text-gray-300' : 'text-gray-400',
                                                'block px-4 py-2 text-sm'
                                            )}
                                            >
                                            Edit
                                            </a>
                                        )}
                                        </Menu.Item>
                                        <Menu.Item>
                                        {({ active }) => (
                                            <a
                                            href="#"
                                            className={classNames(
                                                active ? 'bg-gray text-gray-300' : 'text-gray-400',
                                                'block px-4 py-2 text-sm'
                                            )}
                                            >
                                            Delete
                                            </a>
                                        )}
                                        </Menu.Item>
                                    </div>
                                </Menu.Items>
                            </Transition>
                        </Menu>  
                    </div>
                    <div className='text-gray-400'>
                        Doris Brown
                    </div>
                </div>
            </div>
        </div>

        <div className='flex justify-end'>
            <div className='flex items-end gap-3 mb-7'>
                <div className='flex flex-col gap-1'>
                    <div className='flex gap-2'>
                        <Menu as="div" className="relative inline-block text-left">
                            <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-300 bg-transparent rounded-md focus:outline-none ">
                                <FontAwesomeIcon className='text-sm text-gray-400 cursor-pointer' icon='ellipsis-vertical' aria-hidden="true"/>
                            </Menu.Button>
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
                                                active ? 'bg-gray text-gray-300' : 'text-gray-400',
                                                'block px-4 py-2 text-sm'
                                            )}
                                            >
                                            Edit
                                            </a>
                                        )}
                                        </Menu.Item>
                                        <Menu.Item>
                                        {({ active }) => (
                                            <a
                                            href="#"
                                            className={classNames(
                                                active ? 'bg-gray text-gray-300' : 'text-gray-400',
                                                'block px-4 py-2 text-sm'
                                            )}
                                            >
                                            Delete
                                            </a>
                                        )}
                                        </Menu.Item>
                                    </div>
                                </Menu.Items>
                            </Transition>
                        </Menu>  
                        <div className='flex flex-col gap-3 p-3 rounded bg-gray message-box'>
                            <h5 className='text-white'>Good morning, How are you? What about our next meeting?</h5>
                            <div className='flex items-center gap-1'>
                                <FontAwesomeIcon className='text-xs text-gray-400' icon='clock'/>
                                <h6 className='text-xs text-gray-400'>10.00</h6>
                            </div>
                        </div>
                    </div>
                    <div className='text-right text-gray-400'>
                        Doris Brown
                    </div>
                </div>
                <div>
                    <img src={avatar} className='avatar-chat' alt='avatar'></img>
                </div>
            </div>
        </div>

        <div className=''>
            <div className='flex items-end gap-3 mb-7'>
                <div>
                    <img src={avatar} className='avatar-chat' alt='avatar'></img>
                </div>
                <div className='flex flex-col gap-1'>
                    <div className='flex gap-2'>
                        <div className='flex flex-col gap-3 p-3 rounded bg-main-color message-box'>
                            <h5 className='text-white'>Yeah Everything is fine.</h5>
                            <div className='flex items-center justify-end gap-1'>
                                <FontAwesomeIcon className='text-xs text-gray-400' icon='clock'/>
                                <h6 className='text-xs text-gray-400'>10.00</h6>
                            </div>
                        </div>
                        <Menu as="div" className="relative inline-block text-left">
                            <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-300 bg-transparent rounded-md focus:outline-none ">
                                <FontAwesomeIcon className='text-sm text-gray-400 cursor-pointer' icon='ellipsis-vertical' aria-hidden="true"/>
                            </Menu.Button>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="absolute left-0 z-10 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div className="py-1 bg-darker-gray">
                                        <Menu.Item>
                                        {({ active }) => (
                                            <a
                                            href="#"
                                            className={classNames(
                                                active ? 'bg-gray text-gray-300' : 'text-gray-400',
                                                'block px-4 py-2 text-sm'
                                            )}
                                            >
                                            Edit
                                            </a>
                                        )}
                                        </Menu.Item>
                                        <Menu.Item>
                                        {({ active }) => (
                                            <a
                                            href="#"
                                            className={classNames(
                                                active ? 'bg-gray text-gray-300' : 'text-gray-400',
                                                'block px-4 py-2 text-sm'
                                            )}
                                            >
                                            Delete
                                            </a>
                                        )}
                                        </Menu.Item>
                                    </div>
                                </Menu.Items>
                            </Transition>
                        </Menu>  
                    </div>
                    <div className='text-gray-400'>
                        Doris Brown
                    </div>
                </div>
            </div>
        </div>

        <div className=''>
            <div className='flex items-end gap-3 mb-7'>
                <div>
                    <img src={avatar} className='avatar-chat' alt='avatar'></img>
                </div>
                <div className='flex flex-col gap-1'>
                    <div className='flex gap-2'>
                        <div className='flex flex-col gap-3 p-3 rounded bg-main-color message-box'>
                            <h5 className='text-white'>& Next meeting tomorrow 10.00AM</h5>
                            <div className='flex items-center justify-end gap-1'>
                                <FontAwesomeIcon className='text-xs text-gray-400' icon='clock'/>
                                <h6 className='text-xs text-gray-400'>10.00</h6>
                            </div>
                        </div>
                        <Menu as="div" className="relative inline-block text-left">
                            <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-300 bg-transparent rounded-md focus:outline-none ">
                                <FontAwesomeIcon className='text-sm text-gray-400 cursor-pointer' icon='ellipsis-vertical' aria-hidden="true"/>
                            </Menu.Button>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="absolute left-0 z-10 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div className="py-1 bg-darker-gray">
                                        <Menu.Item>
                                        {({ active }) => (
                                            <a
                                            href="#"
                                            className={classNames(
                                                active ? 'bg-gray text-gray-300' : 'text-gray-400',
                                                'block px-4 py-2 text-sm'
                                            )}
                                            >
                                            Edit
                                            </a>
                                        )}
                                        </Menu.Item>
                                        <Menu.Item>
                                        {({ active }) => (
                                            <a
                                            href="#"
                                            className={classNames(
                                                active ? 'bg-gray text-gray-300' : 'text-gray-400',
                                                'block px-4 py-2 text-sm'
                                            )}
                                            >
                                            Delete
                                            </a>
                                        )}
                                        </Menu.Item>
                                    </div>
                                </Menu.Items>
                            </Transition>
                        </Menu>  
                    </div>
                    <div className='text-gray-400'>
                        Doris Brown
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}
