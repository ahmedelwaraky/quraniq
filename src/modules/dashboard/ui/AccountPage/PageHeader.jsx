import React from "react";
import { SearchIcon, UsersIcon } from "../../../../components/ui/SvgIcons/SvgIcons";

export default function PageHeader({ onCreateAccount }) {
  return (
    <div className="flex flex-col-reverse sm:flex-row-reverse justify-between items-stretch sm:items-center mb-6 gap-4">
      <button
        onClick={onCreateAccount}
        className="bg-slate-800 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-slate-700 transition whitespace-nowrap"
      >
        <UsersIcon size={20} />
        <span>إنشاء حساب جديد</span>
      </button>
      
      <div className="flex-1 w-full sm:max-w-6xl">
        <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
          <div className="relative">
            <input
              type="text"
              placeholder="البحث بالاسم أو الإيميل أو الهاتف..."
              className="w-full pr-10 pl-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              dir="rtl"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
              <SearchIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};