import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { handleSetActiveSection } from '../../store/middlewares/thunk'
import { Link, useNavigate, useLocation } from 'react-router-dom'

export default function Sidebar() {
    
    const {pathname} = useLocation()

    const currentPath = pathname.slice(6, pathname.length)

  return (
    <div className='flex flex-col items-center justify-between w-10 h-screen py-5 bg-light-gray'>
        <div>
          <FontAwesomeIcon className='w-full text-main-color' icon="comment-dots" />
        </div>
        <div className='flex flex-col gap-1'>
            <div className={`icons-container flex justify-center items-center rounded ${currentPath === 'chats' ?'icons-container-active':''}`}>
                <Link to="chats"><FontAwesomeIcon  className={`w-full cursor-pointer ${currentPath === 'chats' ?'text-main-color':'text-gray-400'}`} icon="message" /></Link> 
            </div>
            <div className={`icons-container flex justify-center items-center rounded ${currentPath === 'groups' ?'icons-container-active':''}`}>
                <Link to="groups"><FontAwesomeIcon className={`w-full cursor-pointer ${currentPath === 'groups' ?'text-main-color':'text-gray-400'}`} icon="user-group" /></Link> 
            </div>
            <div className={`icons-container flex justify-center items-center rounded ${currentPath === 'contacts' ?'icons-container-active':''}`}>
                <Link to="contacts"><FontAwesomeIcon className={`w-full cursor-pointer ${currentPath === 'contacts' ?'text-main-color':'text-gray-400'}`} icon="address-card" /></Link> 
            </div>
            <div className={`icons-container flex justify-center items-center rounded ${currentPath === 'setting' ?'icons-container-active':''}`}>
                <Link to="setting"><FontAwesomeIcon className={`w-full cursor-pointer ${currentPath === 'setting' ?'text-main-color':'text-gray-400'}`} icon="gear" /></Link> 
            </div>
        </div>
        <div className='flex flex-col gap-1'>
            <div className='flex items-center justify-center rounded icons-container'>
                <FontAwesomeIcon className='w-full text-gray-400 cursor-pointer' icon="globe" />
            </div>
            <div className='flex items-center justify-center rounded icons-container'>
                <FontAwesomeIcon className='w-full text-gray-400 cursor-pointer' icon="sun" />
            </div>
            <div className='flex items-center justify-center rounded icons-container'>
                <FontAwesomeIcon className='w-full text-gray-400 cursor-pointer' icon="circle" />
            </div>
        </div>
    </div>
  )
}
