import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'

export default function SidebarContacts() {
  return (
    <>
        <div className='flex items-center justify-between  text-xl mb-8'>
          <h4 className='text-white'>Contacts</h4>
          <FontAwesomeIcon className='text-gray-400 small-icons cursor-pointer' icon='bell'/>
        </div>

        <div className='bg-gray search-chat-container rounded flex items-center'>
          <div className='w-1/6 flex justify-center'>
            <FontAwesomeIcon className='text-gray-400' icon='magnifying-glass'/>
          </div>
          <div className='w-5/6  flex justify-center'>
            <input className='bg-transparent text-white focus:border-none focus:outline-none' type='text' placeholder='Search users...'></input>
          </div>
        </div>

        <div className='mt-16 ml-3 flex flex-col gap-10 max-h-160 overflow-y-auto'>
           
            <div className='flex flex-col'>
                <div className='main-color'>A</div>
                <div className='flex flex-col gap-5 pl-2 pt-5 pr-5'>    
                    <div className='flex justify-between'>
                        <h5 className='text-white cursor-pointer'>Albert Rodarte</h5>
                        <FontAwesomeIcon className='text-gray-400 cursor-pointer' icon='trash-can'/>
                    </div>
                    <div className='flex justify-between'>
                        <h5 className='text-white cursor-pointer'>Albert Rodarte</h5>
                        <FontAwesomeIcon className='text-gray-400 cursor-pointer' icon='trash-can'/>
                    </div>
                </div>
            </div>
            <div className='flex flex-col'>
                <div className='main-color'>A</div>
                <div className='flex flex-col gap-5 pl-2 pt-5 pr-5'>    
                    <div className='flex justify-between'>
                        <h5 className='text-white cursor-pointer'>Albert Rodarte</h5>
                        <FontAwesomeIcon className='text-gray-400 cursor-pointer' icon='trash-can'/>
                    </div>
                    <div className='flex justify-between'>
                        <h5 className='text-white cursor-pointer'>Albert Rodarte</h5>
                        <FontAwesomeIcon className='text-gray-400 cursor-pointer' icon='trash-can'/>
                    </div>
                </div>
            </div>
            <div className='flex flex-col'>
                <div className='main-color'>A</div>
                <div className='flex flex-col gap-5 pl-2 pt-5 pr-5'>    
                    <div className='flex justify-between'>
                        <h5 className='text-white cursor-pointer'>Albert Rodarte</h5>
                        <FontAwesomeIcon className='text-gray-400 cursor-pointer' icon='trash-can'/>
                    </div>
                    <div className='flex justify-between'>
                        <h5 className='text-white cursor-pointer'>Albert Rodarte</h5>
                        <FontAwesomeIcon className='text-gray-400 cursor-pointer' icon='trash-can'/>
                    </div>
                </div>
            </div>
            <div className='flex flex-col'>
                <div className='main-color'>A</div>
                <div className='flex flex-col gap-5 pl-2 pt-5 pr-5'>    
                    <div className='flex justify-between'>
                        <h5 className='text-white cursor-pointer'>Albert Rodarte</h5>
                        <FontAwesomeIcon className='text-gray-400 cursor-pointer' icon='trash-can'/>
                    </div>
                    <div className='flex justify-between'>
                        <h5 className='text-white cursor-pointer'>Albert Rodarte</h5>
                        <FontAwesomeIcon className='text-gray-400 cursor-pointer' icon='trash-can'/>
                    </div>
                </div>
            </div>
            <div className='flex flex-col'>
                <div className='main-color'>A</div>
                <div className='flex flex-col gap-5 pl-2 pt-5 pr-5'>    
                    <div className='flex justify-between'>
                        <h5 className='text-white cursor-pointer'>Albert Rodarte</h5>
                        <FontAwesomeIcon className='text-gray-400 cursor-pointer' icon='trash-can'/>
                    </div>
                    <div className='flex justify-between'>
                        <h5 className='text-white cursor-pointer'>Albert Rodarte</h5>
                        <FontAwesomeIcon className='text-gray-400 cursor-pointer' icon='trash-can'/>
                    </div>
                </div>
            </div>
            <div className='flex flex-col'>
                <div className='main-color'>A</div>
                <div className='flex flex-col gap-5 pl-2 pt-5 pr-5'>    
                    <div className='flex justify-between'>
                        <h5 className='text-white cursor-pointer'>Albert Rodarte</h5>
                        <FontAwesomeIcon className='text-gray-400 cursor-pointer' icon='trash-can'/>
                    </div>
                    <div className='flex justify-between'>
                        <h5 className='text-white cursor-pointer'>Albert Rodarte</h5>
                        <FontAwesomeIcon className='text-gray-400 cursor-pointer' icon='trash-can'/>
                    </div>
                </div>
            </div>
            <div className='flex flex-col'>
                <div className='main-color'>A</div>
                <div className='flex flex-col gap-5 pl-2 pt-5 pr-5'>    
                    <div className='flex justify-between'>
                        <h5 className='text-white cursor-pointer'>Albert Rodarte</h5>
                        <FontAwesomeIcon className='text-gray-400 cursor-pointer' icon='trash-can'/>
                    </div>
                    <div className='flex justify-between'>
                        <h5 className='text-white cursor-pointer'>Albert Rodarte</h5>
                        <FontAwesomeIcon className='text-gray-400 cursor-pointer' icon='trash-can'/>
                    </div>
                </div>
            </div>
           
        </div>
    </>
  )
}
