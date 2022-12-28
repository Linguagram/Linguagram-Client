import './App.css';
import Setting from './components/setting';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAddressCard, faCircle, faSun, faGlobe, faGear, faUserLarge, faUserGroup, faMessage, faCommentDots } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(faCommentDots, faAddressCard, faCircle, faSun, faGlobe, faGear, faUserGroup, faMessage, faUserLarge)

function App() {
  return (
    <>
      <Setting/>
    </>
  );
}

export default App;
