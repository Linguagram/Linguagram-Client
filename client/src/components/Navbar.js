import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const { color } = useSelector(state => {
    return state.navbarReducer
  })

  const [drawer, setDrawer] = useState(false);
  const element = document.querySelector("#main-content");

  function toggleDrawer() {
    if (drawer) setDrawer(false);
    else setDrawer(true);
  }

  return (
    <>
      <div
        className={`flex flex-1 justify-end ease-in-out duration-500  ${
          drawer ? "translate-x-0" : "translate-x-full"
        }`}>
        <div className="h-screen bg-darker-gray fixed w-3/5 z-100 p-4 flex flex-1 gap-4 flex-col">
          <div className="flex justify-end mb-2">
            <button onClick={toggleDrawer}>
              <FontAwesomeIcon icon="xmark" className="text-white text-2xl" />
            </button>
          </div>
          <div className="flex flex-col text-xl text-white font-bold gap-2">
            <div className="border-b border-white-500 py-2">
              <NavLink to={"/register"}>Register</NavLink>
            </div>
            <div className="border-b border-white-500 py-2">
              <NavLink to={"/login"}>Login</NavLink>
            </div>
          </div>{" "}
        </div>
      </div>

      <div
        className={`text-white ease-in duration-300 ${
          color ? "bg-darker-gray" : ""
        }`}>
        <div className="px-4 container mx-auto flex justify-between items-center py-4">
          <div className="text-2xl font-bold flex items-center">
            <NavLink to={"/"}>Linguagram</NavLink>
          </div>
          <div className="flex justify-end">
            <div className="hidden sm:flex justify-end items-center gap-4">
              <NavLink to={"/register"}>Register</NavLink>
              <NavLink to={"/login"}>Login</NavLink>
            </div>
            <div className="flex justify-end items-center sm:hidden">
              <button onClick={toggleDrawer}>
                <FontAwesomeIcon className="text-white text-2xl" icon="bars" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
