import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root";
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
        element: <HomeView />,
      },
      {
        path: "contacts",
        element: <HomeView />,
      },
      {
        path: "groups",
        element: <HomeView />,
      },
      {
        path: "setting",
        element: <HomeView />,
      }
    ]
  },
]);

export default router;
