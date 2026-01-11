import { Video } from "lucide-react";
import React from "react";

export default function CoursesSection() {
  const courses = [
    {
      image:
        "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80",
      title: "الفيزياء للمبتدئين",
      instructor: "د. خالد سعيد",
      duration: "18:20",
    },
    {
      image:
        "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&q=80",
      title: "أساسيات اللغة العربية",
      instructor: "أ. فاطمة علي",
      duration: "20:45",
    },
    {
      image:
        "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800&q=80",
      title: "مقدمة في الرياضيات",
      instructor: "أ. محمد أحمد",
      duration: "15:30",
    },
    {
      image:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80",
      title: "التاريخ الإسلامي",
      instructor: "د. عمر يوسف",
      duration: "30:15",
    },
    {
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
      title: "اللغة الإنجليزية - المحادثة",
      instructor: "أ. أحمد حسن",
      duration: "22:00",
    },
    {
      image:
        "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80",
      title: "الكيمياء العضوية",
      instructor: "أ. سارة محمود",
      duration: "25:10",
    },
  ];

  return (
    <section className="bg-white py-20" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <span className="inline-block bg-teal-50 text-teal-600 px-4 py-2 rounded-full text-sm font-medium">
            مكتبة الفيديوهات
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-4">
          دروس تعليمية مميزة
        </h2>

        <p className="text-gray-600 text-center text-lg max-w-3xl mx-auto mb-16">
          استمتع بمشاهدة مجموعة متنوعة من الدروس التعليمية المسجلة من قبل أفضل
          المدرسين
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all hover:-translate-y-2 border border-gray-100"
            >
              <div className="relative overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-lg text-sm font-bold text-gray-900">
                  {course.duration}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-4">
                    <Video className="w-8 h-8 text-teal-600" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 text-right">
                  {course.title}
                </h3>
                <p className="text-gray-600 text-sm text-right">
                  {course.instructor}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
