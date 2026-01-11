import { Users } from "lucide-react";
import React from "react";

export default function StatsCard() {

    <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
  return (
    <div className="max-w-2xl mx-auto p-8" dir="rtl">
      <div className="relative">
        <div className="bg-gradient-to-br from-slate-800 via-slate-700 to-teal-700 rounded-3xl p-12 text-white relative overflow-hidden shadow-2xl">
          {/* Decorative circles - matching image */}
          <div className="absolute top-10 right-10 w-24 h-24 bg-teal-600/30 rounded-full"></div>
          <div className="absolute bottom-10 left-10 w-32 h-32 bg-slate-600/20 rounded-2xl rotate-45"></div>
          <div className="absolute top-1/2 left-20 w-20 h-20 bg-teal-700/40 rounded-full"></div>

          <div className="relative z-10">
            <div className="text-8xl font-bold mb-4 text-slate-300/60">+5</div>
            <h3 className="text-2xl font-bold mb-2">سنوات من التميز</h3>
            <p className="text-slate-200/70 mb-8">في خدمة التعليم</p>
          </div>

          {/* Floating Card */}
          <div className="absolute bottom-6 right-6 bg-white rounded-2xl p-5 text-gray-900 shadow-xl animate-float">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                <Users className="w-5 h-5 text-teal-600" />
              </div>
              <span className="font-bold text-lg">50+ مدرس</span>
            </div>
            <p className="text-gray-600 text-sm mr-13">محترفين ومعتمدين</p>
          </div>
        </div>
      </div>

      
    </div>
  );
}
