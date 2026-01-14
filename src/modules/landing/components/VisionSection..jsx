import React from "react";
import VisionOne from "../../../assets/images/vision-1.jpg";
import VisionTwo from "../../../assets/images/vision-2.jpg";
import VisionThree from "../../../assets/images/vision-3.jpg";  
export default function VisionSection() {
  const visionCards = [
    {
      id: 1,
      title: "Our Mission",
      description: "Spreading knowledge and facilitating access to education for every student anywhere, while ensuring the quality and effectiveness of learning.",
      image: VisionOne,
      bgColor: "bg-teal-500",
      iconPath: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    },
    {
      id: 2,
      title: "Our Values",
      description: "We are committed to quality, innovation, and transparency in everything we offer. Our students are our top priority.",
      image: VisionTwo,
      bgColor: "bg-emerald-500",
      iconPath: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
    },
    {
      id: 3,
      title: "Our Ambition",
      description: "We aspire to be the leading educational platform in the Arab world and a role model in digital education.",
      image: VisionThree,
      bgColor: "bg-cyan-500",
      iconPath: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
    }
  ];

  return (
    <section id="vision" className="bg-gray-50 py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-3 sm:mb-4">
          <span className="inline-block bg-teal-50 text-teal-600 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium">
            Our Vision
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 text-center mb-4 sm:mb-6 px-4">
          We Strive to Change the Future of Education
        </h2>

        <p className="text-gray-600 text-center text-sm sm:text-base md:text-lg max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16 px-4 leading-relaxed">
          We believe that quality education is a right for everyone. Our goal is to connect students with the best teachers and provide an inspiring learning environment that helps with continuous growth and development.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {visionCards.map((card, index) => (
            <div 
              key={card.id}
              className={`bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105 group ${
                index === visionCards.length - 1 && visionCards.length % 2 !== 0 ? 'sm:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className={`${card.bgColor} w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center shadow-lg`}>
                    <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={card.iconPath} />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}