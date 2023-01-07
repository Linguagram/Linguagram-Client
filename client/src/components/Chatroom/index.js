import React from 'react'
import ChatRoomHeader from './ChatRoomHeader'
import ChatRoomMessage from './ChatRoomMessage'
import ChatRoomFooter from './ChatRoomFooter'
import { useSelector } from 'react-redux'

export default function ChatRoom() {
  const { openChat } = useSelector((state) => state.sectionReducer)

  return (
    <div className={`${openChat ? "flex" : "hidden" } flex-col w-full h-screen duration-500 ease-in-out md:flex bg-black-blue`}>
        <ChatRoomHeader/>
        <hr className='border-gray-700'/>
        <ChatRoomMessage/>
        <hr className='border-gray-700'/>
        <ChatRoomFooter/>
    </div>
  )
}
