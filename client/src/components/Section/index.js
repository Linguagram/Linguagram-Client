import React from 'react'
import { useSelector } from 'react-redux'
import SectionProfile from './SectionProfile'
import SectionChats from './SectionChats'
import SectionGroups from './SectionGroups'
import SectionContacts from './SectionContacts'
import SectionSetting from './SectionSetting'

export default function Sidebar() {

  const sections = useSelector((state) => state.sectionReducer)

  return (
    <div className='flex flex-col w-3/5 h-screen py-5 lg:w-2/5 2xl:w-1/5 bg-darker-gray px-7'>
      {sections.user && 
        <SectionProfile/>
      }
      {sections.message && 
        <SectionChats/>
      }
      {sections.group && 
        <SectionGroups/>
      }
      {sections.address && 
        <SectionContacts/>
      }
      {sections.gear && 
        <SectionSetting/>
      }
    </div>
  )
}
