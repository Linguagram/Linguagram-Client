import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function ChatRoomFooter() {
  return (
    <div className='flex p-5 gap-5'>
        <div className='bg-gray w-11/12 search-chat-container rounded flex items-center p-3'>
            <input className='bg-transparent text-white text-sm focus:border-none focus:outline-none' type='text' placeholder='Enter A Message...'></input>
        </div>
        <div className='flex items-center justify-around w-1/12'>
            <FontAwesomeIcon className='text-gray-400 small-icons cursor-pointer' icon='paperclip'/>
            <div>
                <FontAwesomeIcon className='text-gray-400 small-icons cursor-pointer' icon='paper-plane'/>
            </div>
        </div>
    </div>
  )
}
