// import React from "react";
// import { Routes, Route, Navigate, useLocation } from "react-router-dom";
// import { PageList } from "../../public/Pagelist";
// import Docs from "../Componens/Pages/Docs";
// import Blocks from "../Componens/Pages/Blocks";
// import EmailComponent from "../Componens/MailDashboards/Email/EmailComponent";
// import Dashboard from "../Componens/MailDashboards/BelowPages/Dashboard/Dashboard";
// import Login from "../Componens/MailDashboards/BelowPages/LoginForm";
// import Task from "../Componens/MailDashboards/BelowPages/Task/Task";
// import Cards from "../Componens/MailDashboards/BelowPages/Cards/Cards";
// import Components from "../Componens/Pages/Components";
// import Header from "../Componens/Header/Header";
// import Example from "../Componens/Pages/Example";
// import Thomos from "../Componens/Pages/Themes";

// const AppContent = ({ theme }) => {
//   const { pathname } = useLocation();

//   const hideHeaderRoutes = [
//     PageList.Docs,
//     PageList.Thomos,
//     PageList.Components,
//     PageList.Example,
//     PageList.Blocks,
//   ];

//   const shouldHideHeader = hideHeaderRoutes.includes(pathname);

//   return (
//     <>
//       {!shouldHideHeader && <Header theme={theme} />}
//       <div className={shouldHideHeader ? "" : "pt-24"}>
//         <Routes>
//           <Route path={PageList.Home} element={<Navigate to={PageList.Email} />} />
//           <Route path={PageList.Docs} element={<Docs />} />
//           <Route path={PageList.Blocks} element={<Blocks />} />
//           <Route path={PageList.Components} element={<Components />} />
//           <Route path={PageList.Example} element={<Example />} />
//           <Route path={PageList.Thomos} element={<Thomos />} />
//           <Route path={PageList.Email} element={<EmailComponent theme={theme} />} />
//           <Route path={PageList.Dashboard} element={<Dashboard theme={theme} />} />
//           <Route path={PageList.Form} element={<Login theme={theme} />} />
//           <Route path={PageList.Cards} element={<Cards theme={theme} />} />
//           <Route path={PageList.Task} element={<Task theme={theme} />} />
//         </Routes>
//       </div>
//     </>
//   );
// };

// export default AppContent;
