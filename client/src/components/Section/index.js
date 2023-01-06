import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import SectionProfile from './SectionProfile'
import SectionChats from './SectionChats'
import SectionGroups from './SectionGroups'
import SectionFriends from './SectionFriends'
import SectionSetting from './SectionSetting'

export default function Sidebar() {

  const {pathname} = useLocation()

  const currentPath = pathname.slice(6, pathname.length)

  return (
    <div className='flex flex-col w-3/5 h-screen py-5 lg:w-2/5 2xl:w-1/5 bg-darker-gray px-7'>
      {(currentPath === 'chats') && 
        <SectionChats/>
      }
      {currentPath === 'groups' && 
        <SectionGroups/>
      }
      {currentPath === 'contacts' && 
        <SectionFriends/>
      }
      {currentPath === 'setting' && 
        <SectionSetting/>
      }
    </div>
  )
}
