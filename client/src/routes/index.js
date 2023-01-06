import { createBrowserRouter } from "react-router-dom";
import Groups from "../components/Explore/Groups";
import People from "../components/Explore/People";
import Root from "../components/Root";
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
