import React, {useRef} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function ChatRoomFooter() {

  const messageInput = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(messageInput.current.value)
  }

  return (
    <form onSubmit={handleSubmit} className='flex justify-between gap-5 p-5'>
        <div className='flex items-center w-11/12 p-3 rounded 2xl:w-full bg-light-gray search-chat-container'>
            <input ref={messageInput} className='text-sm text-white bg-transparent focus:border-none focus:outline-none' type='text' placeholder='Type your message..'></input>
        </div>
        <div className='flex items-center justify-around w-1/12 gap-2 2xl:max-w-fit 2xl:gap-5'>
          <button type='button'>
            <FontAwesomeIcon className='text-gray-400 cursor-pointer small-icons' icon='paperclip'/>
          </button>
            <button type='submit'>
                <FontAwesomeIcon className='text-gray-400 cursor-pointer small-icons' icon='paper-plane'/>
            </button>
        </div>
    </form>
  )
}
