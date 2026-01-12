import React from "react";
import { GraduationCapIcon, MoreVerticalIcon, UsersIcon } from "../../../../components/ui/SvgIcons/SvgIcons";

export default function AccountCard ({ name, email, phone, status, attendanceCount, type })  {
  const isActive = status === 'نشط';
  const isSuspended = status === 'معطل';
  
  const statusStyles = {
    نشط: 'bg-green-100 text-green-700',
    معطل: 'bg-red-100 text-red-700',
    غائب: 'bg-yellow-100 text-yellow-700'
  };

  const borderColors = {
    نشط: 'border-t-green-500',
    معطل: 'border-t-red-500',
    غائب: 'border-t-yellow-500'
  };

  return (
    <div className={`bg-white rounded-lg shadow-sm border-t-4 ${borderColors[status]} p-6 hover:shadow-md transition`}>
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center">
            <GraduationCapIcon className="text-slate-600" size={24} />
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 text-lg">{name}</h3>
          </div>
        </div>
        <button className="text-gray-400 hover:text-gray-600">
          <MoreVerticalIcon size={20} />
        </button>
      </div>

      <div className="space-y-2 mb-4">
        <div className="flex items-center gap-2 text-gray-600">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span className="text-sm">{email}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span className="text-sm">{phone}</span>
        </div>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <span className={`px-4 py-1.5 rounded-full text-sm font-medium ${statusStyles[status]}`}>
          {status}
        </span>
        <div className="flex items-center gap-2 text-gray-600">
          <UsersIcon size={16} />
          <span className="text-sm">حضور {attendanceCount}</span>
        </div>
      </div>
    </div>
  );
};