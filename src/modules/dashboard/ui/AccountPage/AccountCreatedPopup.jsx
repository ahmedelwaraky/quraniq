import { CheckCircle, Copy } from "lucide-react";
import React, { useState } from "react";

export default function AccountCreatedPopup({ isOpen, accountData, onClose }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getAccountTypeLabel = (type) => {
    if (type === "student") return "طالب";
    if (type === "teacher") return "مدرس";
    return "أدمن";
  };

  if (!isOpen || !accountData) return null;

  return (
    <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-md transform animate-scaleIn">
        {/* رأس النجاح */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-6 rounded-t-2xl text-white text-center">
          <div className="flex justify-center mb-3">
            <div className="bg-white rounded-full p-3">
              <CheckCircle className="text-green-500" size={40} />
            </div>
          </div>
          <h2 className="text-2xl font-bold mb-1">تم إنشاء الحساب بنجاح!</h2>
          <p className="text-green-50">تم تفعيل الحساب وجاهز للاستخدام</p>
        </div>

        {/* محتوى البيانات */}
        <div className="p-6 space-y-4">
          {/* نوع الحساب */}
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <p className="text-sm text-blue-600 mb-1">نوع الحساب</p>
            <p className="font-bold text-blue-800 text-lg">
              {getAccountTypeLabel(accountData.accountType)}
            </p>
          </div>

          {/* الاسم */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex justify-between items-center">
              <div className="flex-1">
                <p className="text-sm text-gray-600 mb-1">الاسم الكامل</p>
                <p className="font-semibold text-gray-800">
                  {accountData.name}
                </p>
              </div>
            </div>
          </div>

          {/* البريد الإلكتروني */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex justify-between items-center">
              <div className="flex-1">
                <p className="text-sm text-gray-600 mb-1">البريد الإلكتروني</p>
                <p className="font-semibold text-gray-800 break-all">
                  {accountData.email}
                </p>
              </div>
              <button
                onClick={() => copyToClipboard(accountData.email)}
                className="mr-2 text-blue-600 hover:text-blue-700 p-2 hover:bg-blue-50 rounded transition"
                title="نسخ البريد"
              >
                <Copy size={18} />
              </button>
            </div>
          </div>

          {/* كلمة المرور */}
          <div className="bg-amber-50 p-4 rounded-lg border-2 border-amber-300">
            <div className="flex justify-between items-center">
              <div className="flex-1">
                <p className="text-sm text-amber-700 mb-1 font-medium">
                  كلمة المرور
                </p>
                <p className="font-bold text-amber-900 text-lg tracking-wider">
                  {accountData.password}
                </p>
              </div>
              <button
                onClick={() => copyToClipboard(accountData.password)}
                className="mr-2 text-amber-700 hover:text-amber-800 p-2 hover:bg-amber-100 rounded transition"
                title="نسخ كلمة المرور"
              >
                <Copy size={18} />
              </button>
            </div>
          </div>

          {/* رسالة تنبيه */}
          <div className="bg-yellow-50 border-r-4 border-yellow-400 p-4 rounded">
            <p className="text-sm text-yellow-800">
              <span className="font-semibold">⚠️ تنبيه:</span> احفظ كلمة المرور
              في مكان آمن. لن تتمكن من رؤيتها مرة أخرى!
            </p>
          </div>

          {/* رسالة النسخ */}
          {copied && (
            <div className="bg-green-50 border border-green-300 p-3 rounded-lg text-center animate-bounce">
              <p className="text-green-700 font-medium">✓ تم النسخ بنجاح!</p>
            </div>
          )}
        </div>

        {/* زر الإغلاق */}
        <div className="p-6 pt-0">
          <button
            onClick={onClose}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition font-medium shadow-lg"
          >
            حفظت البيانات، أغلق النافذة
          </button>
        </div>
      </div>
    </div>
  );
}