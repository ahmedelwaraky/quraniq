import { Lightbulb, Target, TrendingUp } from "lucide-react";
import React from "react";

export default function VisionSection() {
  return (
    <div>
      <section className="bg-gray-50 py-20" dir="rtl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4">
            <span className="inline-block bg-teal-50 text-teal-600 px-4 py-1.5 rounded-full text-sm font-medium">
              رؤيتنا
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-6">
            نسعى لتغيير مستقبل التعليم
          </h2>

          <p className="text-gray-600 text-center text-lg max-w-3xl mx-auto mb-16">
            نؤمن بأن التعليم الجيد حق للجميع. هدفنا هو ربط الطلاب بأفضل
            المدرسين، وتوفير بيئة تعليمية محفزة تساعد على النمو والتطور المستمر.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-teal-500 w-14 h-14 rounded-xl flex items-center justify-center mb-6 ml-auto">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-right">
                رسالتنا
              </h3>
              <p className="text-gray-600 text-right leading-relaxed">
                نشر العلم وتسهيل الوصول إلى المعرفة لكل طالب في أي مكان، مع ضمان
                جودة التعليم وفعاليته.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-teal-500 w-14 h-14 rounded-xl flex items-center justify-center mb-6 ml-auto">
                <Lightbulb className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-right">
                قيمنا
              </h3>
              <p className="text-gray-600 text-right leading-relaxed">
                نلتزم بالجودة والابتكار والشفافية في كل ما نقدمه. طلابنا هم محور
                اهتمامنا الأول.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-teal-500 w-14 h-14 rounded-xl flex items-center justify-center mb-6 ml-auto">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-right">
                طموحنا
              </h3>
              <p className="text-gray-600 text-right leading-relaxed">
                نطمح أن نكون المنصة التعليمية الأولى في الوطن العربي، ونموذجاً
                يُحتذى به في التعليم الرقمي.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
