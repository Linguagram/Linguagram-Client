import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useRef } from 'react'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { useSelector } from 'react-redux'

export default function ChatRoomMessage() {
    const messageEndRef = useRef(null)
    const { currentMessages } = useSelector((state) => state.messageReducer);
    const { thisUser, counterpartUser } = useSelector((state) => state.userReducer);

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    const scrollToBottom = () => {
        messageEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        scrollToBottom()
    }, [currentMessages])
    console.log('counterpartUser', counterpartUser);
  return (
    <div className='flex flex-col flex-grow p-5 overflow-x-hidden overflow-y-auto'>
       
        {
            currentMessages.map(msg => {
                return msg.UserId === thisUser.id
                ?
                    <div key={msg.id} className='flex justify-end'>
                        <div className='flex items-end gap-3 mb-7'>
                            <div className='flex flex-col gap-1'>
                                <div className='flex justify-end gap-2'>
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
                                                    <Menu.Item>
                                                    {({ active }) => (
                                                        <a
                                                        href="#"
                                                        className={classNames(
                                                            active ? 'bg-gray text-gray-300' : 'text-gray-400',
                                                            'block px-4 py-2 text-sm'
                                                        )}
                                                        >
                                                        Translate
                                                        </a>
                                                    )}
                                                    </Menu.Item>
                                                </div>
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>  
                                    <div className='flex flex-col min-w-10 gap-3 p-3 rounded bg-gray message-box' style={{maxWidth: '70%'}}>
                                        {
                                            msg.deleted
                                            ?
                                            <h5 className='text-slate-500 text-sm' style={{wordBreak: 'break-word'}}>(This message has been deleted)</h5>
                                            :
                                            <div className='flex flex-col gap-1'>
                                                {
                                                msg.MediaId
                                                ?
                                                <img className='img-chat w-full' src={msg.Medium.url} alt='picture-chat'></img>
                                                :
                                                    ''
                                                }
                                                <h5 className='text-white' style={{wordBreak: 'break-word'}}>{msg.content} {msg.edited? <span className='text-slate-500 text-xs'>(edited)</span> : ''}</h5>
                                            </div>
                                        }
                                        <div className='flex justify-end items-center gap-1'>
                                            <FontAwesomeIcon className='text-xs text-gray-400' icon='clock'/>
                                            <h6 className='text-xs text-gray-400'>{new Date(msg.updatedAt).toLocaleString("id-ID")}</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className='text-right text-gray-400'>
                                    {thisUser.username}
                                </div>
                            </div>
                            <div>
                                <img src={thisUser.Avatar.url} className='avatar-chat' alt='avatar'></img>
                            </div>
                        </div>
                    </div>
                :
                    <div key={msg.id} className=''>
                        <div className='flex items-end gap-3 mb-7'>
                            <div>
                                <img src={counterpartUser.Avatar.url} className='avatar-chat' alt='avatar'></img>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <div className='flex gap-2'>
                                    <div className='flex flex-col gap-3 p-3 min-w-10 rounded bg-main-color message-box' style={{maxWidth: '70%'}}>
                                        {
                                            msg.deleted
                                            ?
                                            <h5 className='text-slate-500 text-sm' style={{wordBreak: 'break-word'}}>(This message has been deleted)</h5>
                                            :
                                            <div className='flex flex-col gap-1'>
                                                {
                                                msg.MediaId
                                                ?
                                                <img className='img-chat w-full' src={msg.Medium.url} alt='picture-chat'></img>
                                                :
                                                    ''
                                                }
                                                <h5 className='text-white' style={{wordBreak: 'break-word'}}>{msg.content} {msg.edited? <span className='text-slate-500 text-xs'>(edited)</span> : ''}</h5>
                                            </div>
                                        }
                                        <div className='flex items-center justify-start gap-1'>
                                            <FontAwesomeIcon className='text-xs text-gray-400' icon='clock'/>
                                            <h6 className='text-xs text-gray-400'>{new Date(msg.updatedAt).toLocaleString("id-ID")}</h6>
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
                                                    <Menu.Item>
                                                    {({ active }) => (
                                                        <a
                                                        href="#"
                                                        className={classNames(
                                                            active ? 'bg-gray text-gray-300' : 'text-gray-400',
                                                            'block px-4 py-2 text-sm'
                                                        )}
                                                        >
                                                        Translate
                                                        </a>
                                                    )}
                                                    </Menu.Item>
                                                </div>
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>  
                                </div>
                                <div className='text-gray-400'>
                                    {counterpartUser.username}
                                </div>
                            </div>
                        </div>
                    </div>
            })
        }


        <div ref={messageEndRef} />
    </div>
  )
}
