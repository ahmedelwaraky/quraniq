import { GraduationCap } from "lucide-react";
import React from "react";

export default function LoginHero() {
  return (
    <div className="relative flex flex-col items-center justify-center p-12 text-white w-full h-full bg-gradient-to-br from-teal-900 via-teal-800 to-cyan-900">
      {/* Decorative Icon */}
      <div className="mb-8">
        <div className="w-24 h-24 bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center">
          <GraduationCap className="w-12 h-12" />
        </div>
      </div>

      {/* Content */}
      <div className="text-center max-w-md">
        <h2 className="text-3xl font-bold mb-4">ابدأ رحلة التعلم</h2>
        <p className="text-teal-100 leading-relaxed mb-8">
          منصتنا تجمعك بأفضل المدرسين، في بيئة تعليمية آمنة وفعّالة تواصل فوري ومحتوى منظم لتحقيق أهدافك التعليمية.
        </p>

        {/* Feature Buttons */}
        <div className="grid grid-cols-2 gap-3">
          <button className="px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg font-medium transition-all border border-white/20">
            محتوى منظم
          </button>
          <button className="px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg font-medium transition-all border border-white/20">
            تواصل مباشر
          </button>
          <button className="px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg font-medium transition-all border border-white/20">
            بيئة آمنة
          </button>
          <button className="px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg font-medium transition-all border border-white/20">
            مجموعات دراسية
          </button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/5 rounded-full blur-2xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/5 rounded-full blur-3xl"></div>
    </div>
  );
}