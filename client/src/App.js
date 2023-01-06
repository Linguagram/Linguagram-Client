import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import router from "./routes";
import {
  faAddressCard,
  faCheck,
  faBan,
  faPaperPlane,
  faPaperclip,
  faClock,
  faVideo,
  faPen,
  faBell,
  faTrashCan,
  faPenToSquare,
  faChevronDown,
  faUserPlus,
  faMagnifyingGlass,
  faCaretRight,
  faCircleDot,
  faEllipsisVertical,
  faCircle,
  faSun,
  faGlobe,
  faGear,
  faUserLarge,
  faUserGroup,
  faMessage,
  faCommentDots,
  faBars,
  faXmark,
  faRightFromBracket
  faLock,
  faEnvelope,
  faPhone
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RouterProvider } from "react-router-dom";

library.add(
  faCommentDots,
  faEllipsisVertical,
  faAddressCard,
  faCheck,
  faBan,
  faPaperPlane,
  faPaperclip,
  faClock,
  faVideo,
  faPen,
  faBell,
  faTrashCan,
  faPenToSquare,
  faChevronDown,
  faUserPlus,
  faMagnifyingGlass,
  faCaretRight,
  faCircleDot,
  faCircle,
  faSun,
  faGlobe,
  faGear,
  faUserGroup,
  faMessage,
  faUserLarge,
  faBars,
  faXmark,
  faRightFromBracket
  faLock,
  faEnvelope,
  faPhone
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
