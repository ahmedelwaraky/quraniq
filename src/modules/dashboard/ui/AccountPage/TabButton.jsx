import React from "react";
import { IconWrapper } from "../../../../components/ui/SvgIcons/SvgIcons";

export default function TabButton({ active, icon: Icon, label, count, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex-1 flex items-center justify-center gap-3 py-4 rounded-lg transition ${
        active ? 'bg-white shadow-sm' : 'bg-gray-50 hover:bg-gray-100'
      }`}
    >
      <IconWrapper size={20} className="text-gray-600" />
      <span className="font-medium text-gray-700">{label}</span>
      <span className="text-gray-500">({count})</span>
    </button>
  );
};