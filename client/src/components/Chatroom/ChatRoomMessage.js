import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import avatar from '../../pictures/avatar-1.3921191a8acf79d3e907.jpg'

export default function ChatRoomMessage() {
  return (
    <div className='flex flex-col p-5 h-chatroom-message overflow-y-auto'>

        <div className=''>
            <div className='flex items-end gap-3 mb-7'>
                <div>
                    <img src={avatar} class='avatar-chat' alt='avatar'></img>
                </div>
                <div className='flex flex-col gap-1'>
                    <div className='flex gap-2'>
                        <div className='bg-main-color rounded message-box flex flex-col gap-3 p-3'>
                            <h5 className='text-white'>Good Morning</h5>
                            <div className='flex items-center justify-end gap-1'>
                                <FontAwesomeIcon className='text-gray-400 text-xs' icon='clock'/>
                                <h6 className='text-gray-400 text-xs'>10.00</h6>
                            </div>
                        </div>
                        <FontAwesomeIcon className='text-gray-400 text-sm cursor-pointer' icon='ellipsis-vertical'/>
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
                        <FontAwesomeIcon className='text-gray-400 text-sm cursor-pointer' icon='ellipsis-vertical'/>
                        <div className='bg-gray rounded message-box flex flex-col gap-3 p-3'>
                            <h5 className='text-white'>Good morning, How are you? What about our next meeting?</h5>
                            <div className='flex items-center gap-1'>
                                <FontAwesomeIcon className='text-gray-400 text-xs' icon='clock'/>
                                <h6 className='text-gray-400 text-xs'>10.00</h6>
                            </div>
                        </div>
                    </div>
                    <div className='text-gray-400 text-right'>
                        Doris Brown
                    </div>
                </div>
                <div>
                    <img src={avatar} class='avatar-chat' alt='avatar'></img>
                </div>
            </div>
        </div>

        <div className=''>
            <div className='flex items-end gap-3 mb-7'>
                <div>
                    <img src={avatar} class='avatar-chat' alt='avatar'></img>
                </div>
                <div className='flex flex-col gap-1'>
                    <div className='flex gap-2'>
                        <div className='bg-main-color rounded message-box flex flex-col gap-3 p-3'>
                            <h5 className='text-white'>Yeah Everything is fine.</h5>
                            <div className='flex items-center justify-end gap-1'>
                                <FontAwesomeIcon className='text-gray-400 text-xs' icon='clock'/>
                                <h6 className='text-gray-400 text-xs'>10.00</h6>
                            </div>
                        </div>
                        <FontAwesomeIcon className='text-gray-400 text-sm cursor-pointer' icon='ellipsis-vertical'/>
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
                    <img src={avatar} class='avatar-chat' alt='avatar'></img>
                </div>
                <div className='flex flex-col gap-1'>
                    <div className='flex gap-2'>
                        <div className='bg-main-color rounded message-box flex flex-col gap-3 p-3'>
                            <h5 className='text-white'>& Next meeting tomorrow 10.00AM</h5>
                            <div className='flex items-center justify-end gap-1'>
                                <FontAwesomeIcon className='text-gray-400 text-xs' icon='clock'/>
                                <h6 className='text-gray-400 text-xs'>10.00</h6>
                            </div>
                        </div>
                        <FontAwesomeIcon className='text-gray-400 text-sm cursor-pointer' icon='ellipsis-vertical'/>
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
                    <img src={avatar} class='avatar-chat' alt='avatar'></img>
                </div>
                <div className='flex flex-col gap-1'>
                    <div className='flex gap-2'>
                        <div className='bg-main-color rounded message-box flex flex-col gap-3 p-3'>
                            <h5 className='text-white'>Good Morning</h5>
                            <div className='flex items-center justify-end gap-1'>
                                <FontAwesomeIcon className='text-gray-400 text-xs' icon='clock'/>
                                <h6 className='text-gray-400 text-xs'>10.00</h6>
                            </div>
                        </div>
                        <FontAwesomeIcon className='text-gray-400 text-sm cursor-pointer' icon='ellipsis-vertical'/>
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
                        <FontAwesomeIcon className='text-gray-400 text-sm cursor-pointer' icon='ellipsis-vertical'/>
                        <div className='bg-gray rounded message-box flex flex-col gap-3 p-3'>
                            <h5 className='text-white'>Good morning, How are you? What about our next meeting?</h5>
                            <div className='flex items-center gap-1'>
                                <FontAwesomeIcon className='text-gray-400 text-xs' icon='clock'/>
                                <h6 className='text-gray-400 text-xs'>10.00</h6>
                            </div>
                        </div>
                    </div>
                    <div className='text-gray-400 text-right'>
                        Doris Brown
                    </div>
                </div>
                <div>
                    <img src={avatar} class='avatar-chat' alt='avatar'></img>
                </div>
            </div>
        </div>

        <div className=''>
            <div className='flex items-end gap-3 mb-7'>
                <div>
                    <img src={avatar} class='avatar-chat' alt='avatar'></img>
                </div>
                <div className='flex flex-col gap-1'>
                    <div className='flex gap-2'>
                        <div className='bg-main-color rounded message-box flex flex-col gap-3 p-3'>
                            <h5 className='text-white'>Yeah Everything is fine.</h5>
                            <div className='flex items-center justify-end gap-1'>
                                <FontAwesomeIcon className='text-gray-400 text-xs' icon='clock'/>
                                <h6 className='text-gray-400 text-xs'>10.00</h6>
                            </div>
                        </div>
                        <FontAwesomeIcon className='text-gray-400 text-sm cursor-pointer' icon='ellipsis-vertical'/>
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
                    <img src={avatar} class='avatar-chat' alt='avatar'></img>
                </div>
                <div className='flex flex-col gap-1'>
                    <div className='flex gap-2'>
                        <div className='bg-main-color rounded message-box flex flex-col gap-3 p-3'>
                            <h5 className='text-white'>& Next meeting tomorrow 10.00AM</h5>
                            <div className='flex items-center justify-end gap-1'>
                                <FontAwesomeIcon className='text-gray-400 text-xs' icon='clock'/>
                                <h6 className='text-gray-400 text-xs'>10.00</h6>
                            </div>
                        </div>
                        <FontAwesomeIcon className='text-gray-400 text-sm cursor-pointer' icon='ellipsis-vertical'/>
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
