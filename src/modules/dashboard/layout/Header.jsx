import { useState } from "react";
import { useLocation } from "react-router-dom";

/* ===== Icons (Inline SVG) ===== */

const ChevronRightIcon = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="m9 18 6-6-6-6" />
  </svg>
);

const BellIcon = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
  </svg>
);

/* ===== Header Component ===== */

export default function Header({ user }) {
  const [showNotifications, setShowNotifications] = useState(false);
  const location = useLocation();

  // تحديد عنوان الصفحة حسب الـ route
  const getPageTitle = () => {
    const path = location.pathname.split('/').pop();
    
    const pageTitles = {
      'stats': 'الإحصائيات',
      'groups': 'إدارة الجروبات',
      'messages': 'مراقبة الشات',
      'accounts': 'إدارة الحسابات',
      'pinned-messages': 'الرسائل المثبتة',
      'operations': 'سجل العمليات',
    };

    return pageTitles[path] || 'لوحة التحكم';
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
      <div className="flex items-center justify-between px-6 py-4">
        
        {/* Page Title */}
        <div className="flex items-center gap-3">
          <button className="text-gray-400 hover:text-gray-600">
            <ChevronRightIcon className="w-5 h-5" />
          </button>
          <h1 className="text-xl font-bold text-gray-900">{getPageTitle()}</h1>
        </div>

        {/* User Actions */}
        <div className="flex items-center gap-4">
          
          {/* Notifications */}
          <div className="relative">
            <button
              onClick={() => setShowNotifications((prev) => !prev)}
              className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
            >
              <BellIcon className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
            </button>

            {showNotifications && (
              <div className="absolute left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 p-4">
                <h3 className="font-semibold mb-2">الإشعارات</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>لا توجد إشعارات جديدة</p>
                </div>
              </div>
            )}
          </div>

          {/* User Profile */}
          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="text-sm font-semibold text-gray-900">
                {user?.name || "Qurainiq Academy"}
              </p>
              <p className="text-xs text-gray-500">
                {user?.role || "Administrator"}
              </p>
            </div>

            <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
              {(user?.name || "A").charAt(0)}
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}