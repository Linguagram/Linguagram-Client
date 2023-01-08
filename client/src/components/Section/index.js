import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Section({ openChat }) {
  return (
    <div className={`${openChat ? "hidden md:flex" : "" } flex-col w-full h-screen py-5 md:w-3/5 flex lg:w-2/5 2xl:w-1/5 bg-darker-gray px-7`}>
      <Outlet />
    </div>
  )
}
