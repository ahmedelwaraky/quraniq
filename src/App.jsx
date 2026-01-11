import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./modules/landing/pages/Home";
import Login from "./modules/auth/pages/Login.";
import NotFound from "./components/layout/NotFound";
import ChatPage from "./modules/chat/pages/ChatPage";
import DashboardLayout from "./modules/dashboard/pages/DashboardLayout";
import StatsPage from "./modules/dashboard/pages/StatsPage";
// import Home from "./modules/landing/pages/Home";
// import NotFound from "./components/layout/NotFound";
// import Login from "./modules/auth/pages/Login";
// import ChatPage from "./modules/chat/pages/ChatPage";
// // Dashboard Pages
// import DashboardLayout from "./modules/dashboard/pages/DashboardLayout";
// import StatsPage from "./modules/dashboard/pages/StatsPage";
// import GroupsPage from "./modules/dashboard/pages/GroupsPage";
// import MessagesPage from "./modules/dashboard/pages/MessagesPage";
// import EmailsPage from "./modules/dashboard/pages/EmailsPage";
// import AccountsPage from "./modules/dashboard/pages/AccountsPage";
// import OperationsPage from "./modules/dashboard/pages/OperationsPage";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/ChatPage" element={<ChatPage />} />

        {/* Admin Dashboard */}
         <Route path="/admin" element={<DashboardLayout />}>
          <Route index element={<StatsPage />} />
          <Route path="stats" element={<StatsPage />} />
          {/* <Route path="groups" element={<GroupsPage />} /> */}
          {/* <Route path="messages" element={<MessagesPage />} /> */}
          {/* <Route path="accounts" element={<AccountsPage />} /> */}
          {/* <Route path="emails" element={<EmailsPage />} /> */}
          {/* <Route path="operations" element={<OperationsPage />} /> */} */}
        </Route>

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
