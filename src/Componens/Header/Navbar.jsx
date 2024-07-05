import React, { useState } from "react";
import { VscVscodeInsiders } from "react-icons/vsc";
import { HiOutlineSun } from "react-icons/hi2";
import { FaGithubSquare } from "react-icons/fa";
import { MdOutlineSort } from "react-icons/md";
import { BsTwitterX } from "react-icons/bs";
import { RxMoon } from "react-icons/rx";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import { PageList } from "../../../public/Pagelist";

const Navbar = ({ theme, themeChanger }) => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div className={`border-b-2 border-gray-700 ${theme === "dark" ? 'bg-transparent' : 'bg-gray-100 text-gray-800'}`}>
      <div className="flex justify-between items-center px-4 py-3 md:px-8">
        <div className="flex items-center space-x-3 md:space-x-5 gap-6">
          {/* Logo and Name (hidden on small screens) */}
          <div className="hidden md:flex items-center space-x-3">
            <span className="text-2xl">
            <Link to={PageList.Home}>
              <VscVscodeInsiders />
              </Link>
            </span>
            <span className="text-xl font-bold">
              <Link to={PageList.Home}>
              Hasnat
              </Link>
              </span>
          </div>

          {/* Menu button for small screens */}
          <div onClick={toggleSidebar} className={`md:hidden p-2 rounded-md ${theme === "dark" ? "bg-slate-800" : "bg-slate-200"}`}>
            <MdOutlineSort size={20} />
          </div>

          {/* Navigation links (hidden on small screens) */}
          <div className="hidden md:flex items-center space-x-3">
            <Link to={PageList.Docs} className="text-gray-400 font-semibold hover:text-gray-300 transition duration-300">
              Docs
            </Link>
            <Link to={PageList.Component} className="text-gray-400 font-semibold hover:text-gray-300 transition duration-300">
              Components
            </Link>
            <Link to={PageList.Thomos} className="text-gray-400 font-semibold hover:text-gray-300 transition duration-300">
              Themes
            </Link>
            <Link to={PageList.Example} className="text-gray-400 font-semibold hover:text-gray-300 transition duration-300">
              Example
            </Link>
            <Link to={PageList.Blocks} className="text-gray-400 font-semibold hover:text-gray-300 transition duration-300">
             Blocks
            </Link>
          </div>
        </div>

        {/* Search, Social Icons, and Theme Switcher */}
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-3 border-2 rounded px-2 py-1 border-gray-500">
            <input
              className="bg-transparent w-20 md:w-15 text-white focus:outline-none"
              type="search"
              name="search"
              placeholder="Search"
            />
            <button className="hidden md:inline">⌘K</button>
          </div>

          <span onClick={themeChanger} className="cursor-pointer">
            <a
              href="https://github.com/HAS0786?tab=repositories"
              className="text-white"
            >
              {theme === "dark" ? (
                <FaGithubSquare size={20} className="text-white" />
              ) : (
                <FaGithubSquare size={20} className="text-black" />
              )}
            </a>
          </span>
          <span onClick={themeChanger} className="cursor-pointer">
            <a
              href="https://github.com/HAS0786?tab=repositories"
              className="text-white"
            >
              {theme === "dark" ? (
                <BsTwitterX size={20} className="text-white" />
              ) : (
                <BsTwitterX size={20} className="text-black" />
              )}
            </a>
          </span>
          <span onClick={themeChanger} className="cursor-pointer">
            {theme === "dark" ? (
              <RxMoon size={20} className="text-white" />
            ) : (
              <HiOutlineSun size={20} className="text-black" />
            )}
          </span>
        </div>
      </div>

      {/* Sidebar component */}
      {sidebarVisible && (
        <div className="md:hidden">
          <div className="fixed inset-0 z-10 bg-gray-800 bg-opacity-75"></div>
          <div className="fixed inset-y-0 left-0 z-20 w-64 bg-gray-900 transform transition duration-300 ease-in-out">
            <Sidebar onCloseSidebar={toggleSidebar} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
