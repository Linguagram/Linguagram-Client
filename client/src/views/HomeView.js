import Sidebar from "../components/Sidebar/Sidebar";
import Section from "../components/Section";
import ChatRoom from "../components/Chatroom";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleSetActiveSection } from "../store/middlewares/thunk";
import HomeDrawer from "../components/HomeDrawer/HomeDrawer";
import { useState } from "react";

export default function HomeView() {
  const currentRoute = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { homeDrawer } = useSelector((state) => state.drawerReducer)

  const changeSection = (section) => {
    if(currentRoute.pathname.includes('/explore')) {
      navigate('/home')
    } else if (section === 'explore') {
      navigate('/explore/people')
    }

    dispatch(handleSetActiveSection(section))
  }

  return (
    <div className="fixed flex w-screen h-screen md:flex-row">
      <Sidebar />
      <Section />

      <div className="fixed top-0 z-50 w-full">
        <HomeDrawer homeDrawer={homeDrawer} />
      </div>

      <ChatRoom />
    </div>
  );
}
