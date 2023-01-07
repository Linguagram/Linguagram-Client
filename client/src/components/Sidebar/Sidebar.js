import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation, useNavigate } from "react-router-dom";

export default function Sidebar() {
  const currentRoute = useLocation()
  const navigate = useNavigate()

  return (
    <div className="flex-col items-center justify-between hidden h-screen py-5 md:flex w-18 bg-light-gray">
      <div>
        <FontAwesomeIcon
            onClick={() => navigate('/home/chats')}
          className="w-full text-main-color"
          icon="comment-dots"
        />
      </div>
      <div className="flex flex-col gap-1">
        <div
          className={`icons-container flex justify-center items-center rounded ${
           currentRoute.pathname.includes('/home/chats') ? "icons-container-active" : ""
          }`}
        >
          <FontAwesomeIcon
            onClick={() => navigate('/home/chats')}
            className={`w-full cursor-pointer ${
              currentRoute.pathname.includes('/home/chats') ? "text-main-color" : "text-gray-400"
            }`}
            icon="message"
          />
        </div>
        <div
          className={`icons-container flex justify-center items-center rounded ${
            currentRoute.pathname.includes('/home/friends') ? "icons-container-active" : ""
          }`}
        >
          <FontAwesomeIcon
            onClick={() => navigate('/home/friends')}
            className={`w-full cursor-pointer ${
              currentRoute.pathname.includes('/home/friends') ? "text-main-color" : "text-gray-400"
            }`}
            icon="address-card"
          />
        </div>
        <div
          className={`icons-container flex justify-center items-center rounded ${
            currentRoute.pathname.includes('/home/groups') ? "icons-container-active" : ""
          }`}
        >
          <FontAwesomeIcon
            onClick={() => navigate('/home/groups')}
            className={`w-full cursor-pointer ${
              currentRoute.pathname.includes('/home/groups') ? "text-main-color" : "text-gray-400"
            }`}
            icon="user-group"
          />
        </div>
        <div
          className={`icons-container flex justify-center items-center rounded ${
            currentRoute.pathname.includes('/home/setting') ? "icons-container-active" : ""
          }`}
        >
          <FontAwesomeIcon
            onClick={() => navigate('/home/setting')}
            className={`w-full cursor-pointer ${
              currentRoute.pathname.includes('/home/setting') ? "text-main-color" : "text-gray-400"
            }`}
            icon="user-large"
          />
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <div className={`flex items-center justify-center rounded icons-container ${
            currentRoute.pathname.includes('explore') ? "icons-container-active" : ""
        }`}>
          <FontAwesomeIcon
            onClick={() => navigate('/explore/people')}
            className={`w-full cursor-pointer ${
                currentRoute.pathname.includes('explore') ? "text-main-color" : "text-gray-400"
            }`}
            icon="globe"
          />
        </div>
        <div className="flex items-center justify-center rounded icons-container">
          <FontAwesomeIcon
            onClick={() => navigate('/')}
            className="w-full text-gray-400 cursor-pointer"
            icon="right-from-bracket"
          />
        </div>
      </div>
    </div>
  );
}
