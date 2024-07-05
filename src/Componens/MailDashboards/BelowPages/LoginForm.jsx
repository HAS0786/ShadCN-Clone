import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Auth/AuthContext";

const Login = ({ theme }) => {
  const {  setToken } = useContext(AuthContext);
  const router = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    // Fetch email and password from localStorage if available
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");
    if (storedEmail && storedPassword) {
      setEmail(storedEmail);
      setPassword(storedPassword);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Store email and password in localStorage
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    // Simulate authentication logic (replace with actual authentication)
    setToken(email + password);

    // Redirect after successful login
    router("/home/authentication");

    console.log("Logged in");
  };

  return (
    <div className="flex justify-center">
      <div
        className={`max-w-md py-4 px-8 shadow-lg rounded-lg border-2  ${
          theme === "dark"
            ? "bg-gray-800 text-gray-600 border-gray-600"
            : "bg-gray-100 text-gray-800 border-gray-300"
        }`}
      >
        <h2 className="text-center text-2xl font-bold mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-semibold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border rounded-md outline-none focus:border-blue-500"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-semibold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border rounded-md outline-none focus:border-blue-500"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
