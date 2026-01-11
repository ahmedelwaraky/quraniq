import { Outlet } from "react-router-dom";
import Sidebar from "../layout/Sidebar";
import Header from "../layout/Header";


export default function DashboardLayout({ user }) {
  return (
    <div className="flex min-h-screen bg-gray-50" dir="rtl">
      
      {/* Sidebar */}
      <Sidebar />

      {/* Content */}
      <div className="flex-1 flex flex-col">
        <Header user={user} />

        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>

    </div>
  );
}
