import React, {useEffect, useState} from 'react'
import { handleFetchGroups, handleFetchAllMessagesByGroupId } from '../../store/middlewares/thunk'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import avatar from '../../pictures/avatar-1.3921191a8acf79d3e907.jpg'
import { useSelector, useDispatch } from 'react-redux'

export default function SectionChats() {

  const [isMessagesReady, setIsMessagesReady] = useState(false)

  const dispatch = useDispatch()

  const {groups} = useSelector( (state) => {
    return state.groupReducer
  })

  const {messages} = useSelector( (state) => {
    return state.messageReducer
  })

  useEffect(() => {
    dispatch(handleFetchGroups())
  }, [])

  useEffect(() => {
    if(groups.length > 0) dispatch(handleFetchAllMessagesByGroupId(groups))
  }, [groups])

  useEffect(() => {
    console.log(messages)
    if(messages.length > 0) setIsMessagesReady(true)
  }, [messages])

  const renderMessages = (messages) => {
    return (
      messages.map(el => {
        return (
          <div key={el.id} className='flex items-center gap-4 p-2 rounded cursor-pointer hover:bg-gray-700'>
            <img src={avatar} className='avatar-chat' alt='avatar'></img>
            <div className='flex flex-col w-full gap-1'>
              <div className='flex items-center justify-between'>
                <h4 className='text-base text-white'>asd</h4>
                <h5 className='text-sm text-gray-300'>02:50</h5>
              </div>
              <div className='flex items-center justify-between'>
                <h4 className='text-sm text-gray-400'>okay sure</h4>
                <div className='w-5 h-5 text-sm font-bold text-center text-red-700 rounded-full bg-red-900-blur'>2</div>
              </div>
            </div>
          </div>
        )
      })
    )
  }

  return (
    <>
        <div className='mb-8 text-xl text-white'>
          Chats
        </div>

        <div className='flex items-center w-full rounded h-14 bg-light-gray lg:h-18'>
          <div className='flex items-center justify-center w-1/6'>
            <FontAwesomeIcon className='text-gray-400' icon='magnifying-glass'/>
          </div>
          <div className='flex w-5/6'>
            <input className='pr-4 text-white bg-transparent focus:border-none focus:outline-none' type='text' placeholder='Search messages or users'></input>
          </div>
        </div>

        <div className='flex flex-col h-full gap-3 mt-5 overflow-y-auto scrollbar-hide'>

          {
            messages.map(el => {
              return (
                <div key={el.id} className='flex items-center gap-4 p-2 rounded cursor-pointer hover:bg-gray-700'>
                  <img src={avatar} className='avatar-chat' alt='avatar'></img>
                  <div className='flex flex-col w-full gap-1'>
                    <div className='flex items-center justify-between'>
                      <h4 className='text-base text-white'>asd</h4>
                      <h5 className='text-sm text-gray-300'>02:50</h5>
                    </div>
                    <div className='flex items-center justify-between'>
                      <h4 className='text-sm text-gray-400'>okay sure</h4>
                      <div className='w-5 h-5 text-sm font-bold text-center text-red-700 rounded-full bg-red-900-blur'>2</div>
                    </div>
                  </div>
                </div>
              )
            })
          }

          
          
         
          <div className='flex items-center gap-4 p-2 rounded cursor-pointer hover:bg-gray-700'>
            <img src={avatar} className='avatar-chat' alt='avatar'></img>
            <div className='flex flex-col w-full gap-1'>
              <div className='flex items-center justify-between'>
                <h4 className='text-base text-white'>Patrick Hendriks</h4>
                <h5 className='text-sm text-gray-300'>02:50</h5>
              </div>
              <div className='flex items-center justify-between'>
                <h4 className='text-sm text-gray-400'>okay sure</h4>
                <div className='w-5 h-5 text-sm font-bold text-center text-red-700 rounded-full bg-red-900-blur'>2</div>
              </div>
            </div>
          </div>
        </div>
    </>

  )
}
