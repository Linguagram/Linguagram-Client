import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import avatar from '../../pictures/avatar-1.3921191a8acf79d3e907.jpg'

export default function ChatRoomHeader() {
  return (
    <div className='flex justify-between items-center height-header-footer p-5'>
        <div className='flex items-center gap-3'>
            <img src={avatar} class='avatar-chat' alt='avatar'></img>
            <div className='flex items-center gap-1'>
                <h4 className='text-white'>Doris Brown</h4>
                <FontAwesomeIcon className='status-icon' icon='circle-dot'/>
            </div>
        </div>
        <div className='flex justify-between w-60 items-center'>
            <FontAwesomeIcon className='text-gray-400 small-icons cursor-pointer' icon='magnifying-glass'/>
            <FontAwesomeIcon className='text-gray-400 small-icons cursor-pointer' icon='video'/>
            <FontAwesomeIcon className='text-gray-400 small-icons cursor-pointer' icon='user-large'/>
            <FontAwesomeIcon className='text-gray-400 small-icons cursor-pointer' icon='trash-can'/>
        </div>
    </div>
  )
}
