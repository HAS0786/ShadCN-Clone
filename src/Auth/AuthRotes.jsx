import React, { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";
// import { AuthContext } from "../../context/AuthContext";

const AuthRotes = ({theme}) => {
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  return (
    <div className="flex">
      <div className={`w-[20vw] ${ theme === "dark"
            ? "bg-gray-700 text-gray-300"
            : "bg-gray-200 text-gray-800"}`}>
        <h1>Auth Pages</h1>
      </div>
      <div className={`w-[80vw] ${ theme === "dark"
            ? "bg-gray-800 text-gray-600"
            : "bg-gray-100 text-gray-800"}`}>
        <Outlet />
      </div>
    </div>
  );
};

export default AuthRotes;
