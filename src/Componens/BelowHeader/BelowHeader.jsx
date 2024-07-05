import React, { useContext, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { PageList } from "../../../public/Pagelist";
import { AuthContext } from "../../Auth/AuthContext";

const BelowHeader = () => {
  const { token, setToken } = useContext(AuthContext);
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  const handleLogout = () => {
    setToken("");
  };

  const handleLinkClick = (page) => {
    setActiveLink(page);
  };

  return (
    <div className="text-gray-400 overflow-x-auto text-lg font-semibold mb-1 ml-5">
      <div className="flex gap-5 whitespace-nowrap">
        <span>
          <Link
            to={PageList.Email}
            onClick={() => handleLinkClick(PageList.Email)}
            className={activeLink === PageList.Email ? " bg-gray-800 rounded-md px-2" : ""}
          >
            Email
          </Link>
        </span>
        <span>
          <Link
            to={PageList.Dashboard}
            onClick={() => handleLinkClick(PageList.Dashboard)}
            className={activeLink === PageList.Dashboard ? " bg-gray-800 rounded-md px-2" : ""}
          >
            Dashboard
          </Link>
        </span>
        <span>
          <Link
            to={PageList.Cards}
            onClick={() => handleLinkClick(PageList.Cards)}
            className={activeLink === PageList.Cards ? " bg-gray-800 rounded-md px-2" : ""}
          >
            Cards
          </Link>
        </span>
        <span>
          <Link
            to={PageList.Task}
            onClick={() => handleLinkClick(PageList.Task)}
            className={activeLink === PageList.Task ? " bg-gray-800 rounded-md px-2" : ""}
          >
            Tasks
          </Link>
        </span>
        {!token ? (
          <button
            onClick={() => handleLinkClick(PageList.Form)}
            className={activeLink === PageList.Form ? " bg-gray-800 rounded-md px-2" : ""}
          >
            <Link to={"/login"}>Login</Link>
          </button>
        ) : (
          <button onClick={handleLogout}>Logout</button>
        )}
        <span>
          <Link
            to={PageList.Playground}
            onClick={() => handleLinkClick(PageList.Playground)}
            className={activeLink === PageList.Playground ? " bg-gray-800 rounded-md px-2" : ""}
          >
            Playground
          </Link>
        </span>
        <span>
          <Link
            to={PageList.Authentication}
            onClick={() => handleLinkClick(PageList.Authentication)}
            className={activeLink === PageList.Authentication ? " bg-gray-800 rounded-md px-2" : ""}
          >
            Authentication
          </Link>
        </span>
        <span>
          <Link
            to={PageList.Music}
            onClick={() => handleLinkClick(PageList.Music)}
            className={activeLink === PageList.Music ? " bg-gray-800 rounded-md px-2" : ""}
          >
            Music
          </Link>
        </span>
      </div>
    </div>
  );
};

export default BelowHeader;
