import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [color, setColor] = useState(false)
  function changeColor() {
    if(window.scrollY >= 90) {
      setColor(true)
    } else {
      setColor(false)
    }
  }

  window.addEventListener('scroll', changeColor)

  return (
    <div className={ color ? "text-white bg-black ease-in duration-300" : "text-white ease-in duration-300"}>
      <div className="px-8 md:px-0 md:container md:mx-auto flex justify-between items-center py-4">
        <div className="text-2xl font-bold">
        <NavLink to={"/"}>Linguagram</NavLink>
        </div>
        <div className="flex justify-end gap-8">
          <NavLink to={"/register"}>Register</NavLink>
          <NavLink to={"/login"}>Login</NavLink>
        </div>
      </div>
    </div>
  );
}
