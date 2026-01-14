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
    { label: "Home", href: "/" },
    { label: "About Us", href: "#about" },
    { label: "Features", href: "#features" },
    { label: "Contact Us", href: "#footer" },
    { label: "Login", href: "/login" },
  ];

  return (
    <footer
      className="text-gray-300 pt-16 pb-8"
      style={{
        background: 'linear-gradient(to bottom right, #1a1a1a, #2d2d2d, #1a1a1a)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div className="flex justify-center">
            <div className="text-left">
              <div className="flex items-center gap-3 mb-6">
                <div 
                  className="p-2 rounded-lg"
                  style={{ backgroundColor: '#008076' }}
                >
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <span className="text-white font-bold text-xl">
                  Quraniq Academy
                </span>
              </div>
              <p 
                className="leading-relaxed mb-6"
                style={{ color: '#D0B284', opacity: 0.9 }}
              >
                Our educational platform connects you with the best teachers in a safe and effective learning environment. We strive to provide a distinctive and fruitful learning experience for every student.
              </p>

              <div className="flex gap-4">
                {[MessageCircle, Instagram, Youtube].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="p-3 rounded-lg transition-all hover:scale-110"
                    style={{ 
                      backgroundColor: 'rgba(0, 128, 118, 0.2)',
                      border: '1px solid rgba(0, 128, 118, 0.3)'
                    }}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </a>
                ))}
                <a
                  href="#"
                  className="p-3 rounded-lg transition-all hover:scale-110"
                  style={{ 
                    backgroundColor: 'rgba(0, 128, 118, 0.2)',
                    border: '1px solid rgba(0, 128, 118, 0.3)'
                  }}
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
            <div className="text-left">
              <h3 
                className="font-bold text-lg mb-6"
                style={{ color: '#D0B284' }}
              >
                Quick Links
              </h3>

              <ul className="space-y-3">
                {quickLinks.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="transition-colors block hover:translate-x-1 duration-200"
                      style={{ color: '#D0B284', opacity: 0.8 }}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          <div className="flex justify-center">
            <div className="text-left">
              <h3 
                className="font-bold text-lg mb-6"
                style={{ color: '#D0B284' }}
              >
                Contact Us
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 group">
                  <Mail 
                    className="w-5 h-5 group-hover:scale-110 transition-transform" 
                    style={{ color: '#008076' }}
                  />
                  <span 
                    className="transition-colors"
                    style={{ color: '#D0B284', opacity: 0.9 }}
                  >
                    info@edu-platform.com
                  </span>
                </li>

                <li className="flex items-center gap-3 group">
                  <Phone 
                    className="w-5 h-5 group-hover:scale-110 transition-transform" 
                    style={{ color: '#008076' }}
                  />
                  <span 
                    className="transition-colors"
                    style={{ color: '#D0B284', opacity: 0.9 }}
                  >
                    +966 50 123 4567
                  </span>
                </li>

                <li className="flex items-center gap-3 group">
                  <MapPin 
                    className="w-5 h-5 group-hover:scale-110 transition-transform" 
                    style={{ color: '#008076' }}
                  />
                  <span 
                    className="transition-colors"
                    style={{ color: '#D0B284', opacity: 0.9 }}
                  >
                    6th of October - Giza - Egypt
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div 
          className="border-t pt-8"
          style={{ borderColor: 'rgba(208, 178, 132, 0.2)' }}
        >
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <p 
              className="text-sm"
              style={{ color: '#D0B284', opacity: 0.7 }}
            >
              © 2026 Quraniq Academy. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}