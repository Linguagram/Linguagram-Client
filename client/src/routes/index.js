import { createBrowserRouter } from "react-router-dom";
import Groups from "../components/Explore/Groups";
import People from "../components/Explore/People";
import Root from "../components/Root";
import SectionChats from "../components/Section/SectionChats";
import SectionFriends from "../components/Section/SectionFriends";
import SectionGroups from "../components/Section/SectionGroups";
import SectionSetting from "../components/Section/SectionSetting";
import ExploreView from "../views/ExploreView";
import HomeView from "../views/HomeView";
import LandingView from "../views/LandingView";
import LoginView from "../views/LoginView";
import RegisterView from "../views/RegisterView";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <LandingView />,
      },
      {
        path: "login",
        element: <LoginView />,
      },
      {
        path: "register",
        element: <RegisterView />,
      },
    ]
  },
  {
    path: "/home",
    element: <HomeView />,
    children: [
      {
        path: "chats",
        element: <SectionChats />
      },
      {
        path: "friends",
        element: <SectionFriends />
      },
      {
        path: "groups",
        element: <SectionGroups />
      },
      {
        path: "setting",
        element: <SectionSetting />
      },
    ]
  },
  {
    path: "/explore",
    element: <ExploreView />,
    children: [
      {
        path: 'people',
        element: <People />
      },
      {
        path: 'groups',
        element: <Groups />
      }
    ]
  }
]);

export default router;
