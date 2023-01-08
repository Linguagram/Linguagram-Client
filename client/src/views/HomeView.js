import Sidebar from "../components/Sidebar/Sidebar";
import Section from "../components/Section";
import ChatRoom from "../components/Chatroom";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserLogin, handleFetchGroups, handleSetActiveSection, handleSetSocketConnect, handleSetThisUser } from "../store/middlewares/thunk";
import HomeDrawer from "../components/HomeDrawer/HomeDrawer";
import { useEffect } from "react";
import { swalError } from "../util/swal";
import io from "socket.io-client";
import { URL_SERVER } from "../baseUrl";

const socket = io.connect(`${URL_SERVER}`)
if(localStorage.user_id) socket.emit("identify", {userId: localStorage.user_id}); 

export default function HomeView() {

  const currentRoute = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { homeDrawer } = useSelector((state) => state.drawerReducer)
  const { openChat } = useSelector((state) => state.sectionReducer)
  const { thisUser } = useSelector((state) => state.userReducer)
  const { privateGroups, groupGroups } = useSelector((state) => state.groupReducer)

  useEffect(() => {
    if(localStorage.access_token && !thisUser.id) {
      dispatch(getUserLogin())
      .then((res) => {
        const user = res.data
        dispatch(handleSetThisUser(user))
        dispatch(handleFetchGroups())
      })
      .then((_) => {
        return
      })
      .catch((err) => {
        if(err.response?.data?.message) {
          swalError(err)
        } else {
          console.log(err)
        }
      })
    } else {
      dispatch(handleFetchGroups())
    }
  }, [])

  useEffect(() => {
    dispatch(handleSetSocketConnect(socket))
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
