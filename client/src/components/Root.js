import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function Root() {
  return (
    <div>
      <div className="fixed top-0 z-50 w-full">
        <Navbar />
      </div>
      <div className="relative">
        <Outlet />
      </div>
    </div>
  );
}
