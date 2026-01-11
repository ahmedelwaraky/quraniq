import {
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Play,
  Users,
} from "lucide-react";
import React, { useState, useEffect } from "react";
import Hero from "../../../assets/images/hero-bg.jpg";

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      badge: "منصة تعليمية متكاملة",
      title: "تعلّم بسهولة",
      subtitle: "تواصل مباشر مع معلمك",
      description:
        "منصتنا تضمك بأفضل المدرسين في بيئة تعليمية آمنة وفعّالة. تواصل فوري، محتوى منظم، ومجموعات دراسية تفاعلية.",
    },
    {
      badge: "تعليم احترافي",
      title: "دروس تفاعلية",
      subtitle: "محتوى تعليمي متميز",
      description:
        "استمتع بتجربة تعلم فريدة مع دروس تفاعلية ومحتوى متجدد يناسب جميع المستويات.",
    },
    {
      badge: "مرونة في التعلم",
      title: "تعلّم في أي وقت",
      subtitle: "جدول يناسب وقتك",
      description:
        "تعلّم بالوقت الذي يناسبك مع خيارات مرنة للحصص المباشرة والمسجلة.",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative py-20 overflow-hidden"
      dir="rtl"
      style={{
        backgroundImage: `url(${Hero})`, 
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-teal-900/80 to-slate-900/90"></div>

      {/* Animated Background Elements */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Animated Content */}
        <div className="min-h-[400px] flex flex-col justify-center">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 ${
                index === currentSlide
                  ? "opacity-100 scale-100 translate-x-0"
                  : index < currentSlide
                  ? "opacity-0 scale-95 -translate-x-20 absolute pointer-events-none"
                  : "opacity-0 scale-95 translate-x-20 absolute pointer-events-none"
              }`}
            >
              <div className="text-center mb-4 animate-fade-in">
                <span className="inline-block bg-teal-500/20 text-teal-200 px-4 py-1.5 rounded-full text-sm font-medium border border-teal-400/30 backdrop-blur-sm hover:bg-teal-500/30 transition-all">
                  {slide.badge}
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-white text-center mb-4 drop-shadow-2xl animate-fade-in" style={{ animationDelay: '0.1s' }}>
                {slide.title}
              </h1>

              <h2 className="text-3xl md:text-4xl font-bold text-teal-300 text-center mb-6 drop-shadow-xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
                {slide.subtitle}
              </h2>

              <p className="text-gray-200 text-center text-lg max-w-2xl mx-auto mb-10 drop-shadow-md leading-relaxed animate-fade-in" style={{ animationDelay: '0.3s' }}>
                {slide.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3.5 rounded-lg font-medium transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-emerald-500/50 hover:scale-105 flex items-center gap-2 group">
            <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            انضم الآن عبر واتساب
          </button>
          <button className="bg-white/10 backdrop-blur-md border-2 border-white/30 hover:bg-white/20 text-white px-8 py-3.5 rounded-lg font-medium transition-all duration-300 hover:scale-105 flex items-center gap-2 group hover:border-white/50">
            <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
            شاهد كيف نعمل
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-slate-800/40 backdrop-blur-md rounded-xl p-6 text-center border border-teal-500/30 hover:border-teal-500/50 hover:bg-slate-800/60 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-teal-500/20 group">
            <Users className="w-8 h-8 text-teal-400 mx-auto mb-3 group-hover:scale-110 group-hover:text-teal-300 transition-all" />
            <div className="text-3xl font-bold text-white mb-1 group-hover:text-teal-300 transition-colors">+500</div>
            <div className="text-gray-300 text-sm">طالب نشط</div>
          </div>

          <div className="bg-slate-800/40 backdrop-blur-md rounded-xl p-6 text-center border border-emerald-500/30 hover:border-emerald-500/50 hover:bg-slate-800/60 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/20 group">
            <BookOpen className="w-8 h-8 text-emerald-400 mx-auto mb-3 group-hover:scale-110 group-hover:text-emerald-300 transition-all" />
            <div className="text-3xl font-bold text-white mb-1 group-hover:text-emerald-300 transition-colors">+50</div>
            <div className="text-gray-300 text-sm">مدرس محترف</div>
          </div>

          <div className="bg-slate-800/40 backdrop-blur-md rounded-xl p-6 text-center border border-cyan-500/30 hover:border-cyan-500/50 hover:bg-slate-800/60 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20 group">
            <svg className="w-8 h-8 text-cyan-400 mx-auto mb-3 group-hover:scale-110 group-hover:text-cyan-300 transition-all" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            <div className="text-3xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">+10K</div>
            <div className="text-gray-300 text-sm">رسالة يومياً</div>
          </div>

          <div className="bg-slate-800/40 backdrop-blur-md rounded-xl p-6 text-center border border-violet-500/30 hover:border-violet-500/50 hover:bg-slate-800/60 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-violet-500/20 group">
            <Play className="w-8 h-8 text-violet-400 mx-auto mb-3 group-hover:scale-110 group-hover:text-violet-300 transition-all" />
            <div className="text-3xl font-bold text-white mb-1 group-hover:text-violet-300 transition-colors">+100</div>
            <div className="text-gray-300 text-sm">درس تفاعلي</div>
          </div>
        </div>

        {/* Slider Navigation */}
        <div className="flex justify-center gap-4 mt-12">
          <button
            onClick={prevSlide}
            className="bg-slate-800/40 hover:bg-slate-800/60 backdrop-blur-md text-white p-3 rounded-full transition-all duration-300 border border-teal-500/30 hover:border-teal-500/50 hover:scale-110 hover:shadow-lg hover:shadow-teal-500/30"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentSlide
                    ? "w-8 h-3 bg-teal-400 shadow-lg shadow-teal-500/50"
                    : "w-3 h-3 bg-white/30 hover:bg-white/50 hover:scale-125"
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="bg-slate-800/40 hover:bg-slate-800/60 backdrop-blur-md text-white p-3 rounded-full transition-all duration-300 border border-teal-500/30 hover:border-teal-500/50 hover:scale-110 hover:shadow-lg hover:shadow-teal-500/30"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
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
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}