import { Filter, Plus } from "lucide-react";
import React from "react";

export default function PageHeader({ onAddAnnouncement, pinnedCount }) {
  return (
    <div className="flex justify-between items-center mb-6">
      <button
        onClick={onAddAnnouncement}
        className="bg-slate-800 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-slate-700 transition"
      >
        <Plus size={20} />
        <span>إضافة رسالة جديدة</span>
      </button>

      <div className="flex items-center gap-3">
        <div className="text-right">
          <h2 className="text-lg font-bold text-gray-800">الرسائل المثبتة</h2>
          <p className="text-sm text-gray-500">{pinnedCount} رسالة نشطة</p>
        </div>
        <button className="p-2 hover:bg-gray-100 rounded-lg transition">
          <Filter size={20} className="text-gray-600" />
        </button>
      </div>
    </div>
  );
}
