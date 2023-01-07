import Sidebar from "../components/Sidebar/Sidebar";
import Section from "../components/Section";
import ChatRoom from "../components/Chatroom";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleSetActiveSection } from "../store/middlewares/thunk";
import HomeDrawer from "../components/HomeDrawer/HomeDrawer";
import { useState } from "react";

export default function HomeView() {
  const [drawer, setDrawer] = useState(false);
  const currentRoute = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const sections = useSelector((state) => state.sectionReducer)

  const changeSection = (section) => {
    if(currentRoute.pathname.includes('/explore')) {
      navigate('/home')
    } else if (section === 'explore') {
      navigate('/explore/people')
    }

    dispatch(handleSetActiveSection(section))
  }

  function toggleDrawer() {
    if(drawer) setDrawer(false)
    else setDrawer(true)
  }

  return (
    <div className="fixed flex flex-col w-screen h-screen md:flex-row">
      <Sidebar changeSection={changeSection} sections={sections} />
      <Section sections={sections} toggleDrawer={toggleDrawer} />

      <div className="fixed top-0 z-50 w-full">
        <HomeDrawer drawer={drawer} toggleDrawer={toggleDrawer} />
      </div>

      <ChatRoom />
    </div>
  );
}
