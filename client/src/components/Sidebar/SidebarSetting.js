import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Collapsible from 'react-collapsible';
import avatar from '../../pictures/avatar-1.3921191a8acf79d3e907.jpg'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function SidebarSetting() {
  return (
    <>
        <div className='flex justify-between text-white mb-8'>
            <div className='text-white text-xl'>
                Settings
            </div>
        </div>

        <div className='flex flex-col items-center gap-6'>
            <div className='flex items-end'>
                <img src={avatar} id='avatar-profile' alt='avatar'></img>
                <div id='edit-avatar' className='bg-gray-700 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'><FontAwesomeIcon className='text-white' icon='pen'/></div>
            </div>
            <div className='flex flex-col items-center'>
                <div className='text-white'>
                    Patricia Smith
                </div>
                   
                <Menu as="div" className="relative inline-block text-left">
                    <div>
                        <Menu.Button className="inline-flex w-full justify-center rounded-md  bg-transparent px-4 py-2 text-sm font-medium text-gray-300  focus:outline-none ">
                            Available
                        <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                        </Menu.Button>
                    </div>

                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1 bg-darker-gray">
                            <Menu.Item>
                            {({ active }) => (
                                <a
                                href="#"
                                className={classNames(
                                    active ? 'bg-gray text-gray-300' : 'text-gray-400',
                                    'block px-4 py-2 text-sm'
                                )}
                                >
                                Available
                                </a>
                            )}
                            </Menu.Item>
                            <Menu.Item>
                            {({ active }) => (
                                <a
                                href="#"
                                className={classNames(
                                    active ? 'bg-gray text-gray-300' : 'text-gray-400',
                                    'block px-4 py-2 text-sm'
                                )}
                                >
                                Busy
                                </a>
                            )}
                            </Menu.Item>
                            <Menu.Item>
                            {({ active }) => (
                                <a
                                href="#"
                                className={classNames(
                                    active ? 'bg-gray text-gray-300' : 'text-gray-400',
                                    'block px-4 py-2 text-sm'
                                )}
                                >
                                Do not disturb
                                </a>
                            )}
                            </Menu.Item>
                            <form method="POST" action="#">
                            <Menu.Item>
                                {({ active }) => (
                                <button
                                    type="submit"
                                    className={classNames(
                                    active ? 'bg-gray text-gray-300' : 'text-gray-400',
                                    'block w-full px-4 py-2 text-left text-sm'
                                    )}
                                >
                                    Idle
                                </button>
                                )}
                            </Menu.Item>
                            </form>
                        </div>
                        </Menu.Items>
                    </Transition>
                    </Menu>               

            </div>
        </div>

        <hr className='line-break mt-10 mb-5'/>

        <div className='mt-7 text-white text-sm'>
        <Collapsible className='w-full' 
          triggerClassName='triggerCollapsible' 
          triggerOpenedClassName='triggerCollapsible' 
          openedClassName='bg-black-blue'
          contentInnerClassName='p-3'  
          trigger={["Personal Info", <FontAwesomeIcon icon='caret-right'/>]}
        >
        <div className='flex flex-col p-2 gap-5'>

          <div className='flex justify-between'>
            <div className='flex flex-col gap-2'>
                <p className='text-gray-400'>Name</p>
                <p className='font-bold'>Patricia Smith</p>
            </div>
            <div className='flex bg-gray h-min p-2 rounded items-center gap-2'>
                <FontAwesomeIcon icon='pen-to-square'/>
                <h4>Edit</h4>
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            <p className='text-gray-400'>Email</p>
            <p className='font-bold'>patty@mail.com</p>
          </div>
          <div className='flex flex-col gap-2'>
            <p className='text-gray-400'>Native Language</p>
            <p className='font-bold'>English</p>
          </div>
          <div className='flex flex-col gap-2'>
            <p className='text-gray-400'>Country</p>
            <p className='font-bold'>USA</p>
          </div>

        </div>
        </Collapsible>
      </div> 

    </>
  )
}
