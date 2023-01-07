import Sidebar from "../components/Sidebar/Sidebar";
import Section from "../components/Section";
import ChatRoom from "../components/Chatroom";
import { URL_SERVER } from "../baseUrl";

import io from "socket.io-client";
import { useEffect } from "react";

// const socket = io.connect(URL_SERVER);
// socket.emit("identify", JSON.stringify({userId: 2})); // diganti userID beneran kalau udah dapet data user abis login

export default function HomeView() {

 
  return (
    <div className="flex w-screen h-screen">
      <Sidebar />
      <Section />
      <ChatRoom />
    </div>
  );
}
