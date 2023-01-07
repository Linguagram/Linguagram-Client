import React from 'react'
import SectionProfile from './SectionProfile'
import SectionChats from './SectionChats'
import SectionGroups from './SectionGroups'
import SectionFriends from './SectionFriends'
import SectionSetting from './SectionSetting'

export default function Section({ sections }) {
  return (
    <div className='flex-col w-full h-screen py-5 md:w-3/5 md:flex lg:w-2/5 2xl:w-1/5 bg-darker-gray px-7'>
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
        <SectionFriends/>
      }
      {sections.gear && 
        <SectionSetting/>
      }
    </div>
  )
}
