import {
  BookOpen,
  Clock,
  MessageCircle,
  Shield,
  Users,
  Video,
} from "lucide-react";
import React from "react";

export default function FeaturesSection() {
  return (
    <section
      className="bg-gradient-to-b from-slate-900 via-teal-900 to-slate-900 py-20 relative overflow-hidden"
      dir="rtl"
    >
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-4 animate-fade-in">
          <span className="inline-block bg-teal-500/20 text-teal-300 px-4 py-1.5 rounded-full text-sm font-medium border border-teal-500/30 hover:bg-teal-500/30 transition-all">
            المميزات
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          كل ما تحتاجه للتعلم بفعالية
        </h2>

        <p className="text-teal-100/70 text-center text-lg max-w-3xl mx-auto mb-16 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          نوفر لك مجموعة شاملة من الأدوات والمميزات التي تجعل تجربة التعلم ممتعة
          وفعالة ومُثمرة.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-slate-800/40 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:shadow-teal-500/30 transition-all duration-500 hover:-translate-y-2 border border-teal-500/20 hover:border-teal-500/40 animate-slide-up group" style={{ animationDelay: '0.3s' }}>
            <div className="bg-teal-500/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6 ml-auto border border-teal-500/30 group-hover:bg-teal-500/30 group-hover:scale-110 transition-all duration-300">
              <Video className="w-7 h-7 text-teal-400 group-hover:text-teal-300" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 text-right">
              تعليم مباشر
            </h3>
            <p className="text-teal-100/60 text-right leading-relaxed">
              دروس تفاعلية مباشرة مع المدرسين في الوقت الحقيقي
            </p>
          </div>

          <div className="bg-slate-800/40 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:shadow-emerald-500/30 transition-all duration-500 hover:-translate-y-2 border border-teal-500/20 hover:border-emerald-500/40 animate-slide-up group" style={{ animationDelay: '0.4s' }}>
            <div className="bg-emerald-500/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6 ml-auto border border-emerald-500/30 group-hover:bg-emerald-500/30 group-hover:scale-110 transition-all duration-300">
              <MessageCircle className="w-7 h-7 text-emerald-400 group-hover:text-emerald-300" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 text-right">
              تواصل فوري
            </h3>
            <p className="text-teal-100/60 text-right leading-relaxed">
              تحدث مع مدرسك في أي وقت واحصل على إجابات سريعة
            </p>
          </div>

          <div className="bg-slate-800/40 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-500 hover:-translate-y-2 border border-teal-500/20 hover:border-cyan-500/40 animate-slide-up group" style={{ animationDelay: '0.5s' }}>
            <div className="bg-cyan-500/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6 ml-auto border border-cyan-500/30 group-hover:bg-cyan-500/30 group-hover:scale-110 transition-all duration-300">
              <Users className="w-7 h-7 text-cyan-400 group-hover:text-cyan-300" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 text-right">
              مجموعات دراسية
            </h3>
            <p className="text-teal-100/60 text-right leading-relaxed">
              انضم لمجموعات دراسية وتعلّم مع زملائك بشكل تفاعلي
            </p>
          </div>

          <div className="bg-slate-800/40 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:shadow-teal-500/30 transition-all duration-500 hover:-translate-y-2 border border-teal-500/20 hover:border-teal-500/40 animate-slide-up group" style={{ animationDelay: '0.6s' }}>
            <div className="bg-teal-500/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6 ml-auto border border-teal-500/30 group-hover:bg-teal-500/30 group-hover:scale-110 transition-all duration-300">
              <BookOpen className="w-7 h-7 text-teal-400 group-hover:text-teal-300" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 text-right">
              محتوى منظم
            </h3>
            <p className="text-teal-100/60 text-right leading-relaxed">
              مناهج وموارد تعليمية مرتبة ومنظمة لسهولة الوصول
            </p>
          </div>

          <div className="bg-slate-800/40 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:shadow-violet-500/30 transition-all duration-500 hover:-translate-y-2 border border-teal-500/20 hover:border-violet-500/40 animate-slide-up group" style={{ animationDelay: '0.7s' }}>
            <div className="bg-violet-500/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6 ml-auto border border-violet-500/30 group-hover:bg-violet-500/30 group-hover:scale-110 transition-all duration-300">
              <Shield className="w-7 h-7 text-violet-400 group-hover:text-violet-300" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 text-right">
              بيئة آمنة
            </h3>
            <p className="text-teal-100/60 text-right leading-relaxed">
              منصة آمنة ومراقبة لضمان تجربة تعليمية مثالية
            </p>
          </div>

          <div className="bg-slate-800/40 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:shadow-emerald-500/30 transition-all duration-500 hover:-translate-y-2 border border-teal-500/20 hover:border-emerald-500/40 animate-slide-up group" style={{ animationDelay: '0.8s' }}>
            <div className="bg-emerald-500/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6 ml-auto border border-emerald-500/30 group-hover:bg-emerald-500/30 group-hover:scale-110 transition-all duration-300">
              <Clock className="w-7 h-7 text-emerald-400 group-hover:text-emerald-300" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 text-right">
              مرونة في الوقت
            </h3>
            <p className="text-teal-100/60 text-right leading-relaxed">
              تعلّم في الوقت الذي يناسبك مع جدول مرن
            </p>
          </div>
        </div>
      </div>
      
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
        
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(40px);
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
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}