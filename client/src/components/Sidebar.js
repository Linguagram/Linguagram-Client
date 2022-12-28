import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Collapsible from 'react-collapsible';
import { useSelector } from 'react-redux'
import avatar from '../pictures/avatar-1.3921191a8acf79d3e907.jpg'

export default function Sidebar() {

  const sections = useSelector((state) => state.sectionReducer)

  return (
    <div className='sidebar px-7 py-5'>
      

        <div className='flex justify-between text-white mb-8'>
          <div className='text-white text-xl'>
            My Profile
          </div>
          <div>
            <FontAwesomeIcon icon='ellipsis-vertical'/>
          </div>
        </div>

        <div className='flex flex-col items-center gap-6'>
          <img src={avatar} id='avatar' alt='avatar'></img>
          <div className='flex flex-col items-center'>
            <div className='text-white'>
              Patricia Smith
            </div>
            <div className='flex items-center gap-2'>
              <FontAwesomeIcon className='status-icon text-success' icon='circle-dot'/>
              <div className='text-gray-400 text-sm'>Active</div>
            </div>
          </div>
        </div>

        <hr className='line-break mt-10 mb-5'/>

        <div className='text-gray-400 text-sm'>
          If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual.
        </div>

        <div className='mt-5 text-white text-sm'>

          <Collapsible className='w-full' 
            triggerClassName='triggerCollapsible' 
            triggerOpenedClassName='triggerCollapsible' 
            openedClassName='bg-black-blue'
            contentInnerClassName='p-3'  
            trigger={["About", <FontAwesomeIcon icon='caret-right'/>]}
          >
          <div className='flex flex-col p-2 gap-5'>

            <div className='flex flex-col gap-2'>
              <p className='text-gray-400'>Name</p>
              <p className='font-bold'>Patricia Smith</p>
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






    </div>
  )
}
