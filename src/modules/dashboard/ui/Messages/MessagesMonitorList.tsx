// ui/Messages/MessagesMonitorList.tsx
import React from "react";
import MessageCard from "./MessageCard";
import type { MessagesMonitorListProps } from "../../interface/MonitorInterface/Monitor.types";

export default function MessagesMonitorList({
  messages,
  onWarn,
  onMute,
  onDelete,
}: MessagesMonitorListProps) {
  if (messages.length === 0) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          <svg
            className="w-16 h-16 text-gray-300 mx-auto mb-4"
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
          <p className="text-gray-500 text-lg">لا توجد رسائل في هذه المجموعة</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto p-5 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        {messages.map((message) => (
          <MessageCard
            key={message.id}
            message={message}
            onWarn={onWarn}
            onMute={onMute}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
}