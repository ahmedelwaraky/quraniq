import { Play, Star, Users } from "lucide-react";
import React from "react";
import course1 from "../../../assets/images/vision-1.jpg";
import course2 from "../../../assets/images/vision-2.jpg";
import course3 from "../../../assets/images/vision-3.jpg";

export default function CoursesSection() {
  const courses = [
    {
      image: course1,
      title: "Physics for Beginners",
      instructor: "Dr. Khaled Saeed",
      duration: "18:20",
      rating: 4.7,
      students: 750,
      badge: "Featured",
    },
    {
      image: course2,
      title: "Arabic Language Basics",
      instructor: "Prof. Fatima Ali",
      duration: "20:45",
      rating: 4.8,
      students: 1200,
      badge: "Popular",
    },
    {
      image: course3,
      title: "Introduction to Mathematics",
      instructor: "Prof. Mohamed Ahmed",
      duration: "15:30",
      rating: 5,
      students: 2100,
      badge: "New",
    },
    // {
    //   image:
    //     "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80",
    //   title: "Islamic History",
    //   instructor: "Dr. Omar Youssef",
    //   duration: "30:15",
    //   rating: 4.6,
    //   students: 980,
    //   badge: "Trending"
    // },
    // {
    //   image:
    //     "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
    //   title: "English Language - Conversation",
    //   instructor: "Prof. Ahmed Hassan",
    //   duration: "22:00",
    //   rating: 4.9,
    //   students: 1850,
    //   badge: "Featured"
    // },
    // {
    //   image:
    //     "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80",
    //   title: "Organic Chemistry",
    //   instructor: "Prof. Sarah Mahmoud",
    //   duration: "25:10",
    //   rating: 4.5,
    //   students: 1500,
    //   badge: "Save"
    // },
  ];

  return (
    <section
      className="py-12 sm:py-16 md:py-20"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-3 sm:mb-4">
          <span
            className="inline-block text-white px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium"
            style={{ backgroundColor: "#008076" }}
          >
            Video Library
          </span>
        </div>

        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 sm:mb-4"
          style={{ color: "#008076" }}
        >
          Featured Educational Lessons
        </h2>

        <p
          className="text-center text-sm sm:text-base md:text-lg max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16 leading-relaxed"
          style={{ color: "#008076" }}
        >
          Enjoy watching a diverse collection of educational lessons recorded by
          the best teachers
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {courses.map((course, index) => (
            <div
              key={index}
              className="group rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              style={{ backgroundColor: "#ffffff" }}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 sm:h-64 object-cover"
                />

                {/* Badge */}
                <div
                  className="absolute top-4 right-4 px-4 py-1.5 rounded-full text-sm font-medium"
                  style={{
                    backgroundColor: "#D0B284",
                    color: "#008076",
                  }}
                >
                  {course.badge}
                </div>

                {/* Duration */}
                <div
                  className="absolute bottom-4 left-4 px-3 py-1.5 rounded-full flex items-center gap-1 border-2"
                  style={{
                    backgroundColor: "#ffffff",
                    borderColor: "#008076",
                    color: "#008076",
                  }}
                >
                  <Play className="w-4 h-4" />
                  <span className="text-sm font-bold">{course.duration}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Title */}
                <h3
                  className="text-lg sm:text-xl font-bold mb-4 line-clamp-2"
                  style={{ color: "#008076" }}
                >
                  {course.title}
                </h3>

                {/* Rating & Students */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    <span
                      className="font-bold text-lg"
                      style={{ color: "#008076" }}
                    >
                      {course.rating}
                    </span>
                    <Star
                      className="w-5 h-5 fill-current"
                      style={{ color: "#D0B284" }}
                    />
                  </div>

                  <div className="flex items-center gap-2">
                    <span
                      className="text-sm font-medium"
                      style={{ color: "#008076" }}
                    >
                      {course.students.toLocaleString()} Students
                    </span>
                  </div>
                </div>

                {/* Instructor */}
                <div className="flex items-center gap-2 mb-4">
                  <Users className="w-4 h-4" style={{ color: "#008076" }} />
                  <span
                    className="text-sm font-medium"
                    style={{ color: "#008076" }}
                  >
                    {course.instructor}
                  </span>
                </div>

                {/* Watch Now Button */}
                <button
                  className="w-full py-3 rounded-xl font-bold transition-all duration-300 hover:scale-105"
                  style={{
                    backgroundColor: "#ffffff",
                    color: "#008076",
                    border: "2px solid #008076",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#008076";
                    e.currentTarget.style.color = "#ffffff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#ffffff";
                    e.currentTarget.style.color = "#008076";
                  }}
                >
                  Watch Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
