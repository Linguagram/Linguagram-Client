import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { setHomeDrawer } from "../../store/actions/actionCreator";

export default function HomeDrawer({ homeDrawer }) {
  const dispatch = useDispatch();
  const currentRoute = useLocation();

  return (
    <div
      className={`flex flex-1 md:hidden justify-start ease-in-out duration-500  ${
        homeDrawer ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="fixed flex flex-col flex-1 w-3/5 h-screen gap-4 p-4 bg-darker-gray z-100">
        <div className="flex justify-between mb-2">
          <div className="h-16">
            <img src="https://ik.imagekit.io/enybtlxa2/linguagram.-logo-only-cropped.png?ik-sdk-version=javascript-1.4.3&updatedAt=1673084814327" alt="linguagram-logo" className="h-full" />
          </div>
          <button onClick={() => dispatch(setHomeDrawer(false))}>
            <FontAwesomeIcon icon="xmark" className="text-2xl text-white" />
          </button>
        </div>
        <div className="flex flex-col gap-2 text-xl font-semibold text-white">
          <NavLink to={"/home/chats"} onClick={() => dispatch(setHomeDrawer(false))} className={`flex items-center gap-4 py-2 ${
            currentRoute.pathname === '/home/chats' ? 'bg-light-gray rounded text-main-color' : ''
          }`}>
            <FontAwesomeIcon
              className={`cursor-pointer w-1/3 ${
                currentRoute.pathname === '/home/chats' ? 'text-main-color' : 'text-gray-400'
              }`}
              icon="message"
            />
            <div>Chats</div>
          </NavLink>

          <NavLink to={"/home/friends"} onClick={() => dispatch(setHomeDrawer(false))} className={`flex items-center gap-4 py-2 ${
            currentRoute.pathname === '/home/friends' ? 'bg-light-gray rounded text-main-color' : ''
          }`}>
            <FontAwesomeIcon
              className={`cursor-pointer w-1/3 ${
                currentRoute.pathname === '/home/friends' ? 'text-main-color' : 'text-gray-400'
              }`}
              icon="address-card"
            />
            <div>Friends</div>
          </NavLink>

          <NavLink to={"/home/groups"} onClick={() => dispatch(setHomeDrawer(false))} className={`flex items-center gap-4 py-2 ${
            currentRoute.pathname === '/home/groups' ? 'bg-light-gray rounded text-main-color' : ''
          }`}>
            <FontAwesomeIcon
              className={`cursor-pointer w-1/3 ${
                currentRoute.pathname === '/home/groups' ? 'text-main-color' : 'text-gray-400'
              }`}
              icon="user-group"
            />
            <div>Groups</div>
          </NavLink>

          <NavLink to={"/home/setting"} onClick={() => dispatch(setHomeDrawer(false))} className={`flex items-center gap-4 py-2 ${
            currentRoute.pathname === '/home/setting' ? 'bg-light-gray rounded text-main-color' : ''
          }`}>
            <FontAwesomeIcon
              className={`cursor-pointer w-1/3 ${
                currentRoute.pathname === '/home/setting' ? 'text-main-color' : 'text-gray-400'
              }`}
              icon="user-large"
            />
            <div>Setting</div>
          </NavLink>

        </div>

        <div className="flex flex-col justify-end flex-grow gap-2 text-xl font-semibold text-white">
        <NavLink to={"/explore/people"} onClick={() => dispatch(setHomeDrawer(false))} className={`flex items-center gap-4 py-2 ${
            currentRoute.pathname.includes('explore') ? 'bg-light-gray rounded text-main-color' : ''
          }`}>
            <FontAwesomeIcon
              className={`cursor-pointer w-1/3 ${
                currentRoute.pathname.includes('explore') ? 'text-main-color' : 'text-gray-400'
              }`}
              icon="globe"
            />
            <div>Explore</div>
          </NavLink>

          <NavLink to={"/"} onClick={() => dispatch(setHomeDrawer(false))} className="flex items-center gap-4 py-2">
            <FontAwesomeIcon
              className="w-1/3 text-gray-400 cursor-pointer"
              icon="right-from-bracket"
            />
            <div>Log Out</div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
