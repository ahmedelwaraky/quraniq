import React, { useState, useEffect } from "react";
import {
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Play,
  Users,
} from "lucide-react";

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      badge: "Comprehensive Learning Platform",
      title: "Learn with Ease",
      subtitle: "Direct Communication with Your Teacher",
      description: "Our platform connects you with the best teachers in a safe and effective learning environment. Instant communication, organized content, and interactive study groups.",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&h=1080&fit=crop",
      overlay: "from-slate-900/90 via-teal-900/80 to-slate-900/90"
    },
    {
      badge: "Professional Education",
      title: "Interactive Lessons",
      subtitle: "Premium Educational Content",
      description: "Enjoy a unique learning experience with interactive lessons and updated content suitable for all levels.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1920&h=1080&fit=crop",
      overlay: "from-emerald-900/90 via-teal-900/80 to-slate-900/90"
    },
    {
      badge: "Flexible Learning",
      title: "Learn Anytime",
      subtitle: "Schedule That Fits Your Time",
      description: "Learn at the time that suits you with flexible options for live and recorded sessions.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&h=1080&fit=crop",
      overlay: "from-emerald-900/90 via-teal-900/80 to-slate-900/90"
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
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden min-h-screen flex items-center">
      {/* Background Images Slider */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Dark Overlay with gradient */}
          <div className={`absolute inset-0 bg-gradient-to-br ${slide.overlay}`}></div>
        </div>
      ))}

      {/* Animated Background Elements */}
      <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-40 sm:w-60 md:w-80 h-40 sm:h-60 md:h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-emerald-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="hidden md:block absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 bg-slate-800/40 hover:bg-slate-800/60 backdrop-blur-md text-white p-3 lg:p-4 rounded-full transition-all duration-300 border border-teal-500/30 hover:border-teal-500/50 hover:scale-110 hover:shadow-lg hover:shadow-teal-500/30 z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 lg:w-7 lg:h-7" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="hidden md:block absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 bg-slate-800/40 hover:bg-slate-800/60 backdrop-blur-md text-white p-3 lg:p-4 rounded-full transition-all duration-300 border border-teal-500/30 hover:border-teal-500/50 hover:scale-110 hover:shadow-lg hover:shadow-teal-500/30 z-10"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 lg:w-7 lg:h-7" />
      </button>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Animated Content */}
        <div className="min-h-[400px] sm:min-h-[500px] flex flex-col justify-center">
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
              <div className="text-center mb-3 sm:mb-4 animate-fade-in">
                <span className="inline-block bg-teal-500/20 text-teal-200 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium border border-teal-400/30 backdrop-blur-sm hover:bg-teal-500/30 transition-all">
                  {slide.badge}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-3 sm:mb-4 drop-shadow-2xl animate-fade-in px-4" style={{ animationDelay: '0.1s' }}>
                {slide.title}
              </h1>

              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-teal-300 text-center mb-4 sm:mb-6 drop-shadow-xl animate-fade-in px-4" style={{ animationDelay: '0.2s' }}>
                {slide.subtitle}
              </h2>

              <p className="text-gray-200 text-center text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-8 sm:mb-10 drop-shadow-md leading-relaxed animate-fade-in px-4" style={{ animationDelay: '0.3s' }}>
                {slide.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-12 sm:mb-16 px-4">
          <button className="bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg font-medium transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-emerald-500/50 hover:scale-105 flex items-center justify-center gap-2 group text-sm sm:text-base touch-manipulation">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Join Now via WhatsApp
          </button>
          <button className="bg-white/10 backdrop-blur-md border-2 border-white/30 hover:bg-white/20 text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 group hover:border-white/50 text-sm sm:text-base touch-manipulation">
            <Play className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform flex-shrink-0" />
            Watch How We Work
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 px-4">
          <div className="bg-slate-800/40 backdrop-blur-md rounded-xl p-4 sm:p-6 text-center border border-teal-500/30 hover:border-teal-500/50 hover:bg-slate-800/60 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-teal-500/20 group">
            <Users className="w-6 h-6 sm:w-8 sm:h-8 text-teal-400 mx-auto mb-2 sm:mb-3 group-hover:scale-110 group-hover:text-teal-300 transition-all" />
            <div className="text-2xl sm:text-3xl font-bold text-white mb-1 group-hover:text-teal-300 transition-colors">+500</div>
            <div className="text-gray-300 text-xs sm:text-sm">Active Students</div>
          </div>

          <div className="bg-slate-800/40 backdrop-blur-md rounded-xl p-4 sm:p-6 text-center border border-emerald-500/30 hover:border-emerald-500/50 hover:bg-slate-800/60 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/20 group">
            <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-400 mx-auto mb-2 sm:mb-3 group-hover:scale-110 group-hover:text-emerald-300 transition-all" />
            <div className="text-2xl sm:text-3xl font-bold text-white mb-1 group-hover:text-emerald-300 transition-colors">+50</div>
            <div className="text-gray-300 text-xs sm:text-sm">Expert Teachers</div>
          </div>

          <div className="bg-slate-800/40 backdrop-blur-md rounded-xl p-4 sm:p-6 text-center border border-cyan-500/30 hover:border-cyan-500/50 hover:bg-slate-800/60 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20 group">
            <svg className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400 mx-auto mb-2 sm:mb-3 group-hover:scale-110 group-hover:text-cyan-300 transition-all" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            <div className="text-2xl sm:text-3xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">+10K</div>
            <div className="text-gray-300 text-xs sm:text-sm">Daily Messages</div>
          </div>

          <div className="bg-slate-800/40 backdrop-blur-md rounded-xl p-4 sm:p-6 text-center border border-violet-500/30 hover:border-violet-500/50 hover:bg-slate-800/60 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-violet-500/20 group">
            <Play className="w-6 h-6 sm:w-8 sm:h-8 text-violet-400 mx-auto mb-2 sm:mb-3 group-hover:scale-110 group-hover:text-violet-300 transition-all" />
            <div className="text-2xl sm:text-3xl font-bold text-white mb-1 group-hover:text-violet-300 transition-colors">+100</div>
            <div className="text-gray-300 text-xs sm:text-sm">Interactive Lessons</div>
          </div>
        </div>

        {/* Dots Indicator - Mobile & Desktop */}
        <div className="flex justify-center items-center gap-2 mt-8 sm:mt-12">
          {/* Mobile Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="md:hidden bg-slate-800/40 hover:bg-slate-800/60 backdrop-blur-md text-white p-2 sm:p-3 rounded-full transition-all duration-300 border border-teal-500/30 hover:border-teal-500/50 hover:scale-110 hover:shadow-lg hover:shadow-teal-500/30 touch-manipulation"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Dots */}
          <div className="flex items-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`transition-all duration-300 rounded-full touch-manipulation ${
                  index === currentSlide
                    ? "w-6 sm:w-8 h-2.5 sm:h-3 bg-teal-400 shadow-lg shadow-teal-500/50"
                    : "w-2.5 sm:w-3 h-2.5 sm:h-3 bg-white/30 hover:bg-white/50 hover:scale-125"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Mobile Navigation Buttons */}
          <button
            onClick={nextSlide}
            className="md:hidden bg-slate-800/40 hover:bg-slate-800/60 backdrop-blur-md text-white p-2 sm:p-3 rounded-full transition-all duration-300 border border-teal-500/30 hover:border-teal-500/50 hover:scale-110 hover:shadow-lg hover:shadow-teal-500/30 touch-manipulation"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
      </div>

      <style>{`
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