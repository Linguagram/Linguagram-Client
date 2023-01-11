import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logOut } from "../../store/middlewares/thunk";
import { closeSocket } from "../../store/middlewares/socketThunk";

export default function Sidebar() {
  const currentRoute = useLocation();
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const handleLogOut = () => {
    dispatch(closeSocket())
    dispatch(logOut())
    navigate('/')
  }

  return (
    <div className="flex-col items-center justify-between hidden w-12 h-screen py-5 md:flex bg-light-gray">
      <div onClick={() => navigate("/home/chats")}>
        <img
          src="https://ik.imagekit.io/enybtlxa2/linguagram.-logo-only-cropped.png?ik-sdk-version=javascript-1.4.3&updatedAt=1673084814327"
          alt="linguagram-logo"
          className="h-full"
        />
      </div>
      <div className="flex flex-col gap-1">
        <div
          className={`icons-container flex justify-center items-center rounded ${
            currentRoute.pathname.includes("/home/chats")
              ? "icons-container-active"
              : ""
          }`}
        >
          <FontAwesomeIcon
            onClick={() => navigate("/home/chats")}
            className={`w-full cursor-pointer ${
              currentRoute.pathname.includes("/home/chats")
                ? "text-light-blue"
                : "text-gray-400"
            }`}
            icon="message"
          />
        </div>
        <div
          className={`icons-container flex justify-center items-center rounded ${
            currentRoute.pathname.includes("/home/friends")
              ? "icons-container-active"
              : ""
          }`}
        >
          <FontAwesomeIcon
            onClick={() => navigate("/home/friends")}
            className={`w-full cursor-pointer ${
              currentRoute.pathname.includes("/home/friends")
                ? "text-light-blue"
                : "text-gray-400"
            }`}
            icon="address-card"
          />
        </div>
        <div
          className={`icons-container flex justify-center items-center rounded ${
            currentRoute.pathname.includes("/home/groups")
              ? "icons-container-active"
              : ""
          }`}
        >
          <FontAwesomeIcon
            onClick={() => navigate("/home/groups")}
            className={`w-full cursor-pointer ${
              currentRoute.pathname.includes("/home/groups")
                ? "text-light-blue"
                : "text-gray-400"
            }`}
            icon="user-group"
          />
        </div>
        <div
          className={`icons-container flex justify-center items-center rounded ${
            currentRoute.pathname.includes("/home/setting")
              ? "icons-container-active"
              : ""
          }`}
        >
          <FontAwesomeIcon
            onClick={() => navigate("/home/setting")}
            className={`w-full cursor-pointer ${
              currentRoute.pathname.includes("/home/setting")
                ? "text-light-blue"
                : "text-gray-400"
            }`}
            icon="user-large"
          />
        </div>
      </div>
      <div className="flex flex-col gap-1 m-0">
        <div
          className={`flex items-center justify-center rounded icons-container ${
            currentRoute.pathname.includes("explore")
              ? "icons-container-active"
              : ""
          }`}
        >
          <FontAwesomeIcon
            onClick={() => navigate("/explore/people")}
            className={`w-full cursor-pointer ${
              currentRoute.pathname.includes("explore")
                ? "text-light-blue"
                : "text-gray-400"
            }`}
            icon="globe"
          />
        </div>
        <div className="flex items-center justify-center rounded icons-container">
          <FontAwesomeIcon
            onClick={() => handleLogOut()}
            className="w-full text-gray-400 cursor-pointer"
            icon="right-from-bracket"
          />
        </div>
      </div>
    </div>
  );
}
