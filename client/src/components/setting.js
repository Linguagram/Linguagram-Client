import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { handleSetActiveSection } from '../store/middlewares/thunk'

export default function Setting() {

  const dispatch = useDispatch()

  const sections = useSelector((state) => state.sectionReducer)

  const changeSection = (section) => {
    dispatch(handleSetActiveSection(section))
  }



  return (
    <div className='flex flex-col items-center py-5 justify-between side-menu h-screen'>
        <div>
          <FontAwesomeIcon className='medium-icons main-color' icon="comment-dots" />
        </div>
        <div className='flex flex-col gap-3'>
            <div className={`icons-container flex justify-center items-center rounded ${sections.user?'icons-container-active':''}`}>
                <FontAwesomeIcon onClick={()=>changeSection('user')} className={`medium-smaller-icons setting-icons cursor-pointer ${sections.user?'main-color':'text-gray-400'}`} icon="user-large" />
            </div>
            <div className={`icons-container flex justify-center items-center rounded ${sections.message?'icons-container-active':''}`}>
                <FontAwesomeIcon onClick={()=>changeSection('message')} className={`medium-smaller-icons setting-icons cursor-pointer ${sections.message?'main-color':'text-gray-400'}`} icon="message" />
            </div>
            <div className={`icons-container flex justify-center items-center rounded ${sections.group?'icons-container-active':''}`}>
                <FontAwesomeIcon onClick={()=>changeSection('group')}className={`medium-smaller-icons setting-icons cursor-pointer ${sections.group?'main-color':'text-gray-400'}`} icon="user-group" />
            </div>
            <div className={`icons-container flex justify-center items-center rounded ${sections.address?'icons-container-active':''}`}>
                <FontAwesomeIcon onClick={()=>changeSection('address')}className={`medium-smaller-icons setting-icons cursor-pointer ${sections.address?'main-color':'text-gray-400'}`} icon="address-card" />
            </div>
            <div className={`icons-container flex justify-center items-center rounded ${sections.gear?'icons-container-active':''}`}>
                <FontAwesomeIcon onClick={()=>changeSection('gear')}className={`medium-smaller-icons setting-icons cursor-pointer ${sections.gear?'main-color':'text-gray-400'}`} icon="gear" />
            </div>
        </div>
        <div className='flex flex-col gap-3'>
            <div className='icons-container flex justify-center items-center rounded'>
                <FontAwesomeIcon onClick={changeSection} className='medium-smaller-icons text-gray-400 setting-icons cursor-pointer' icon="globe" />
            </div>
            <div className='icons-container flex justify-center items-center rounded'>
                <FontAwesomeIcon onClick={changeSection} className='medium-smaller-icons text-gray-400 setting-icons cursor-pointer' icon="sun" />
            </div>
            <div className='icons-container flex justify-center items-center rounded'>
                <FontAwesomeIcon onClick={changeSection} className='medium-smaller-icons text-gray-400 setting-icons cursor-pointer' icon="circle" />
            </div>
        </div>
    </div>
  )
}
