import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import avatar from '../../pictures/avatar-1.3921191a8acf79d3e907.jpg'

export default function ChatRoomHeader() {
  return (
    <div className='flex items-center justify-between p-5 height-header-footer'>
        <div className='flex items-center gap-3'>
            <img src={avatar} className='avatar-chat' alt='avatar'></img>
            <div className='flex items-center gap-1'>
                <h4 className='text-white'>Doris Brown</h4>
                <FontAwesomeIcon className='status-icon' icon='circle-dot'/>
            </div>
        </div>
        <div className='flex items-center justify-between w-60'>
            <FontAwesomeIcon className='text-gray-400 cursor-pointer small-icons' icon='magnifying-glass'/>
            <FontAwesomeIcon className='text-gray-400 cursor-pointer small-icons' icon='video'/>
            <FontAwesomeIcon className='text-gray-400 cursor-pointer small-icons' icon='user-large'/>
            <FontAwesomeIcon className='text-gray-400 cursor-pointer small-icons' icon='trash-can'/>
        </div>
    </div>
  )
}
