import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import avatar from '../../pictures/avatar-1.3921191a8acf79d3e907.jpg'

export default function FriendRequest({onClose, visible}) {

  const handleOnClose = () => {
    onClose()
  }

  return (
    <div className={`${ visible ? '' : 'hidden' } fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-60`}>

        <div className='flex flex-col w-full p-5 mx-4 rounded md:mx-0 md:w-1/2 lg:p-8 bg-darker-gray h-3/4'>
            <div className='flex items-center justify-between'>
                <h3 className='text-xl text-white'>Friend Requests</h3>
                <h3 onClick={handleOnClose} className='text-4xl text-gray-400 cursor-pointer'>&times;</h3>
            </div>
            <div className='flex flex-col h-full gap-5 my-3 overflow-y-auto lg:my-5 scrollbar-hide'>
                <div>
                    <div className='flex items-center gap-4 p-2 rounded'>
                        <img src={avatar} className='avatar-chat' alt='avatar'></img>
                    <div className='flex justify-between w-full gap-1'>
                        <div className='flex items-center justify-between'>
                            <h4 className='text-base text-white cursor-pointer hover:underline'>Patrick Hendriks</h4>
                        </div>
                        <div className='flex items-center justify-between gap-6'>
                            <h6 className='text-2xl text-gray-300 cursor-pointer '>&times;</h6>
                            <FontAwesomeIcon className='text-base text-gray-300 cursor-pointer ' icon='check'/>
                        </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex items-center gap-4 p-2 rounded'>
                        <img src={avatar} className='avatar-chat' alt='avatar'></img>
                    <div className='flex justify-between w-full gap-1'>
                        <div className='flex items-center justify-between'>
                            <h4 className='text-base text-white cursor-pointer hover:underline'>Patrick Hendriks</h4>
                        </div>
                        <div className='flex items-center justify-between gap-6'>
                            <h6 className='text-2xl text-gray-300 cursor-pointer '>&times;</h6>
                            <FontAwesomeIcon className='text-base text-gray-300 cursor-pointer ' icon='check'/>
                        </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex items-center gap-4 p-2 rounded'>
                        <img src={avatar} className='avatar-chat' alt='avatar'></img>
                    <div className='flex justify-between w-full gap-1'>
                        <div className='flex items-center justify-between'>
                            <h4 className='text-base text-white cursor-pointer hover:underline'>Patrick Hendriks</h4>
                        </div>
                        <div className='flex items-center justify-between gap-6'>
                            <h6 className='text-2xl text-gray-300 cursor-pointer '>&times;</h6>
                            <FontAwesomeIcon className='text-base text-gray-300 cursor-pointer ' icon='check'/>
                        </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex items-center gap-4 p-2 rounded'>
                        <img src={avatar} className='avatar-chat' alt='avatar'></img>
                    <div className='flex justify-between w-full gap-1'>
                        <div className='flex items-center justify-between'>
                            <h4 className='text-base text-white cursor-pointer hover:underline'>Patrick Hendriks</h4>
                        </div>
                        <div className='flex items-center justify-between gap-6'>
                            <h6 className='text-2xl text-gray-300 cursor-pointer '>&times;</h6>
                            <FontAwesomeIcon className='text-base text-gray-300 cursor-pointer ' icon='check'/>
                        </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex items-center gap-4 p-2 rounded'>
                        <img src={avatar} className='avatar-chat' alt='avatar'></img>
                    <div className='flex justify-between w-full gap-1'>
                        <div className='flex items-center justify-between'>
                            <h4 className='text-base text-white cursor-pointer hover:underline'>Patrick Hendriks</h4>
                        </div>
                        <div className='flex items-center justify-between gap-6'>
                            <h6 className='text-2xl text-gray-300 cursor-pointer '>&times;</h6>
                            <FontAwesomeIcon className='text-base text-gray-300 cursor-pointer ' icon='check'/>
                        </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex items-center gap-4 p-2 rounded'>
                        <img src={avatar} className='avatar-chat' alt='avatar'></img>
                    <div className='flex justify-between w-full gap-1'>
                        <div className='flex items-center justify-between'>
                            <h4 className='text-base text-white cursor-pointer hover:underline'>Patrick Hendriks</h4>
                        </div>
                        <div className='flex items-center justify-between gap-6'>
                            <h6 className='text-2xl text-gray-300 cursor-pointer '>&times;</h6>
                            <FontAwesomeIcon className='text-base text-gray-300 cursor-pointer ' icon='check'/>
                        </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex items-center gap-4 p-2 rounded'>
                        <img src={avatar} className='avatar-chat' alt='avatar'></img>
                    <div className='flex justify-between w-full gap-1'>
                        <div className='flex items-center justify-between'>
                            <h4 className='text-base text-white cursor-pointer hover:underline'>Patrick Hendriks</h4>
                        </div>
                        <div className='flex items-center justify-between gap-6'>
                            <h6 className='text-2xl text-gray-300 cursor-pointer '>&times;</h6>
                            <FontAwesomeIcon className='text-base text-gray-300 cursor-pointer ' icon='check'/>
                        </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex items-center gap-4 p-2 rounded'>
                        <img src={avatar} className='avatar-chat' alt='avatar'></img>
                    <div className='flex justify-between w-full gap-1'>
                        <div className='flex items-center justify-between'>
                            <h4 className='text-base text-white cursor-pointer hover:underline'>Patrick Hendriks</h4>
                        </div>
                        <div className='flex items-center justify-between gap-6'>
                            <h6 className='text-2xl text-gray-300 cursor-pointer '>&times;</h6>
                            <FontAwesomeIcon className='text-base text-gray-300 cursor-pointer ' icon='check'/>
                        </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex items-center gap-4 p-2 rounded'>
                        <img src={avatar} className='avatar-chat' alt='avatar'></img>
                    <div className='flex justify-between w-full gap-1'>
                        <div className='flex items-center justify-between'>
                            <h4 className='text-base text-white cursor-pointer hover:underline'>Patrick Hendriks</h4>
                        </div>
                        <div className='flex items-center justify-between gap-6'>
                            <h6 className='text-2xl text-gray-300 cursor-pointer '>&times;</h6>
                            <FontAwesomeIcon className='text-base text-gray-300 cursor-pointer ' icon='check'/>
                        </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex items-center gap-4 p-2 rounded'>
                        <img src={avatar} className='avatar-chat' alt='avatar'></img>
                    <div className='flex justify-between w-full gap-1'>
                        <div className='flex items-center justify-between'>
                            <h4 className='text-base text-white cursor-pointer hover:underline'>Patrick Hendriks</h4>
                        </div>
                        <div className='flex items-center justify-between gap-6'>
                            <h6 className='text-2xl text-gray-300 cursor-pointer '>&times;</h6>
                            <FontAwesomeIcon className='text-base text-gray-300 cursor-pointer ' icon='check'/>
                        </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex items-center gap-4 p-2 rounded'>
                        <img src={avatar} className='avatar-chat' alt='avatar'></img>
                    <div className='flex justify-between w-full gap-1'>
                        <div className='flex items-center justify-between'>
                            <h4 className='text-base text-white cursor-pointer hover:underline'>Patrick Hendriks</h4>
                        </div>
                        <div className='flex items-center justify-between gap-6'>
                            <h6 className='text-2xl text-gray-300 cursor-pointer '>&times;</h6>
                            <FontAwesomeIcon className='text-base text-gray-300 cursor-pointer ' icon='check'/>
                        </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex items-center gap-4 p-2 rounded'>
                        <img src={avatar} className='avatar-chat' alt='avatar'></img>
                    <div className='flex justify-between w-full gap-1'>
                        <div className='flex items-center justify-between'>
                            <h4 className='text-base text-white cursor-pointer hover:underline'>Patrick Hendriks</h4>
                        </div>
                        <div className='flex items-center justify-between gap-6'>
                            <h6 className='text-2xl text-gray-300 cursor-pointer '>&times;</h6>
                            <FontAwesomeIcon className='text-base text-gray-300 cursor-pointer ' icon='check'/>
                        </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex items-center gap-4 p-2 rounded'>
                        <img src={avatar} className='avatar-chat' alt='avatar'></img>
                    <div className='flex justify-between w-full gap-1'>
                        <div className='flex items-center justify-between'>
                            <h4 className='text-base text-white cursor-pointer hover:underline'>Patrick Hendriks</h4>
                        </div>
                        <div className='flex items-center justify-between gap-6'>
                            <h6 className='text-2xl text-gray-300 cursor-pointer '>&times;</h6>
                            <FontAwesomeIcon className='text-base text-gray-300 cursor-pointer ' icon='check'/>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

  )
}