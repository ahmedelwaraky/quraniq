import React from "react";
import {
  BookOpen,
  Clock,
  MessageCircle,
  Shield,
  Users,
  Video,
} from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      id: 1,
      icon: Video,
      title: "Live Learning",
      description: "Interactive live lessons with teachers in real-time",
      bgColor: "#008076",
      delay: "0.3s",
    },
    {
      id: 2,
      icon: MessageCircle,
      title: "Instant Communication",
      description: "Talk to your teacher anytime and get quick answers",
      bgColor: "#008076",
      delay: "0.4s",
    },
    {
      id: 3,
      icon: Users,
      title: "Study Groups",
      description: "Join study groups and learn with your peers interactively",
      bgColor: "#008076",
      delay: "0.5s",
    },
    {
      id: 4,
      icon: BookOpen,
      title: "Organized Content",
      description:
        "Curricula and educational resources organized for easy access",
      bgColor: "#008076",
      delay: "0.6s",
    },
    {
      id: 5,
      icon: Shield,
      title: "Safe Environment",
      description:
        "A safe and monitored platform to ensure an ideal learning experience",
      bgColor: "#008076",
      delay: "0.7s",
    },
    {
      id: 6,
      icon: Clock,
      title: "Time Flexibility",
      description: "Learn at the time that suits you with a flexible schedule",
      bgColor: "#008076",
      delay: "0.8s",
    },
  ];

  return (
    <section
      id="features"
      className="py-12 sm:py-16 md:py-20 relative overflow-hidden"
      style={{
        background: "#d0b284e1",
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-1/4 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-0 right-1/4 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-3 sm:mb-4 animate-fade-in">
          <span 
            className="inline-block text-white px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all"
            style={{ backgroundColor: '#008076' }}
          >
            Features
          </span>
        </div>

        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 sm:mb-4 animate-fade-in px-4"
          style={{ animationDelay: "0.1s", color: '#008076' }}
        >
          Everything You Need to Learn Effectively
        </h2>

        <p
          className="text-center text-sm sm:text-base md:text-lg max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16 animate-fade-in px-4 leading-relaxed"
          style={{ animationDelay: "0.2s", color: '#008076' }}
        >
          We provide you with a comprehensive set of tools and features that
          make the learning experience enjoyable, effective, and fruitful.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className="rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-slide-up group"
                style={{ 
                  animationDelay: feature.delay,
                  backgroundColor: '#ffffff'
                }}
              >
                <div
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-all duration-300"
                  style={{ backgroundColor: feature.bgColor }}
                >
                  <Icon
                    className="w-6 h-6 sm:w-7 sm:h-7 text-white transition-colors"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3" style={{ color: '#008076' }}>
                  {feature.title}
                </h3>
                <p className="leading-relaxed text-sm sm:text-base" style={{ color: '#008076', opacity: 0.8 }}>
                  {feature.description}
                </p>
              </div>
            );
          })}
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