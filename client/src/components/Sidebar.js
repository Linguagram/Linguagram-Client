import React from 'react'
import { useSelector } from 'react-redux'
import SidebarProfile from './SidebarProfile'
import SidebarChats from './SidebarChats'
import SidebarGroups from './SidebarGroups'
import SidebarContacts from './SidebarContacts'
import SidebarSetting from './SidebarSetting'

export default function Sidebar() {

  const sections = useSelector((state) => state.sectionReducer)

  return (
    <div className='sidebar px-7 py-5 max-h-screen'>
      {sections.user && 
        <SidebarProfile/>
      }
      {sections.message && 
        <SidebarChats/>
      }
      {sections.group && 
        <SidebarGroups/>
      }
      {sections.address && 
        <SidebarContacts/>
      }
      {sections.gear && 
        <SidebarSetting/>
      }
    </div>
  )
}
