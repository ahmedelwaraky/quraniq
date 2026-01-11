import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-teal-500/20 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16" dir="rtl">
            {/* Right Side - Logo/Brand */}
            <div className="flex items-center gap-3">
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img
                  src="/src/assets/images/logo.png"
                  alt="منصة تعليم"
                  className="w-50 h-15 object-contain cursor-pointer"
                />
              </a>
            </div>

            {/* Center - Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              <a
                href="#"
                className="text-slate-700 hover:text-teal-600 transition-colors text-sm font-medium relative group"
              >
                الرئيسية
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-600 transition-all group-hover:w-full"></span>
              </a>
              <a
                href="#vision"
                className="text-slate-700 hover:text-teal-600 transition-colors text-sm font-medium relative group"
              >
                رؤيتنا
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-600 transition-all group-hover:w-full"></span>
              </a>
              <a
                href="#about"
                className="text-slate-700 hover:text-teal-600 transition-colors text-sm font-medium relative group"
              >
                من نحن
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-600 transition-all group-hover:w-full"></span>
              </a>
              <a
                href="#features"
                className="text-slate-700 hover:text-teal-600 transition-colors text-sm font-medium relative group"
              >
                المميزات
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-600 transition-all group-hover:w-full"></span>
              </a>
              <a
                href="#courses"
                className="text-slate-700 hover:text-teal-600 transition-colors text-sm font-medium relative group"
              >
                الكورسات
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-600 transition-all group-hover:w-full"></span>
              </a>
              <a
                href="#footer"
                className="text-slate-700 hover:text-teal-600 transition-colors text-sm font-medium relative group"
              >
                تواصل معنا
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-600 transition-all group-hover:w-full"></span>
              </a>
            </div>

            {/* Left Side - Action Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                to="/login"
                className="text-slate-700 hover:text-teal-600 transition-colors text-sm font-medium px-4 py-2"
              >
                تسجيل الدخول
              </Link>
              <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-all duration-300 text-sm font-medium shadow-lg hover:shadow-xl hover:shadow-emerald-500/50 hover:scale-105 group">
                <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <span>انضم عبر واتساب</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-slate-700 hover:text-teal-600 p-2 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden bg-white/95 backdrop-blur-md border-t border-teal-500/20 transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="px-4 py-4 space-y-3" dir="rtl">
            <a
              href="#"
              className="block text-slate-700 hover:text-teal-600 hover:bg-teal-50 transition-colors text-sm font-medium px-4 py-2 rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              الرئيسية
            </a>
            <a
              href="#vision"
              className="block text-slate-700 hover:text-teal-600 hover:bg-teal-50 transition-colors text-sm font-medium px-4 py-2 rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              رؤيتنا
            </a>
            <a
              href="#about"
              className="block text-slate-700 hover:text-teal-600 hover:bg-teal-50 transition-colors text-sm font-medium px-4 py-2 rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              من نحن
            </a>
            <a
              href="#features"
              className="block text-slate-700 hover:text-teal-600 hover:bg-teal-50 transition-colors text-sm font-medium px-4 py-2 rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              المميزات
            </a>
            <a
              href="#courses"
              className="block text-slate-700 hover:text-teal-600 hover:bg-teal-50 transition-colors text-sm font-medium px-4 py-2 rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              الكورسات
            </a>
            <a
              href="#footer"
              className="block text-slate-700 hover:text-teal-600 hover:bg-teal-50 transition-colors text-sm font-medium px-4 py-2 rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              تواصل معنا
            </a>
            <Link
              to="/login"
              className="block text-slate-700 hover:text-teal-600 hover:bg-teal-50 transition-colors text-sm font-medium px-4 py-2 rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              تسجيل الدخول
            </Link>
            <button 
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 transition-all text-sm font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <span>انضم عبر واتساب</span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}