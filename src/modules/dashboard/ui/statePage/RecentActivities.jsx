import React from "react";
import { ActivityIcon } from "../../../../components/ui/SvgIcons/SvgIcons";

export default function RecentActivities({activities}) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <ActivityIcon />
          <h3 className="text-lg font-bold text-gray-900">آخر الأنشطة</h3>
        </div>
      </div>
      <div className="divide-y divide-gray-200">
        {activities.map((activity, index) => (
          <div key={index} className="p-4 hover:bg-gray-50 transition-colors">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900 mb-1">
                      {activity.action}
                    </p>
                    <p className="text-sm text-gray-600">
                      بواسطة: {activity.user}
                    </p>
                  </div>
                </div>
              </div>
              <span className="text-xs text-gray-500 whitespace-nowrap">
                {activity.time}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
