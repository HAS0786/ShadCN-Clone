import React, { useState } from 'react';

const SidebarofDocs = ({theme}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='z-auto'>
    <aside className={`fixed top-0 left-0 bottom-0 shadow-md w-60 pt-16 ${theme==="dark"?("bg-gray-900 text-gray-100"):("bg-slate-100 text-gray-800")}, ${isOpen ? 'block' : 'hidden'} sm:block`}>
      <div className="flex flex-col h-full">
        {/* Logo */}
        <div className="px-4 py-6 text-center border-b">
          <h1 className="text-xl font-bold text-yellow-700">Task Manager</h1>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto">
          <ul className="py-4">
            <li>
              <a
                href="#"
                className={`flex items-center py-3 px-4 text-sm font-bold transition  hover:bg-yellow-300 ${theme==="dark"?("bg-gray-900 text-gray-100"):("bg-gray-100 text-g")}`}              >
                {/* Replace with your SVG or icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="mr-4"
                >
                  <path d="M4.5 2A2.5 2.5 0 0 0 2 4.5v7A2.5 2.5 0 0 0 4.5 14h7a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 11.5 2h-7zm5 4a.5.5 0 0 1 .5.5V11h-1V6.5a.5.5 0 0 1 .5-.5zM5 5v6h1V5H5z" />
                </svg>
                Projects
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`flex items-center py-3 px-4 text-sm font-bold transition  hover:bg-yellow-300 ${theme==="dark"?("bg-gray-900 text-gray-100"):("bg-gray-100 text-g")}`}              >
                {/* Replace with your SVG or icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="mr-4"
                >
                  <path d="M5 0h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zM4 2a1 1 0 0 0-1 1v1.586a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414 0l3-3A1 1 0 0 0 13 4.586V3a1 1 0 0 0-1-1H4z" />
                </svg>
                Tasks
              </a>
            </li>
            {/* Add more navigation items as needed */}
          </ul>
        </nav>

        {/* User profile */}
        <div className="px-4 py-4 border-t">
          <div className="flex items-center">
            <img
              src="https://source.unsplash.com/random/40x40"
              alt="User avatar"
              className="h-8 w-8 rounded-full object-cover"
            />
            <div className="ml-3">
              <h2 className="text-sm font-semibold">John Doe</h2>
              <p className="text-xs text-gray-600">john.doe@example.com</p>
            </div>
          </div>
          <button className="mt-2 text-sm text-yellow-700 font-bold py-2 px-4 border border-transparent hover:border-yellow-300 rounded transition">
            Logout
          </button>
        </div>
      </div>

      {/* Mobile menu toggle button */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 bg-white shadow-md">
        <button
          onClick={toggleSidebar}
          className="block w-full py-2 text-center text-sm text-yellow-700 font-bold border-t hover:bg-gray-50 focus:outline-none"
        >
          {isOpen ? 'Close' : 'Menu'}
        </button>
      </div>
    </aside>
    </div>
  );
};

export default SidebarofDocs;
