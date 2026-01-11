// ui/Messages/MessageCard.jsx
import { useState } from "react";

export default function MessageCard({ message, onWarn, onMute, onDelete }) {
  const [showMenu, setShowMenu] = useState(false);
  const isTeacher = message.senderRole === "teacher";

  const handleAction = (actionFn) => {
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
                <span className="text-xs px-2.5 py-1 rounded-full bg-red-500 text-white font-bold">
                  إبلاغ
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
              className="p-1.5 hover:bg-gray-100 rounded-lg"
            >
              ⋮
            </button>

            {showMenu && (
              <>
                <div
                  className="fixed inset-0 z-10"
                  onClick={() => setShowMenu(false)}
                />

                <div className="absolute left-0 mt-2 w-52 bg-white rounded-lg shadow-xl border z-20">
                  <button
                    onClick={() => handleAction(onWarn)}
                    className="w-full px-4 py-2 hover:bg-yellow-50 text-right"
                  >
                    إرسال تحذير
                  </button>

                  <button
                    onClick={() => handleAction(onMute)}
                    className="w-full px-4 py-2 hover:bg-blue-50 text-right"
                  >
                    كتم المستخدم
                  </button>

                  <div className="border-t my-1" />

                  <button
                    onClick={() => handleAction(onDelete)}
                    className="w-full px-4 py-2 hover:bg-red-50 text-red-600 text-right"
                  >
                    حذف الرسالة
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
