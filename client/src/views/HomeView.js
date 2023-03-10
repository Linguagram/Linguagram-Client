import Sidebar from "../components/Sidebar/Sidebar";
import Section from "../components/Section";
import ChatRoom from "../components/Chatroom";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getFriends, getUserLogin, handleFetchGroups, handleSetActiveSection, handleSetIsIncomingCall, handleSetSocketConnect, handleSetThisUser } from "../store/middlewares/thunk";
import HomeDrawer from "../components/HomeDrawer/HomeDrawer";
import { useEffect, useState } from "react";
import { swalError } from "../util/swal";
import IncomingCallingModal from '../../src/components/Modal/IncomingCallingModal'
import { setIncomingCaller } from "../store/actions/actionCreator";
import axios from 'axios'
import { URL_SERVER } from "../baseUrl";
import { initSocket, closeSocket } from "../store/middlewares/socketThunk";

export default function HomeView() {
  const currentRoute = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { homeDrawer } = useSelector((state) => state.drawerReducer)
  const { openChat } = useSelector((state) => state.sectionReducer)
  const { socketConnect } = useSelector((state) => state.socketReducer);
  const { thisUser, incomingCaller, isIncomingCall } = useSelector((state) => state.userReducer);
  const { friendsFetched } = useSelector((state) => state.friendReducer)
  const { privateGroups, groupGroups, groupsFetched } = useSelector((state) => state.groupReducer)

  const setIsIncomingCall = (state) => {
    dispatch(handleSetIsIncomingCall(state));
  }

  useEffect(() => {
    if(localStorage.access_token && !thisUser.id) {
      dispatch(getUserLogin())
      .then((res) => {
        const user = res.data
        dispatch(handleSetThisUser(user))
        dispatch(handleFetchGroups())
      })
      .catch((err) => {
        if(err.response?.data?.message) {
          swalError(err)
        } else {
          console.log(err)
        }
      });
    }

    if (!groupsFetched) {
      dispatch(handleFetchGroups());
    }

    if (!friendsFetched) dispatch(getFriends());
    dispatch(initSocket(dispatch, navigate));
  }, [])

  useEffect(() => {
    if(socketConnect) {
      socketConnect.on('incomingCall', async (incomingUserId) => {
        console.log("[incomingCaller]", incomingCaller);

        if(Object.keys(incomingCaller).length === 0) {
          const {data} = await axios({
            method: "GET",
            url: `${URL_SERVER}/users/${incomingUserId.from}`,
            headers: {
              'access_token': localStorage.access_token
            },
          });

          dispatch(setIncomingCaller(data))

          setIsIncomingCall(true)
        }
      });
    }
  }, [socketConnect])

  const declineCall = () => {
    socketConnect.emit("declineCall", { userToDecline: incomingCaller.id, from: thisUser.id })
    dispatch(setIncomingCaller({}))
    setIsIncomingCall(false)
  }

  const acceptCall = () => {
    socketConnect.emit("acceptCall", { userToReceive: incomingCaller.id, from: thisUser.id })
    setIsIncomingCall(false)
    navigate('/videocall')
  }

  console.log("[isIncomingCall]", isIncomingCall);

  return (
    <div className="fixed flex w-screen h-screen md:flex-row">
      <IncomingCallingModal declineCall={declineCall} acceptCall={acceptCall}/>
      <Sidebar />
      <Section openChat={openChat} />

      <div className="fixed top-0 z-50 w-full">
        <HomeDrawer homeDrawer={homeDrawer} />
      </div>

      <ChatRoom />
    </div>
  );
}
