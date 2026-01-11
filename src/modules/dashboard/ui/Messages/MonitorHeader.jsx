// ui/Messages/MonitorHeader.tsx
import React from "react";

export default function MonitorHeader({ groupName, messagesCount }) {
  return (
    <div className="bg-white border-b border-gray-200 p-5 shadow-sm">
      <div className="flex items-center justify-between max-w-7xl">
        <div className="flex items-center gap-3">
          <div className="bg-blue-100 p-2 rounded-lg">
            <svg
              className="w-6 h-6 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900">{groupName}</h2>
            <p className="text-sm text-gray-500">{messagesCount} رسالة</p>
          </div>
        </div>
      </div>
    </div>
  );
}