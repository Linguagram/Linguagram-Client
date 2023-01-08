import Sidebar from "../components/Sidebar/Sidebar";
import Section from "../components/Section";
import ChatRoom from "../components/Chatroom";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserLogin, handleSetActiveSection, handleSetThisUser } from "../store/middlewares/thunk";
import HomeDrawer from "../components/HomeDrawer/HomeDrawer";
import { useEffect, useState } from "react";
import swal from "sweetalert";
import { swalError } from "../util/swal";

export default function HomeView() {
  const currentRoute = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { homeDrawer } = useSelector((state) => state.drawerReducer)
  const { openChat } = useSelector((state) => state.sectionReducer)
  const { thisUser } = useSelector((state) => state.userReducer)
  
  useEffect(() => {
    if(localStorage.access_token && !thisUser.id) {
      dispatch(getUserLogin())
      .then((res) => {
        const user = res.data
        dispatch(handleSetThisUser(user))
      })
      .catch((err) => {
        if(err.response?.data?.message) {
          swalError(err)
        } else {
          console.log(err)
        }
      })
    }
  }, [])

  return (
    <div className="fixed flex w-screen h-screen md:flex-row">
      <Sidebar />
      <Section openChat={openChat} />

      <div className="fixed top-0 z-50 w-full">
        <HomeDrawer homeDrawer={homeDrawer} />
      </div>

      <ChatRoom />
    </div>
  );
}
