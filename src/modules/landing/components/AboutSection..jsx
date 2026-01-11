import { Award, Clock, Shield, Users } from "lucide-react";
import React from "react";

export default function AboutSection() {
  return (
    <section className="bg-white py-20" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-4">
              <span className="inline-block bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-sm font-medium">
                من نحن
              </span>
            </div>

            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              خبرة واسعة في مجال التعليم الرقمي
            </h2>

            <p className="text-gray-600 leading-relaxed mb-8">
              نحن فريق من المتخصصين في التعليم والتقنية. نجمع بين الخبرة
              الأكاديمية والابتكار التقني لتقديم تجربة تعليمية فريدة. منصتنا
              مصممة لتسهيل التواصل بين الطلاب والمدرسين، وتوفير بيئة تعلم
              تفاعلية ومحفزة.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <Award className="w-8 h-8 text-teal-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">+5</div>
                <div className="text-gray-600 text-sm">سنوات خبرة</div>
              </div>

              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <Users className="w-8 h-8 text-teal-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">+1000</div>
                <div className="text-gray-600 text-sm">طالب مستفيد</div>
              </div>

              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <Clock className="w-8 h-8 text-teal-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">24/7</div>
                <div className="text-gray-600 text-sm">دعم متواصل</div>
              </div>

              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <Shield className="w-8 h-8 text-teal-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">100%</div>
                <div className="text-gray-600 text-sm">بيئة آمنة</div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                المجالات التعليمية
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-teal-50 text-teal-700 px-4 py-2 rounded-lg text-sm font-medium">
                  الرياضيات
                </span>
                <span className="bg-teal-50 text-teal-700 px-4 py-2 rounded-lg text-sm font-medium">
                  الفيزياء
                </span>
                <span className="bg-teal-50 text-teal-700 px-4 py-2 rounded-lg text-sm font-medium">
                  الكيمياء
                </span>
                <span className="bg-teal-50 text-teal-700 px-4 py-2 rounded-lg text-sm font-medium">
                  اللغة العربية
                </span>
                <span className="bg-teal-50 text-teal-700 px-4 py-2 rounded-lg text-sm font-medium">
                  اللغة الإنجليزية
                </span>
                <span className="bg-teal-50 text-teal-700 px-4 py-2 rounded-lg text-sm font-medium">
                  العلوم
                </span>
                <span className="bg-teal-50 text-teal-700 px-4 py-2 rounded-lg text-sm font-medium">
                  التاريخ
                </span>
                <span className="bg-teal-50 text-teal-700 px-4 py-2 rounded-lg text-sm font-medium">
                  الجغرافيا
                </span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-900 to-teal-700 rounded-3xl p-12 text-white relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/20 rounded-full -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-800/20 rounded-full -ml-20 -mb-20"></div>

              <div className="relative z-10">
                <div className="text-8xl font-bold mb-4 text-blue-300">+5</div>
                <h3 className="text-2xl font-bold mb-2">سنوات من التميز</h3>
                <p className="text-blue-100 mb-8">في خدمة التعليم</p>

                <div className="bg-white rounded-2xl p-6 text-gray-900 inline-block">
                  <div className="flex items-center gap-3 mb-2">
                    <Users className="w-6 h-6 text-teal-500" />
                    <span className="font-bold text-xl">+50 مدرس</span>
                  </div>
                  <p className="text-gray-600 text-sm">محترفين ومعتمدين</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
