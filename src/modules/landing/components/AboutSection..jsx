import React from "react";
import { Award, Clock, Shield, Users } from "lucide-react";

export default function AboutSection() {
  const stats = [
    {
      icon: Award,
      value: "+5",
      label: "Years of Experience",
      color: "text-teal-600",
    },
    {
      icon: Users,
      value: "+1000",
      label: "Benefited Students",
      color: "text-teal-600",
    },
    {
      icon: Clock,
      value: "24/7",
      label: "Continuous Support",
      color: "text-teal-600",
    },
    {
      icon: Shield,
      value: "100%",
      label: "Safe Environment",
      color: "text-teal-600",
    },
  ];

  const subjects = [
    "Mathematics",
    "Physics",
    "Chemistry",
    "Arabic Language",
    "English Language",
    "Science",
    "History",
    "Geography",
  ];

  return (
    <section id="about" className="bg-white py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <div className="mb-3 sm:mb-4">
              <span className="inline-block bg-teal-50 text-teal-600 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium">
                About Us
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              Extensive Experience in Digital Education
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
              We are a team of specialists in education and technology. We
              combine academic expertise with technical innovation to provide a
              unique educational experience. Our platform is designed to
              facilitate communication between students and teachers, and
              provide an interactive and inspiring learning environment.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="text-center p-3 sm:p-4 bg-gradient-to-br from-amber-50 to-teal-50 rounded-xl hover:shadow-md transition-shadow"
                  >
                    <Icon
                      className={`w-6 h-6 sm:w-8 sm:h-8 ${stat.color} mx-auto mb-1 sm:mb-2`}
                    />
                    <div className="text-xl sm:text-2xl font-bold text-gray-900">
                      {stat.value}
                    </div>
                    <div className="text-gray-600 text-xs sm:text-sm">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Subjects */}
            <div className="mb-6">
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3">
                Educational Fields
              </h3>
              <div className="flex flex-wrap gap-2">
                {subjects.map((subject, index) => (
                  <span
                    key={index}
                    className="bg-gradient-to-r from-teal-50 to-amber-50 text-teal-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium hover:shadow-md transition-shadow border border-teal-100"
                  >
                    {subject}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Card */}
           <div className="relative order-1 lg:order-2">
            <div
              className="rounded-3xl p-8 sm:p-10 md:p-12 text-white relative overflow-hidden shadow-2xl"
              style={{ backgroundColor: "#008076" }}
            >
              {/* Decorative Elements */}
              <div
                className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 rounded-full -mr-12 -mt-12 sm:-mr-16 sm:-mt-16"
                style={{ backgroundColor: "rgba(208, 178, 132, 0.2)" }}
              ></div>
              <div
                className="absolute bottom-0 left-0 w-32 h-32 sm:w-40 sm:h-40 rounded-full -ml-16 -mb-16 sm:-ml-20 sm:-mb-20"
                style={{ backgroundColor: "rgba(208, 178, 132, 0.1)" }}
              ></div>
              <div
                className="absolute top-1/2 left-1/2 w-20 h-20 rounded-full blur-2xl"
                style={{ backgroundColor: "rgba(208, 178, 132, 0.1)" }}
              ></div>

              <div className="relative z-10">
                <div
                  className="text-6xl sm:text-7xl md:text-8xl font-bold mb-3 sm:mb-4"
                  style={{ color: "#D0B284" }}
                >
                  +5
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2 text-white">
                  Years of Excellence
                </h3>
                <p
                  className="mb-6 sm:mb-8 text-sm sm:text-base"
                  style={{ color: "#D0B284", opacity: 0.9 }}
                >
                  In Service of Education
                </p>

                {/* Trusted Platform Badge */}
                <div
                  className="mt-4 sm:mt-6 inline-flex items-center gap-2 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border"
                  style={{
                    backgroundColor: "rgba(208, 178, 132, 0.2)",
                    borderColor: "rgba(208, 178, 132, 0.3)",
                  }}
                >
                  <div
                    className="w-2 h-2 rounded-full animate-pulse"
                    style={{ backgroundColor: "#D0B284" }}
                  ></div>
                  <span
                    className="text-xs sm:text-sm font-medium"
                    style={{ color: "#D0B284" }}
                  >
                    Trusted Platform
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Badge - Teachers */}
          <div
  className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-8 
  rounded-2xl p-4 sm:p-5 shadow-2xl 
  transition-transform hover:scale-105 
  animate-float"
  style={{ backgroundColor: "#ffffff" }}
>
              <div className="flex items-center gap-3 sm:gap-4">
                <div>
                  <div
                    className="text-2xl sm:text-3xl font-bold mb-1"
                    style={{ color: "#008076" }}
                  >
                    +50
                  </div>
                  <div
                    className="text-xs sm:text-sm font-bold"
                    style={{ color: "#008076" }}
                  >
                    Teachers
                  </div>
                  <div
                    className="text-xs"
                    style={{ color: "#008076", opacity: 0.7 }}
                  >
                    Professional and Certified
                  </div>
                </div>
                <div
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center shadow-md"
                  style={{ backgroundColor: "#D0B284" }}
                >
                  <Users
                    className="w-6 h-6 sm:w-7 sm:h-7"
                    style={{ color: "#008076" }}
                  />
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
