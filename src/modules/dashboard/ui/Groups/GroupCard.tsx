import React, { useState } from 'react';
import { MoreVerticalIcon, TeacherIcon, UsersIcon } from '../../../../components/ui/SvgIcons/SvgIcons';
import type { GroupCardProps } from '../../interface/GroupInterface/Group.types';

export default function GroupCard({ group }: GroupCardProps) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
      {/* Colored Top Border */}
      <div className={`h-1 ${group.borderColor}`}></div>

      <div className="p-6">
        {/* Header with Title and Menu */}
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-lg font-bold text-gray-900 flex-1">{group.name}</h3>
          <div className="relative">
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="p-1 hover:bg-gray-100 rounded-md text-gray-600"
            >
              <MoreVerticalIcon />
            </button>
            {showMenu && (
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-10">
                <button className="w-full text-right px-4 py-2 text-sm hover:bg-gray-100">
                  عرض التفاصيل
                </button>
                <button className="w-full text-right px-4 py-2 text-sm hover:bg-gray-100">
                  تعديل
                </button>
                <button className="w-full text-right px-4 py-2 text-sm text-red-600 hover:bg-gray-100">
                  حذف
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Teacher Info */}
        <div className="flex items-center gap-2 mb-3 text-gray-600">
          <TeacherIcon />
          <span className="text-sm">{group.teacher}</span>
        </div>

        {/* Students Count */}
        <div className="flex items-center gap-2 mb-4 text-gray-600">
          <UsersIcon />
          <span className="text-sm">{group.studentsCount} طالب</span>
        </div>

        {/* Status Badge */}
        <div className="mb-4">
          <span
            className={`px-3 py-1 text-xs font-medium rounded-full ${
              group.status === "active"
                ? "bg-green-100 text-green-700"
                : "bg-yellow-100 text-yellow-700"
            }`}
          >
            {group.status === "active" ? "نشط" : "معطل"}
          </span>
        </div>

        {/* Members Avatars */}
        <div className="flex items-center gap-2 mb-4">
          {group.members.slice(0, 4).map((member, index) => (
            <div
              key={index}
              className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-semibold text-gray-700 border-2 border-white"
            >
              {member}
            </div>
          ))}
          {group.members.length > 4 && (
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-xs font-semibold text-blue-700 border-2 border-white">
              +{group.members.length - 4}
            </div>
          )}
        </div>

        {/* Footer Info */}
        <div className="pt-4 border-t border-gray-200 text-xs text-gray-500">
          <div className="flex items-center justify-between">
            <span>تاريخ الإنشاء: {group.createdAt}</span>
            <span>{group.messagesCount} رسالة</span>
          </div>
        </div>
      </div>
    </div>
  );
}