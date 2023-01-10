import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import ChatBubble from './ChatBubble'

export default function ChatRoomMessage() {
    const messageEndRef = useRef(null)
    const { currentMessages } = useSelector((state) => state.messageReducer);
    const [ currentMessagesLength, setCurrentMessagesLength ] = useState(0);
    // const { thisUser, counterpartUser } = useSelector((state) => state.userReducer);

    const scrollToBottom = () => {
        messageEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        if (currentMessagesLength !== currentMessages.length)
            setCurrentMessagesLength(currentMessages.length);
    }, [currentMessages])

    useEffect(() => {
        scrollToBottom()
    }, [currentMessagesLength]);

  return (
    <div className='flex flex-col flex-grow p-5 overflow-x-hidden overflow-y-auto'>
       
        {
            currentMessages.map(msg => {
                return (
                    <ChatBubble 
                        msg={msg}
                        key={msg.id}
                    />
                )
            })
        }

        <div ref={messageEndRef} />
    </div>
  )
}
