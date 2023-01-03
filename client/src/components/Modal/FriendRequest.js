import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import avatar from '../../pictures/avatar-1.3921191a8acf79d3e907.jpg'

export default function FriendRequest({onClose, visible}) {

  const handleOnClose = () => {
    onClose()
  }

  if(!visible) return null;

  return (
    <div className='fixed z-10 flex justify-center items-center bg-black bg-opacity-60 inset-0'>

        <div className='bg-darker-gray w-1/4 h-3/4 rounded p-5'>
            <div className='flex items-center justify-between'>
                <h3 className='text-white text-xl'>Friend Requests</h3>
                <h3 onClick={handleOnClose} className='text-gray-400 text-4xl cursor-pointer'>&times;</h3>
            </div>
            <div className='flex flex-col max-h-140 overflow-y-auto  mt-10 gap-5'>
                <div>
                    <div className='flex items-center rounded p-2 gap-4'>
                        <img src={avatar} class='avatar-chat' alt='avatar'></img>
                    <div className='flex justify-between w-full gap-1'>
                        <div className='flex items-center justify-between'>
                            <h4 className='text-white text-base hover:underline cursor-pointer'>Patrick Hendriks</h4>
                        </div>
                        <div className='flex items-center gap-6 justify-between'>
                            <h6 className='text-gray-300 text-2xl cursor-pointer '>&times;</h6>
                            <FontAwesomeIcon className='text-gray-300 text-base cursor-pointer ' icon='check'/>
                        </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex items-center rounded p-2 gap-4'>
                        <img src={avatar} class='avatar-chat' alt='avatar'></img>
                    <div className='flex justify-between w-full gap-1'>
                        <div className='flex items-center justify-between'>
                            <h4 className='text-white text-base hover:underline cursor-pointer'>Patrick Hendriks</h4>
                        </div>
                        <div className='flex items-center gap-6 justify-between'>
                            <h6 className='text-gray-300 text-2xl cursor-pointer '>&times;</h6>
                            <FontAwesomeIcon className='text-gray-300 text-base cursor-pointer ' icon='check'/>
                        </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex items-center rounded p-2 gap-4'>
                        <img src={avatar} class='avatar-chat' alt='avatar'></img>
                    <div className='flex justify-between w-full gap-1'>
                        <div className='flex items-center justify-between'>
                            <h4 className='text-white text-base hover:underline cursor-pointer'>Patrick Hendriks</h4>
                        </div>
                        <div className='flex items-center gap-6 justify-between'>
                            <h6 className='text-gray-300 text-2xl cursor-pointer '>&times;</h6>
                            <FontAwesomeIcon className='text-gray-300 text-base cursor-pointer ' icon='check'/>
                        </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex items-center rounded p-2 gap-4'>
                        <img src={avatar} class='avatar-chat' alt='avatar'></img>
                    <div className='flex justify-between w-full gap-1'>
                        <div className='flex items-center justify-between'>
                            <h4 className='text-white text-base hover:underline cursor-pointer'>Patrick Hendriks</h4>
                        </div>
                        <div className='flex items-center gap-6 justify-between'>
                            <h6 className='text-gray-300 text-2xl cursor-pointer '>&times;</h6>
                            <FontAwesomeIcon className='text-gray-300 text-base cursor-pointer ' icon='check'/>
                        </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex items-center rounded p-2 gap-4'>
                        <img src={avatar} class='avatar-chat' alt='avatar'></img>
                    <div className='flex justify-between w-full gap-1'>
                        <div className='flex items-center justify-between'>
                            <h4 className='text-white text-base hover:underline cursor-pointer'>Patrick Hendriks</h4>
                        </div>
                        <div className='flex items-center gap-6 justify-between'>
                            <h6 className='text-gray-300 text-2xl cursor-pointer '>&times;</h6>
                            <FontAwesomeIcon className='text-gray-300 text-base cursor-pointer ' icon='check'/>
                        </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex items-center rounded p-2 gap-4'>
                        <img src={avatar} class='avatar-chat' alt='avatar'></img>
                    <div className='flex justify-between w-full gap-1'>
                        <div className='flex items-center justify-between'>
                            <h4 className='text-white text-base hover:underline cursor-pointer'>Patrick Hendriks</h4>
                        </div>
                        <div className='flex items-center gap-6 justify-between'>
                            <h6 className='text-gray-300 text-2xl cursor-pointer '>&times;</h6>
                            <FontAwesomeIcon className='text-gray-300 text-base cursor-pointer ' icon='check'/>
                        </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex items-center rounded p-2 gap-4'>
                        <img src={avatar} class='avatar-chat' alt='avatar'></img>
                    <div className='flex justify-between w-full gap-1'>
                        <div className='flex items-center justify-between'>
                            <h4 className='text-white text-base hover:underline cursor-pointer'>Patrick Hendriks</h4>
                        </div>
                        <div className='flex items-center gap-6 justify-between'>
                            <h6 className='text-gray-300 text-2xl cursor-pointer '>&times;</h6>
                            <FontAwesomeIcon className='text-gray-300 text-base cursor-pointer ' icon='check'/>
                        </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex items-center rounded p-2 gap-4'>
                        <img src={avatar} class='avatar-chat' alt='avatar'></img>
                    <div className='flex justify-between w-full gap-1'>
                        <div className='flex items-center justify-between'>
                            <h4 className='text-white text-base hover:underline cursor-pointer'>Patrick Hendriks</h4>
                        </div>
                        <div className='flex items-center gap-6 justify-between'>
                            <h6 className='text-gray-300 text-2xl cursor-pointer '>&times;</h6>
                            <FontAwesomeIcon className='text-gray-300 text-base cursor-pointer ' icon='check'/>
                        </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex items-center rounded p-2 gap-4'>
                        <img src={avatar} class='avatar-chat' alt='avatar'></img>
                    <div className='flex justify-between w-full gap-1'>
                        <div className='flex items-center justify-between'>
                            <h4 className='text-white text-base hover:underline cursor-pointer'>Patrick Hendriks</h4>
                        </div>
                        <div className='flex items-center gap-6 justify-between'>
                            <h6 className='text-gray-300 text-2xl cursor-pointer '>&times;</h6>
                            <FontAwesomeIcon className='text-gray-300 text-base cursor-pointer ' icon='check'/>
                        </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex items-center rounded p-2 gap-4'>
                        <img src={avatar} class='avatar-chat' alt='avatar'></img>
                    <div className='flex justify-between w-full gap-1'>
                        <div className='flex items-center justify-between'>
                            <h4 className='text-white text-base hover:underline cursor-pointer'>Patrick Hendriks</h4>
                        </div>
                        <div className='flex items-center gap-6 justify-between'>
                            <h6 className='text-gray-300 text-2xl cursor-pointer '>&times;</h6>
                            <FontAwesomeIcon className='text-gray-300 text-base cursor-pointer ' icon='check'/>
                        </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex items-center rounded p-2 gap-4'>
                        <img src={avatar} class='avatar-chat' alt='avatar'></img>
                    <div className='flex justify-between w-full gap-1'>
                        <div className='flex items-center justify-between'>
                            <h4 className='text-white text-base hover:underline cursor-pointer'>Patrick Hendriks</h4>
                        </div>
                        <div className='flex items-center gap-6 justify-between'>
                            <h6 className='text-gray-300 text-2xl cursor-pointer '>&times;</h6>
                            <FontAwesomeIcon className='text-gray-300 text-base cursor-pointer ' icon='check'/>
                        </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex items-center rounded p-2 gap-4'>
                        <img src={avatar} class='avatar-chat' alt='avatar'></img>
                    <div className='flex justify-between w-full gap-1'>
                        <div className='flex items-center justify-between'>
                            <h4 className='text-white text-base hover:underline cursor-pointer'>Patrick Hendriks</h4>
                        </div>
                        <div className='flex items-center gap-6 justify-between'>
                            <h6 className='text-gray-300 text-2xl cursor-pointer '>&times;</h6>
                            <FontAwesomeIcon className='text-gray-300 text-base cursor-pointer ' icon='check'/>
                        </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex items-center rounded p-2 gap-4'>
                        <img src={avatar} class='avatar-chat' alt='avatar'></img>
                    <div className='flex justify-between w-full gap-1'>
                        <div className='flex items-center justify-between'>
                            <h4 className='text-white text-base hover:underline cursor-pointer'>Patrick Hendriks</h4>
                        </div>
                        <div className='flex items-center gap-6 justify-between'>
                            <h6 className='text-gray-300 text-2xl cursor-pointer '>&times;</h6>
                            <FontAwesomeIcon className='text-gray-300 text-base cursor-pointer ' icon='check'/>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

  )
}