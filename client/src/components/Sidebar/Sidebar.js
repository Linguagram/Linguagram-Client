import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { handleSetActiveSection } from '../../store/middlewares/thunk'

export default function Sidebar() {

  const dispatch = useDispatch()

  const sections = useSelector((state) => state.sectionReducer)

  const changeSection = (section) => {
    dispatch(handleSetActiveSection(section))
  }



  return (
    <div className='flex flex-col items-center justify-between w-10 h-screen py-5 bg-light-gray'>
        <div>
          <FontAwesomeIcon className='w-full text-main-color' icon="comment-dots" />
        </div>
        <div className='flex flex-col gap-1'>
            <div className={`icons-container flex justify-center items-center rounded ${sections.user?'icons-container-active':''}`}>
                <FontAwesomeIcon onClick={()=>changeSection('user')} className={`w-full cursor-pointer ${sections.user?'text-main-color':'text-gray-400'}`} icon="user-large" />
            </div>
            <div className={`icons-container flex justify-center items-center rounded ${sections.message?'icons-container-active':''}`}>
                <FontAwesomeIcon onClick={()=>changeSection('message')} className={`w-full cursor-pointer ${sections.message?'text-main-color':'text-gray-400'}`} icon="message" />
            </div>
            <div className={`icons-container flex justify-center items-center rounded ${sections.group?'icons-container-active':''}`}>
                <FontAwesomeIcon onClick={()=>changeSection('group')}className={`w-full cursor-pointer ${sections.group?'text-main-color':'text-gray-400'}`} icon="user-group" />
            </div>
            <div className={`icons-container flex justify-center items-center rounded ${sections.address?'icons-container-active':''}`}>
                <FontAwesomeIcon onClick={()=>changeSection('address')}className={`w-full cursor-pointer ${sections.address?'text-main-color':'text-gray-400'}`} icon="address-card" />
            </div>
            <div className={`icons-container flex justify-center items-center rounded ${sections.gear?'icons-container-active':''}`}>
                <FontAwesomeIcon onClick={()=>changeSection('gear')}className={`w-full cursor-pointer ${sections.gear?'text-main-color':'text-gray-400'}`} icon="gear" />
            </div>
        </div>
        <div className='flex flex-col gap-1'>
            <div className='flex items-center justify-center rounded icons-container'>
                <FontAwesomeIcon onClick={changeSection} className='w-full text-gray-400 cursor-pointer' icon="globe" />
            </div>
            <div className='flex items-center justify-center rounded icons-container'>
                <FontAwesomeIcon onClick={changeSection} className='w-full text-gray-400 cursor-pointer' icon="sun" />
            </div>
            <div className='flex items-center justify-center rounded icons-container'>
                <FontAwesomeIcon onClick={changeSection} className='w-full text-gray-400 cursor-pointer' icon="circle" />
            </div>
        </div>
    </div>
  )
}
