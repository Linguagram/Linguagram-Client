import { createBrowserRouter } from "react-router-dom";
import HomeView from "../views/HomeView";
import LandingView from "../views/LandingView";
import LoginView from "../views/LoginView";
import RegisterView from "../views/RegisterView";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingView />,
  },
  {
    path: "/login",
    element: <LoginView />,
  },
  {
    path: "/register",
    element: <RegisterView />,
  },
  {
    path: "/home",
    element: <HomeView />,
  },
]);

export default router;
