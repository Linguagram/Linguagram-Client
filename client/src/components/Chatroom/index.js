import React from 'react'
import ChatRoomHeader from './ChatRoomHeader'
import ChatRoomMessage from './ChatRoomMessage'
import ChatRoomFooter from './ChatRoomFooter'

export default function ChatRoom() {
  return (
    <div className='bg-black-blue w-full'>
        <ChatRoomHeader/>
        <hr className='border-gray-700'/>
        <ChatRoomMessage/>
        <hr className='border-gray-700'/>
        <ChatRoomFooter/>
    </div>
  )
}
