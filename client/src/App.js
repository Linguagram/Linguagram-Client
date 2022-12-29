import './App.css';
import Setting from './components/Setting';
import Sidebar from './components/Sidebar';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAddressCard, faPenToSquare, faChevronDown, faUserPlus, faMagnifyingGlass, faCaretRight, faCircleDot, faEllipsisVertical, faCircle, faSun, faGlobe, faGear, faUserLarge, faUserGroup, faMessage, faCommentDots } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(faCommentDots, faEllipsisVertical, faAddressCard, faPenToSquare, faChevronDown, faUserPlus, faMagnifyingGlass, faCaretRight, faCircleDot, faCircle, faSun, faGlobe, faGear, faUserGroup, faMessage, faUserLarge)

function App() {
  return (
    <div className='flex'>
      <Setting/>
      <Sidebar/>
    </div>
  );
}

export default App;
