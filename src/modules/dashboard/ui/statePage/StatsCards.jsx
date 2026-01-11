import React from "react";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  ActivityIcon,
  MessagesIcon,
  UsersIcon,
  GraduationCapIcon, // محتاج تضيف الأيقونات دي
} from "../../../../components/ui/SvgIcons/SvgIcons";

// اعمل object للـ Icons
const Icons = {
  Activity: ActivityIcon,
  Messages: MessagesIcon,
  Users: UsersIcon,
  GraduationCap: GraduationCapIcon,
};

export default function StatsCards({ stats }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => {
        const IconComponent = Icons[stat.icon]; // دلوقتي هيشتغل
        return (
          <div
            key={index}
            className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div
                className={`w-12 h-12 rounded-lg flex items-center justify-center ${stat.bgColor}`}
              >
                <div className={stat.iconColor}>
                  <IconComponent />
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
            <p className="text-3xl font-bold text-gray-900 mb-2">
              {stat.value}
            </p>
            <div className="flex items-center gap-1">
              {stat.changeType === "positive" ? (
                <div className="text-green-600 flex items-center gap-1">
                  <ArrowUpIcon />
                  <span className="text-sm font-medium">{stat.change}</span>
                </div>
              ) : (
                <div className="text-red-600 flex items-center gap-1">
                  <ArrowDownIcon />
                  <span className="text-sm font-medium">{stat.change}</span>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
