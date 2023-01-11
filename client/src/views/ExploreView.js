import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import HomeDrawer from "../components/HomeDrawer/HomeDrawer";
import TutorialModal from "../components/Modal/TutorialModal";
import Sidebar from "../components/Sidebar/Sidebar";
import { setHomeDrawer } from "../store/actions/actionCreator";
import { handleSetActiveSection } from "../store/middlewares/thunk";

export default function ExploreView() {
  const navigate = useNavigate();
  const currentRoute = useLocation();
  const dispatch = useDispatch();
  const sections = useSelector((state) => state.sectionReducer);
  const { homeDrawer } = useSelector((state) => state.drawerReducer);

  const changeSection = (section) => {
    if (currentRoute.pathname.includes("/explore")) {
      if (section === "explore") {
        navigate("/explore/people");
      } else {
        navigate("/home");
      }
    } else if (section === "explore") {
      navigate("/explore/people");
    }

    dispatch(handleSetActiveSection(section));
  };

  return (
    <div className="fixed flex w-screen h-screen">
        <TutorialModal />
      <Sidebar />
      <div className="fixed top-0 z-50 w-full">
        <HomeDrawer homeDrawer={homeDrawer} />
      </div>
      
      <div className="flex flex-col w-full h-screen py-4 overflow-hidden bg-darker-gray">
        <div className="flex gap-4 ml-5 text-2xl font-semibold text-white md:ml-10 md:text-3xl lg:text-4xl">
          <button
            className="md:hidden"
            onClick={() => dispatch(setHomeDrawer(true))}
          >
            <FontAwesomeIcon className="text-xl text-white" icon="bars" />
          </button>
          <div className="">
            Explore
          </div>
        </div>
        <div className="flex justify-center mx-5 mt-2 md:mx-0">
          <div
            onClick={() => navigate("people")}
            className={`px-5 md:w-fit w-1/2 text-center py-1 border-b-2 cursor-pointer hover:border-gray-300 hover:text-gray-300 ${
              currentRoute.pathname.includes("people")
                ? "text-gray-300 border-gray-300"
                : "text-gray-500 border-gray-500"
            }`}
          >
            People
          </div>
          <div
            onClick={() => navigate("groups")}
            className={`md:w-fit w-1/2 text-center px-5 py-1 border-b-2 cursor-pointer hover:border-gray-300 hover:text-gray-300 ${
              currentRoute.pathname.includes("groups")
                ? "text-gray-300 border-gray-300"
                : "text-gray-500 border-gray-500"
            }`}
          >
            Groups
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
}
