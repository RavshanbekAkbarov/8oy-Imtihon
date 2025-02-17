import React, { useEffect, useState } from "react";
import { IoMdSunny } from "react-icons/io";
import { BsMoonFill } from "react-icons/bs";

const themeFromLocatStorage = () => {
  return localStorage.getItem("theme") || "cupcake";
};

const Navbar = () => {
  const [theme, setTheme] = useState(themeFromLocatStorage());
  const toggleTheme = () => {
    const newTheme = theme == "cupcake" ? "night" : "cupcake";
    setTheme(newTheme);
  };
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="fixed top-0 bg-dark2 z-50 flex justify-between h-[103px] w-full lg:flex  lg:flex-col lg:h-screen lg:w-[103px] lg:rounded-r-3xl lg:roundwd-tr-3xl ">
      <img className="w-[103px] h-[103px]" src="/Group 9.png" alt="" />

      <div className="flex items-center gap-8  lg:flex lg:flex-col lg:gap-8 lg:items-center ">
        <label className="swap swap-rotate">
          <input type="checkbox" onClick={toggleTheme} />

          <BsMoonFill className=" swap-off h-6 w-6 fill-current text-white" />

          <IoMdSunny className="swap-on h-6 w-6 fill-current text-yellow-500" />
        </label>

        <span className=" bg-[#494E6E] h-[103px] w-[1px] lg:h-[1px] lg:w-[103px]   "></span>
        <img
          className="w-10 h-10 mr-5 lg:mr-0 lg:mb-5 "
          src="/Oval.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Navbar;
