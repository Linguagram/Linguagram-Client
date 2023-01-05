import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [color, setColor] = useState(false);
  const [drawer, setDrawer] = useState(false);

  function changeColor() {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  }

  function toggleDrawer() {
    if(drawer) setDrawer(false)
    else setDrawer(true)
  }

  window.addEventListener("scroll", changeColor);

  return (
    <>
      <div className={`flex flex-1 justify-end ease-in-out duration-500  ${drawer ? 'translate-x-full' : 'translate-x-0'}`}>
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
        className={
          color
            ? "text-white bg-black ease-in duration-300"
            : "text-white ease-in duration-300"
        }>
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
