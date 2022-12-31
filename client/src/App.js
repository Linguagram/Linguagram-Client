import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Section from './components/Section';
import ChatRoom from './components/Chatroom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAddressCard, faPaperPlane, faPaperclip, faClock, faVideo, faPen, faBell, faTrashCan, faPenToSquare, faChevronDown, faUserPlus, faMagnifyingGlass, faCaretRight, faCircleDot, faEllipsisVertical, faCircle, faSun, faGlobe, faGear, faUserLarge, faUserGroup, faMessage, faCommentDots } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(faCommentDots, faEllipsisVertical, faAddressCard, faPaperPlane, faPaperclip, faClock, faVideo, faPen, faBell, faTrashCan, faPenToSquare, faChevronDown, faUserPlus, faMagnifyingGlass, faCaretRight, faCircleDot, faCircle, faSun, faGlobe, faGear, faUserGroup, faMessage, faUserLarge)

function App() {
  return (
    <div className='flex'>
      <Sidebar/>
      <Section/>
      <ChatRoom/>
    </div>
  );
}

export default App;
