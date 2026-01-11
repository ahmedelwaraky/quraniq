import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
  ChatIcon,
  DashboardIcon,
  IconWrapper,
  ListIcon,
  LogoutIcon,
  MailIcon,
  SettingsIcon,
  UserCogIcon,
  UsersIcon,
} from "../../../components/ui/SvgIcons/SvgIcons";

export default function Sidebar() {
  const menuItems = [
    { to: "stats", label: "الإحصائيات", icon: DashboardIcon },
    { to: "groups", label: "إدارة الجروبات", icon: UsersIcon },
    { to: "messages", label: "مراقبة الشات", icon: ChatIcon },
    { to: "accounts", label: "إدارة الحسابات", icon: UserCogIcon },
    { to: "emails", label: "الرسائل المتقدمة", icon: MailIcon },
    { to: "operations", label: "سجل العمليات", icon: ListIcon },
  ];

  return (
    <aside
      className="w-64 bg-white border-l border-gray-200 min-h-screen sticky top-0"
      dir="rtl"
    >
      {/* Logo */}
      <div className="p-6 border-b border-gray-200">
        <h2 className="font-bold text-gray-900">لوحة التحكم</h2>
        <p className="text-xs text-gray-500">Super Admin</p>
      </div>

      {/* Menu */}
      <nav className="p-4 space-y-1">
        <p className="text-xs font-semibold text-gray-400 px-3 mb-2">
          القائمة الرئيسية
        </p>

        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors
                ${
                  isActive
                    ? "bg-blue-50 text-blue-600 font-medium"
                    : "text-gray-700 hover:bg-gray-50"
                }`
              }
            >
              <IconWrapper>
                <Icon />
              </IconWrapper>
              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </nav>

      {/* Bottom Actions */}
      <div className="absolute bottom-0 w-64 p-4 border-t border-gray-200 bg-white space-y-1">
        <button className="w-full flex items-center gap-3 px-3 py-2.5 text-gray-700 hover:bg-gray-50 rounded-lg">
          <IconWrapper>
            <SettingsIcon />
          </IconWrapper>
          <span>الإعدادات</span>
        </button>

        <button className="w-full flex items-center gap-3 px-3 py-2.5 text-red-600 hover:bg-red-50 rounded-lg">
          <IconWrapper>
            <LogoutIcon />
          </IconWrapper>
          <Link
            to="/"
            className="flex items-center gap-2 text-red-600 hover:underline"
          >
            <span>تسجيل الخروج</span>
          </Link>
        </button>
      </div>
    </aside>
  );
}
