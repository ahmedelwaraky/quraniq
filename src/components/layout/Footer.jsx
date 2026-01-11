import React from "react";
import {
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Youtube,
  GraduationCap,
} from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { label: "الرئيسية", href: "/" },
    { label: "من نحن", href: "#about" },
    { label: "المميزات", href: "#features" },
    { label: "تواصل معنا", href: "#footer" },
    { label: "تسجيل الدخول", href: "/login" },
  ];

  return (
    <footer
      className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-gray-300 pt-16 pb-8"
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div className="flex justify-center">
            <div className="text-right">
              <div className="flex items-center gap-3 mb-6 justify-start">
                <span className="text-white font-bold text-xl flex ">
                  Quraniq Academy{" "}
                </span>
                <div className="bg-teal-800 p-2 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                منصتنا التعليمية تجمعك بأفضل المدرسين في بيئة تعليمية آمنة
                وفعّالة. نسعى لتقديم تجربة تعلم مميزة ومُثمرة لكل طالب.
              </p>

              <div className="flex gap-4">
                {[MessageCircle, Instagram, Youtube].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="bg-slate-800/50 hover:bg-teal-600 p-3 rounded-lg transition-all hover:scale-110 border border-slate-700 hover:border-teal-500"
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </a>
                ))}
                <a
                  href="#"
                  className="bg-slate-800/50 hover:bg-teal-600 p-3 rounded-lg transition-all hover:scale-110 border border-slate-700 hover:border-teal-500"
                >
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <nav className="flex justify-center">
            <div className="text-right">
              <h3 className="text-white font-bold text-lg mb-6">روابط سريعة</h3>

              <ul className="space-y-3">
                {quickLinks.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-gray-400 hover:text-teal-400 transition-colors block hover:translate-x-1 duration-200"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          <div className="flex justify-center">
            <div className="text-right">
              <h3 className="text-white font-bold text-Start  text-lg mb-6">
                تواصل معنا
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 justify-end flex-row-reverse group">
                  <span className="text-gray-400 group-hover:text-teal-400 transition-colors">
                    info@edu-platform.com
                  </span>
                  <Mail className="w-5 h-5 text-teal-400 group-hover:scale-110 transition-transform" />
                </li>

                <li className="flex items-center gap-3 justify-end flex-row-reverse group">
                  <span className="text-gray-400 group-hover:text-teal-400 transition-colors">
                    +966 50 123 4567
                  </span>
                  <Phone className="w-5 h-5 text-teal-400 group-hover:scale-110 transition-transform" />
                </li>

                <li className="flex items-center gap-3 justify-end flex-row-reverse group">
                  <span className="text-gray-400 group-hover:text-teal-400 transition-colors">
                    السادس من أكتوبر - الجيزة -مصر{" "}
                  </span>
                  <MapPin className="w-5 h-5 text-teal-400 group-hover:scale-110 transition-transform" />
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <p className="text-gray-500 text-sm ">
              © 2026 Quraniq Academy. جميع الحقوق محفوظة.{" "}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
