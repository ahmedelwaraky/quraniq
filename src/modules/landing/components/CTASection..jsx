import { ArrowLeft } from "lucide-react";
import React from "react";

export default function CTASection() {
  return (
    <section
      className="bg-gradient-to-b from-gray-50 via-white to-gray-100 py-20 relative overflow-hidden"
      dir="rtl"
    >
      {/* Decorative Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-teal-300/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-cyan-300/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-emerald-300/10 rounded-full blur-3xl"></div>

      <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
        {/* Badge */}
        <div className="mb-6 animate-fade-in">
          <span className="inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium border border-emerald-200">
            ابدأ رحلتك التعليمية اليوم
          </span>
        </div>

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
          انضم إلى آلاف الطلاب الناجحين
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in">
          لا تفوّت فرصة التعلم مع أفضل المدرسين. انضم الآن وابدأ رحلتك نحو
          التفوق والنجاح.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16 animate-fade-in">
          {/* WhatsApp */}
          <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-10 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-emerald-500/50 hover:scale-105 flex items-center gap-2 group">
            <svg
              className="w-5 h-5 group-hover:scale-110 transition-transform"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            تواصل معنا عبر واتساب
          </button>

          {/* Learn More */}
          <button className="bg-white hover:bg-gray-50 text-gray-800 px-10 py-4 rounded-xl font-bold transition-all border-2 border-gray-200 hover:border-gray-300 flex items-center gap-2 hover:scale-105">
            <span>اعرف المزيد</span>
            <ArrowLeft className="w-5 h-5" />
          </button>
        </div>

        {/* Trust */}
        <div className="text-center mb-6 animate-fade-in">
          <p className="text-gray-500 text-sm mb-4">موثوق من قبل</p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-lg transition-all hover:scale-105">
            <div className="text-4xl font-bold text-emerald-600 mb-2">+500</div>
            <div className="text-gray-600">طالب</div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-lg transition-all hover:scale-105">
            <div className="text-4xl font-bold text-teal-600 mb-2">+50</div>
            <div className="text-gray-600">مدرس</div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-lg transition-all hover:scale-105">
            <div className="text-4xl font-bold text-cyan-600 mb-2">98%</div>
            <div className="text-gray-600">رضا</div>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}
