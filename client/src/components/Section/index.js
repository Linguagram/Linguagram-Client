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
    <div className='sidebar px-7 py-5 max-h-screen'>
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
