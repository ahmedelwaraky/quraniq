import React from "react";
import {
  MoreVerticalIcon,
  UsersIcon,
} from "../../../../components/ui/SvgIcons/SvgIcons";
import { Calendar, Clock } from "lucide-react";

export default function AnnouncementCard({ announcement }) {
  const statusColors = {
    نشط: 'border-t-green-500',
    منتهي: 'border-t-gray-400',
    معدول: 'border-t-blue-500'
  };

  const statusBadgeColors = {
    نشط: 'bg-green-100 text-green-700',
    منتهي: 'bg-gray-100 text-gray-700',
    معدول: 'bg-blue-100 text-blue-700'
  };

  const audienceColors = {
    الجميع: 'bg-purple-50 text-purple-700',
    المدرسين: 'bg-orange-50 text-orange-700',
    الطلاب: 'bg-blue-50 text-blue-700'
  };

  return (
    <div className={`bg-white rounded-lg shadow-sm border-t-4 ${statusColors[announcement.status]} p-6 hover:shadow-md transition`}>
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-800 mb-2">{announcement.title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{announcement.description}</p>
        </div>
        <button className="text-gray-400 hover:text-gray-600 mr-2">
          <MoreVerticalIcon size={20} />
        </button>
      </div>

      <div className="flex justify-between items-center pt-4 border-t border-gray-100">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Calendar size={16} />
            <span>من {announcement.startDate}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Clock size={16} />
            <span>إلى {announcement.endDate}</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusBadgeColors[announcement.status]}`}>
            {announcement.status}
          </span>
          <div className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${audienceColors[announcement.audience]}`}>
            <UsersIcon size={14} />
            <span>{announcement.audience}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
