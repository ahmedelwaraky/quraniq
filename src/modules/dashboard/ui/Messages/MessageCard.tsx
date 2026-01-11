// ui/Messages/MessageCard.tsx
import React, { useState } from "react";
import type { MessageCardProps } from "../../interface/MonitorInterface/Monitor.types";

export default function MessageCard({
  message,
  onWarn,
  onMute,
  onDelete,
}: MessageCardProps) {
  const [showMenu, setShowMenu] = useState(false);
  const isTeacher = message.senderRole === "teacher";

  const handleAction = (action: string, actionFn: (id: string) => void) => {
    actionFn(message.id);
    setShowMenu(false);
  };

  return (
    <div
      className={`rounded-lg mb-3 border transition-all ${
        message.isUrgent
          ? "bg-red-50 border-red-300 shadow-md"
          : "bg-white border-gray-200 hover:shadow-md"
      }`}
    >
      <div className="p-4">
        <div className="flex items-start gap-3">
          {/* Avatar */}
          <div
            className={`w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 ${
              isTeacher
                ? "bg-gradient-to-br from-blue-400 to-blue-600"
                : "bg-gradient-to-br from-gray-300 to-gray-400"
            }`}
          >
            <span className="text-sm font-bold text-white">
              {message.avatar || message.sender.charAt(0)}
            </span>
          </div>

          {/* Message Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <span className="font-bold text-gray-900">{message.sender}</span>
              <span
                className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                  isTeacher
                    ? "bg-blue-100 text-blue-700"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                {isTeacher ? "مدرس" : "طالب"}
              </span>
              {message.isUrgent && (
                <span className="text-xs px-2.5 py-1 rounded-full bg-red-500 text-white font-bold flex items-center gap-1">
                  <svg
                    className="w-3 h-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  اإبلاغ
                </span>
              )}
              <span className="text-xs text-gray-500">{message.timestamp}</span>
            </div>
            <p className="text-gray-800 leading-relaxed">{message.content}</p>
          </div>

          {/* Actions Menu */}
          <div className="relative">
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <svg
                className="w-5 h-5 text-gray-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
              </svg>
            </button>

            {showMenu && (
              <>
                <div
                  className="fixed inset-0 z-10"
                  onClick={() => setShowMenu(false)}
                />
                <div className="absolute left-0 mt-2 w-52 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-20">
                  <button
                    onClick={() => handleAction("warn", onWarn)}
                    className="w-full text-right px-4 py-2.5 text-sm hover:bg-yellow-50 flex items-center gap-3 transition-colors"
                  >
                    <svg
                      className="w-5 h-5 text-yellow-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      />
                    </svg>
                    <span className="text-gray-700">إرسال تحذير</span>
                  </button>
                  <button
                    onClick={() => handleAction("mute", onMute)}
                    className="w-full text-right px-4 py-2.5 text-sm hover:bg-blue-50 flex items-center gap-3 transition-colors"
                  >
                    <svg
                      className="w-5 h-5 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
                      />
                    </svg>
                    <span className="text-gray-700">كتم المستخدم</span>
                  </button>
                  <div className="border-t border-gray-200 my-1" />
                  <button
                    onClick={() => handleAction("delete", onDelete)}
                    className="w-full text-right px-4 py-2.5 text-sm hover:bg-red-50 flex items-center gap-3 transition-colors"
                  >
                    <svg
                      className="w-5 h-5 text-red-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                    <span className="text-red-600 font-medium">
                      حذف الرسالة
                    </span>
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
