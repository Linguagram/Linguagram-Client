import React from 'react'
import ChatRoomHeader from './ChatRoomHeader'
import ChatRoomMessage from './ChatRoomMessage'
import ChatRoomFooter from './ChatRoomFooter'

export default function ChatRoom() {
  return (
    <div className='flex flex-col w-full h-screen bg-black-blue'>
        <ChatRoomHeader/>
        <hr className='border-gray-700'/>
        <ChatRoomMessage/>
        <hr className='border-gray-700'/>
        <ChatRoomFooter/>
    </div>
  )
}
