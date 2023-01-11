import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import ChatBubble from './ChatBubble'

export default function ChatRoomMessage() {
    const messageEndRef = useRef(null)
    const { currentMessages } = useSelector((state) => state.messageReducer);
    const { counterpartUser } = useSelector((state) => state.userReducer);
    // const { thisUser } = useSelector((state) => state.userReducer);
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
            currentMessages.length == 0
            ?
                counterpartUser.username 
                ?
                    <div className='flex flex-col gap-5 h-full justify-center items-center'>
                        <p className='text-center text-white'>
                            This is the beginning of your conversation with {counterpartUser.username}...
                        </p>
                        <p className='text-center text-white'>
                            {counterpartUser.username} wants to learn {counterpartUser.UserLanguages.map(el => el.Language.name).join(', ')} and is interested about {counterpartUser.UserInterests.map(el => el.Interest.name).join(', ')}.
                        </p>
                    </div>
                :
                    <div className='flex h-full justify-center items-center text-white'>
                        There is only a cricket here...
                    </div>
            :
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
