import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function HomeDrawer({ drawer, toggleDrawer }) {
  

  return (
    <div className={`flex flex-1 md:hidden justify-start ease-in-out duration-500  ${drawer ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="fixed flex flex-col flex-1 w-3/5 h-screen gap-4 p-4 bg-darker-gray z-100">
          <div className="flex justify-end mb-2">
          <button onClick={toggleDrawer}>
            <FontAwesomeIcon icon="xmark" className="text-2xl text-white" />
          </button>
          </div>
          <div className="flex flex-col gap-2 text-xl font-bold text-white">
            <div className="py-2 border-b border-white-500">
              <NavLink to={"/register"}>Register</NavLink>
            </div>
            <div className="py-2 border-b border-white-500">
            <NavLink to={"/login"}>Login</NavLink>
            </div>
          </div>{" "}
        </div>
      </div>
  )
}