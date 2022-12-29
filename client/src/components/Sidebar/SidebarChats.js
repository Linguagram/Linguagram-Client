import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import avatar from '../../pictures/avatar-1.3921191a8acf79d3e907.jpg'

export default function SidebarChats() {
  return (
    <>
        <div className='text-white text-xl mb-8'>
          Chats
        </div>

        <div className='bg-gray search-chat-container rounded flex items-center'>
          <div className='w-1/6 flex justify-center'>
            <FontAwesomeIcon className='text-gray-400' icon='magnifying-glass'/>
          </div>
          <div className='w-5/6  flex justify-center'>
            <input className='bg-transparent text-white focus:border-none focus:outline-none' type='text' placeholder='Search messages or users'></input>
          </div>
        </div>

        <div className='flex flex-col my-10 gap-3 max-h-160 overflow-y-auto'>
          <div className='flex items-center hover:bg-gray-700 cursor-pointer rounded p-2 gap-4'>
            <img src={avatar} class='avatar-chat' alt='avatar'></img>
            <div className='flex flex-col w-full gap-1'>
              <div className='flex items-center justify-between'>
                <h4 className='text-white text-base'>Patrick Hendriks</h4>
                <h5 className='text-gray-300 text-sm'>02:50</h5>
              </div>
              <div className='flex items-center justify-between'>
                <h4 className='text-gray-400 text-sm'>okay sure</h4>
                <div className='bg-red-900-blur font-bold text-center rounded-full w-5 h-5 text-red-700 text-sm'>2</div>
              </div>
            </div>
          </div>
          <div className='flex items-center hover:bg-gray-700 cursor-pointer rounded p-2 gap-4'>
            <img src={avatar} class='avatar-chat' alt='avatar'></img>
            <div className='flex flex-col w-full gap-1'>
              <div className='flex items-center justify-between'>
                <h4 className='text-white text-base'>Patrick Hendriks</h4>
                <h5 className='text-gray-300 text-sm'>02:50</h5>
              </div>
              <div className='flex items-center justify-between'>
                <h4 className='text-gray-400 text-sm'>okay sure</h4>
                <div className='bg-red-900-blur font-bold text-center rounded-full w-5 h-5 text-red-700 text-sm'>2</div>
              </div>
            </div>
          </div>
          <div className='flex items-center hover:bg-gray-700 cursor-pointer rounded p-2 gap-4'>
            <img src={avatar} class='avatar-chat' alt='avatar'></img>
            <div className='flex flex-col w-full gap-1'>
              <div className='flex items-center justify-between'>
                <h4 className='text-white text-base'>Patrick Hendriks</h4>
                <h5 className='text-gray-300 text-sm'>02:50</h5>
              </div>
              <div className='flex items-center justify-between'>
                <h4 className='text-gray-400 text-sm'>okay sure</h4>
                <div className='bg-red-900-blur font-bold text-center rounded-full w-5 h-5 text-red-700 text-sm'>2</div>
              </div>
            </div>
          </div>
          <div className='flex items-center hover:bg-gray-700 cursor-pointer rounded p-2 gap-4'>
            <img src={avatar} class='avatar-chat' alt='avatar'></img>
            <div className='flex flex-col w-full gap-1'>
              <div className='flex items-center justify-between'>
                <h4 className='text-white text-base'>Patrick Hendriks</h4>
                <h5 className='text-gray-300 text-sm'>02:50</h5>
              </div>
              <div className='flex items-center justify-between'>
                <h4 className='text-gray-400 text-sm'>okay sure</h4>
                <div className='bg-red-900-blur font-bold text-center rounded-full w-5 h-5 text-red-700 text-sm'>2</div>
              </div>
            </div>
          </div>
          <div className='flex items-center hover:bg-gray-700 cursor-pointer rounded p-2 gap-4'>
            <img src={avatar} class='avatar-chat' alt='avatar'></img>
            <div className='flex flex-col w-full gap-1'>
              <div className='flex items-center justify-between'>
                <h4 className='text-white text-base'>Patrick Hendriks</h4>
                <h5 className='text-gray-300 text-sm'>02:50</h5>
              </div>
              <div className='flex items-center justify-between'>
                <h4 className='text-gray-400 text-sm'>okay sure</h4>
                <div className='bg-red-900-blur font-bold text-center rounded-full w-5 h-5 text-red-700 text-sm'>2</div>
              </div>
            </div>
          </div>
          <div className='flex items-center hover:bg-gray-700 cursor-pointer rounded p-2 gap-4'>
            <img src={avatar} class='avatar-chat' alt='avatar'></img>
            <div className='flex flex-col w-full gap-1'>
              <div className='flex items-center justify-between'>
                <h4 className='text-white text-base'>Patrick Hendriks</h4>
                <h5 className='text-gray-300 text-sm'>02:50</h5>
              </div>
              <div className='flex items-center justify-between'>
                <h4 className='text-gray-400 text-sm'>okay sure</h4>
                <div className='bg-red-900-blur font-bold text-center rounded-full w-5 h-5 text-red-700 text-sm'>2</div>
              </div>
            </div>
          </div>
          <div className='flex items-center hover:bg-gray-700 cursor-pointer rounded p-2 gap-4'>
            <img src={avatar} class='avatar-chat' alt='avatar'></img>
            <div className='flex flex-col w-full gap-1'>
              <div className='flex items-center justify-between'>
                <h4 className='text-white text-base'>Patrick Hendriks</h4>
                <h5 className='text-gray-300 text-sm'>02:50</h5>
              </div>
              <div className='flex items-center justify-between'>
                <h4 className='text-gray-400 text-sm'>okay sure</h4>
                <div className='bg-red-900-blur font-bold text-center rounded-full w-5 h-5 text-red-700 text-sm'>2</div>
              </div>
            </div>
          </div>
          <div className='flex items-center hover:bg-gray-700 cursor-pointer rounded p-2 gap-4'>
            <img src={avatar} class='avatar-chat' alt='avatar'></img>
            <div className='flex flex-col w-full gap-1'>
              <div className='flex items-center justify-between'>
                <h4 className='text-white text-base'>Patrick Hendriks</h4>
                <h5 className='text-gray-300 text-sm'>02:50</h5>
              </div>
              <div className='flex items-center justify-between'>
                <h4 className='text-gray-400 text-sm'>okay sure</h4>
                <div className='bg-red-900-blur font-bold text-center rounded-full w-5 h-5 text-red-700 text-sm'>2</div>
              </div>
            </div>
          </div>
          <div className='flex items-center hover:bg-gray-700 cursor-pointer rounded p-2 gap-4'>
            <img src={avatar} class='avatar-chat' alt='avatar'></img>
            <div className='flex flex-col w-full gap-1'>
              <div className='flex items-center justify-between'>
                <h4 className='text-white text-base'>Patrick Hendriks</h4>
                <h5 className='text-gray-300 text-sm'>02:50</h5>
              </div>
              <div className='flex items-center justify-between'>
                <h4 className='text-gray-400 text-sm'>okay sure</h4>
                <div className='bg-red-900-blur font-bold text-center rounded-full w-5 h-5 text-red-700 text-sm'>2</div>
              </div>
            </div>
          </div>
          <div className='flex items-center hover:bg-gray-700 cursor-pointer rounded p-2 gap-4'>
            <img src={avatar} class='avatar-chat' alt='avatar'></img>
            <div className='flex flex-col w-full gap-1'>
              <div className='flex items-center justify-between'>
                <h4 className='text-white text-base'>Patrick Hendriks</h4>
                <h5 className='text-gray-300 text-sm'>02:50</h5>
              </div>
              <div className='flex items-center justify-between'>
                <h4 className='text-gray-400 text-sm'>okay sure</h4>
                <div className='bg-red-900-blur font-bold text-center rounded-full w-5 h-5 text-red-700 text-sm'>2</div>
              </div>
            </div>
          </div>
        </div>
    </>

  )
}
