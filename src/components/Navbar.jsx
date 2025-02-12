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
    <div className=" left-0 top-0 bottom-0 w-[103px] bg-dark2 flex flex-col justify-between rounded-r-[20px] z-10 transition-colors duration-300">
      <img src="/Group 9.png" alt="" />

      <div className="pb-8 flex flex-col items-center gap-8">
        <label className="swap swap-rotate">
          <input type="checkbox" onClick={toggleTheme} />

          <BsMoonFill className=" swap-off h-6 w-6 fill-current text-white" />

          <IoMdSunny className="swap-on h-6 w-6 fill-current text-yellow-500" />
        </label>

        <div className="w-full h-px bg-[#494E6E]" />
        <div className="rounded-full overflow-hidden">
          <img src="/Oval.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
