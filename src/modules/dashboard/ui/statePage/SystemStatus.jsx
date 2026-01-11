import React from "react";
import {
  ActivityIcon,
  CheckIcon,
} from "../../../../components/ui/SvgIcons/SvgIcons";

export default function SystemStatus({status}) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <ActivityIcon />
          <h3 className="text-lg font-bold text-gray-900">حالة النظام</h3>
        </div>
      </div>
      <div className="p-6 space-y-6">
        {status.map((item, index) => (
          <div key={index}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">
                {item.label}
              </span>
              {item.type === "badge" && (
                <span
                  className={`px-3 py-1 text-xs font-medium rounded-full flex items-center gap-1.5 ${item.badgeClass}`}
                >
                  {item.icon && <CheckIcon />}
                  {item.value}
                </span>
              )}
              {item.type === "text" && (
                <span className="text-sm font-semibold text-gray-900">
                  {item.value}
                </span>
              )}
            </div>
            {item.showBar && (
              <div className="w-full bg-gray-100 rounded-full h-2 mt-2">
                <div
                  className="bg-green-500 h-2 rounded-full transition-all"
                  style={{ width: item.value }}
                ></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
