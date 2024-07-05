import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { PageList } from "../../../public/Pagelist";
import Authentication from "../AuthentidatePages/Authentication/Authentication";
import Music from "../AuthentidatePages/Music/Music";
import Playground from "../AuthentidatePages/Playground/Playground";
import AuthRotes from "../../Auth/AuthRotes";
import Header from "../Header/Header";
import Navbar from "../Header/Navbar";
import EmailComponent from "../MailDashboards/Email/EmailComponent";
import Docs from "../Pages/Docs";
import Blocks from "../Pages/Blocks";
import Components from "../Pages/Components";
import Example from "../Pages/Example";
import Thomos from "../Pages/Themes";
import Login from "../MailDashboards/BelowPages/LoginForm";
import Dashboard from "../MailDashboards/BelowPages/Dashboard/Dashboard";
import Cards from "../MailDashboards/BelowPages/Cards/Cards";
import Task from "../MailDashboards/BelowPages/Task/Task";

const ChildofApp = ({ theme, themeChanger }) => {
  const location = useLocation();

  const hideHeaderRoutes = [
    PageList.Docs,
    PageList.Thomos,
    PageList.Components,
    PageList.Example,
    PageList.Blocks,
  ];

  const shouldShowHeader = !hideHeaderRoutes.includes(location.pathname);

  return (
    <div
      className={`min-h-screen ${
        theme === "dark" ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900"
      }`}
    >
      <Navbar theme={theme} themeChanger={themeChanger} />
      {shouldShowHeader && <Header theme={theme} />}

      <Routes>
        <Route path={"/"} element={<Navigate to={PageList.Email} />} />
        <Route path="/login" element={<Login theme={theme} />} />
        <Route path={PageList.Email} element={<EmailComponent theme={theme} />} />
        <Route path={PageList.Docs} element={<Docs />} />
        <Route path={PageList.Blocks} element={<Blocks />} />
        <Route path={PageList.Components} element={<Components />} />
        <Route path={PageList.Example} element={<Example />} />
        <Route path={PageList.Thomos} element={<Thomos />} />
        <Route path={PageList.Dashboard} element={<Dashboard theme={theme} />} />
        <Route path={PageList.Cards} element={<Cards theme={theme} />} />
        <Route path={PageList.Task} element={<Task theme={theme} />} />
        <Route element={<AuthRotes theme={theme} />}>
          <Route path={PageList.Authentication} element={<Authentication theme={theme} />} />
          <Route path={PageList.Music} element={<Music theme={theme} />} />
          <Route path={PageList.Playground} element={<Playground theme={theme} />} />
        </Route>
        <Route path="/home/authentication" element={<Navigate to={PageList.Home} />} />
      </Routes>
    </div>
  );
};

export default ChildofApp;
