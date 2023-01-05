import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { handleSetActiveSection } from "../../store/middlewares/thunk";
import { useLocation, useNavigate } from "react-router-dom";

export default function Sidebar() {
  const currentRoute = useLocation();
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const sections = useSelector((state) => state.sectionReducer);

  const changeSection = (section) => {
    if(currentRoute.pathname.includes('/explore')) {
        navigate('/home')
    } else if (section === 'explore') {
        navigate('/explore/people')
    }
    dispatch(handleSetActiveSection(section));
  };

  return (
    <div className="flex flex-col items-center justify-between h-screen py-5 w-18 bg-light-gray">
      <div>
        <FontAwesomeIcon
            onClick={() => changeSection('message')}
          className="w-full text-main-color"
          icon="comment-dots"
        />
      </div>
      <div className="flex flex-col gap-1">
        <div
          className={`icons-container flex justify-center items-center rounded ${
            sections.message ? "icons-container-active" : ""
          }`}
        >
          <FontAwesomeIcon
            onClick={() => changeSection("message")}
            className={`w-full cursor-pointer ${
              sections.message ? "text-main-color" : "text-gray-400"
            }`}
            icon="message"
          />
        </div>
        <div
          className={`icons-container flex justify-center items-center rounded ${
            sections.address ? "icons-container-active" : ""
          }`}
        >
          <FontAwesomeIcon
            onClick={() => changeSection("address")}
            className={`w-full cursor-pointer ${
              sections.address ? "text-main-color" : "text-gray-400"
            }`}
            icon="address-card"
          />
        </div>
        <div
          className={`icons-container flex justify-center items-center rounded ${
            sections.group ? "icons-container-active" : ""
          }`}
        >
          <FontAwesomeIcon
            onClick={() => changeSection("group")}
            className={`w-full cursor-pointer ${
              sections.group ? "text-main-color" : "text-gray-400"
            }`}
            icon="user-group"
          />
        </div>
        <div
          className={`icons-container flex justify-center items-center rounded ${
            sections.gear ? "icons-container-active" : ""
          }`}
        >
          <FontAwesomeIcon
            onClick={() => changeSection("gear")}
            className={`w-full cursor-pointer ${
              sections.gear ? "text-main-color" : "text-gray-400"
            }`}
            icon="user-large"
          />
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <div className={`flex items-center justify-center rounded icons-container ${
            sections.explore ? "icons-container-active" : ""
        }`}>
          <FontAwesomeIcon
            onClick={() => changeSection('explore')}
            className={`w-full cursor-pointer ${
                sections.explore ? "text-main-color" : "text-gray-400"
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
