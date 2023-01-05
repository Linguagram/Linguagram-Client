import Sidebar from "../components/Sidebar/Sidebar";
import Section from "../components/Section";
import ChatRoom from "../components/Chatroom";

export default function HomeView() {
  return (
    <div className="flex w-screen h-screen">
      <Sidebar />
      <Section />
      <ChatRoom />
    </div>
  );
}
