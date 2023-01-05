import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";

export default function ExploreView() {
  const navigate = useNavigate();
  const currentRoute = useLocation();

  return (
    <div className="flex w-screen h-screen">
      <Sidebar />
      <div className="flex flex-col w-full py-4 bg-darker-gray">
        <div className="text-2xl font-semibold text-center text-white">
          Explore
        </div>
        <div className="flex justify-center mt-2">
          <div
            onClick={() => navigate("people")}
            className={`px-2 py-1 border-b-2 cursor-pointer hover:border-gray-300 ${
              currentRoute.pathname.includes("people")
                ? "text-gray-300 border-gray-300"
                : "text-gray-500 border-gray-500"
            }`}
          >
            People
          </div>
          <div
            onClick={() => navigate("groups")}
            className={`px-2 py-1 border-b-2 cursor-pointer hover:border-gray-300 ${
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
