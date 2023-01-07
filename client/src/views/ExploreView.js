import { useDispatch, useSelector } from "react-redux";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import { handleSetActiveSection } from "../store/middlewares/thunk";

export default function ExploreView() {
  const navigate = useNavigate();
  const currentRoute = useLocation();
  const dispatch = useDispatch()
  const sections = useSelector((state) => state.sectionReducer)

  const changeSection = (section) => {
    if(currentRoute.pathname.includes('/explore')) {
      if (section === 'explore') {
        navigate('/explore/people')
      } else {
        navigate('/home')
      }
    } else if (section === 'explore') {
      navigate('/explore/people')
    }

    dispatch(handleSetActiveSection(section))
  }

  return (
    <div className="fixed flex w-screen h-screen">
      <Sidebar changeSection={changeSection} sections={sections} />
      <div className="flex flex-col w-full h-screen py-4 overflow-hidden bg-darker-gray">
        <div className="ml-10 text-3xl font-semibold text-white lg:text-4xl">
          Explore
        </div>
        <div className="flex justify-center mt-2">
          <div
            onClick={() => navigate("people")}
            className={`px-5 py-1 border-b-2 cursor-pointer hover:border-gray-300 hover:text-gray-300 ${
              currentRoute.pathname.includes("people")
                ? "text-gray-300 border-gray-300"
                : "text-gray-500 border-gray-500"
            }`}
          >
            People
          </div>
          <div
            onClick={() => navigate("groups")}
            className={`px-5 py-1 border-b-2 cursor-pointer hover:border-gray-300 hover:text-gray-300 ${
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