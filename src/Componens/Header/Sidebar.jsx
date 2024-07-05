import React, { useState } from 'react';
import { FiX } from 'react-icons/fi';
import { VscVscodeInsiders } from 'react-icons/vsc';
import { Link } from 'react-router-dom';
import { PageList } from '../../../public/Pagelist.js';

const Sidebar = ({ onCloseSidebar }) => {
  const [submenuVisible, setSubmenuVisible] = useState(true);
  const [sidebarVisible, setSidebarVisible] = useState(true);

  const dropdown = () => {
    setSubmenuVisible(!submenuVisible);
  };

  const openSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div className="bg-blue-600 min-h-screen">
      <span
        className="absolute text-white text-4xl top-5 left-4 cursor-pointer"
        onClick={openSidebar}
      >
        <i className="bi bi-filter-left px-2 bg-gray-900 rounded-md"></i>
      </span>
      <div
        className={`sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-gray-900 ${
          sidebarVisible ? '' : 'hidden'
        }`}
      >
        <div className="text-gray-100 text-xl">
          <div className="p-2.5 mt-1 flex items-center">
            <i className=""><Link to={PageList.Home}><VscVscodeInsiders /></Link></i>
            <h1 className="font-bold text-gray-200 text-[15px] ml-3"><Link to={PageList.Home}>Hasnat</Link></h1>
            <i
              className="bi bi-x cursor-pointer ml-28 lg:hidden"
              onClick={openSidebar}
            ></i>
          <div className="p-4">
        <button
          className="flex items-center justify-center w-full rounded-md border-2 border-gray-500 text-white hover:bg-gray-600 focus:outline-none"
          onClick={onCloseSidebar}
        >
          <FiX size={20} />
         
        </button>
        </div>
          </div>
          <div className="my-2 bg-gray-600 h-[2px]"></div>
        </div>
        <div
          className="p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700 text-white"
        >
          <i className="bi bi-search text-sm"></i>
          <input
            type="text"
            placeholder="Search"
            className="text-[15px] ml-4 w-full bg-transparent focus:outline-none"
          />
        </div>
        <div
          className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
        >
          <i className="bi bi-house-door-fill"></i>
          <span className="text-[15px] ml-4 text-gray-200 font-bold">
            <Link to={PageList.Docs}>
            Documentation
            </Link>
            </span>
         
        </div>
        <div
          className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
        >
 <i className="bi bi-house-door-fill"></i>
          <span className="text-[15px] ml-4 text-gray-200 font-bold">
            <Link to={PageList.Example}>
            Example
            </Link>
            </span>
         
        </div>
        <div
          className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
        >
 <i className="bi bi-house-door-fill"></i>
          <span className="text-[15px] ml-4 text-gray-200 font-bold">
            <Link to={PageList.Thomos}>
           Themes
            </Link>
            </span>
         
        </div>
        <div
          className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
        >
 <i className="bi bi-house-door-fill"></i>
          <span className="text-[15px] ml-4 text-gray-200 font-bold">
            <Link to={PageList.Component}>
           Components
            </Link>
            </span>
         
        </div>
        <div
          className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
        >
 <i className="bi bi-house-door-fill"></i>
          <span className="text-[15px] ml-4 text-gray-200 font-bold">
            <Link to={PageList.Blocks}>
            Blocks
            </Link>
            </span>
         
        </div>
        <div
          className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
        >
          <i className="bi bi-bookmark-fill"></i>
          <span className="text-[15px] ml-4 text-gray-200 font-bold">Bookmark</span>
        </div>
        <div className="my-4 bg-gray-600 h-[1px]"></div>
        <div
          className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
          onClick={dropdown}
        >
          <i className="bi bi-chat-left-text-fill"></i>
          <div className="flex justify-between w-full items-center">
            <span className="text-[15px] ml-4 text-gray-200 font-bold">Chatbox</span>
            <span className={`text-sm ${submenuVisible ? '' : 'rotate-180'}`} id="arrow">
              <i className="bi bi-chevron-down"></i>
            </span>
          </div>
        </div>
        <div
          className={`text-left text-sm mt-2 w-4/5 mx-auto text-gray-200 font-bold ${
            submenuVisible ? '' : 'hidden'
          }`}
          id="submenu"
        >
          <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">
            Social
          </h1>
          <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">
            Personal
          </h1>
          <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">
            Friends
          </h1>
        </div>
        <div
          className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
        >
          <i className="bi bi-box-arrow-in-right"></i>
          <span className="text-[15px] ml-4 text-gray-200 font-bold">Logout</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
