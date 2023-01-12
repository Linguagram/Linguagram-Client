import React from 'react'
import ChatRoomHeader from './ChatRoomHeader'
import ChatRoomMessage from './ChatRoomMessage'
import ChatRoomFooter from './ChatRoomFooter'
import { useSelector } from 'react-redux'
import doodlebg from '../../pictures/doodle2.png'

export default function ChatRoom() {
  const { openChat } = useSelector((state) => state.sectionReducer)
  const { counterpartUser } = useSelector((state) => state.userReducer);


  return (
    <div className={`${openChat ? "flex" : "hidden" } flex-col w-full h-screen duration-500 ease-in-out md:flex bg-black-blue`}>
      {
        Object.keys(counterpartUser).length === 0
        ?
          <img className='' src={doodlebg}></img>
        :
          <>
            <ChatRoomHeader/>
            <hr className='border-gray-700'/>
            <ChatRoomMessage/>
            <hr className='border-gray-700'/>
            <ChatRoomFooter/>
          </>
      } 
    </div>
  )
}
