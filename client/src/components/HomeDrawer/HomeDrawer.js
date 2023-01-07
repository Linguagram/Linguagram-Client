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
        <div className="flex justify-end mb-2">
          <button onClick={() => dispatch(setHomeDrawer(false))}>
            <FontAwesomeIcon icon="xmark" className="text-2xl text-white" />
          </button>
        </div>
        <div className="flex flex-col gap-2 text-xl font-bold text-white">
          <NavLink to={"/home/chats"} onClick={() => dispatch(setHomeDrawer(false))} className="flex items-center gap-4 py-2">
            <FontAwesomeIcon
              className={`cursor-pointer text-gray-400 w-1/3`}
              icon="message"
            />
            <div>Chats</div>
          </NavLink>

          <NavLink to={"/home/friends"} onClick={() => dispatch(setHomeDrawer(false))} className="flex items-center gap-4 py-2">
            <FontAwesomeIcon
              className={`cursor-pointer text-gray-400 w-1/3`}
              icon="address-card"
            />
            <div>Friends</div>
          </NavLink>

          <NavLink to={"/home/groups"} onClick={() => dispatch(setHomeDrawer(false))} className="flex items-center gap-4 py-2">
            <FontAwesomeIcon
              className={`cursor-pointer text-gray-400 w-1/3`}
              icon="user-group"
            />
            <div>Groups</div>
          </NavLink>

          <NavLink to={"/home/setting"} onClick={() => dispatch(setHomeDrawer(false))} className="flex items-center gap-4 py-2">
            <FontAwesomeIcon
              className={`cursor-pointer text-gray-400 w-1/3`}
              icon="user-large"
            />
            <div>Setting</div>
          </NavLink>

        </div>{" "}
      </div>
    </div>
  );
}
