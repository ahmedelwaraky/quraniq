import React from "react";
import Navbar from "../../../components/layout/Navbar";
import HeroSection from "../components/HeroSection.";
import VisionSection from "../components/VisionSection.";
import AboutSection from "../components/AboutSection.";
import FeaturesSection from "../components/FeaturesSection.";
import CoursesSection from "../components/CoursesSection.";
import CTASection from "../components/CTASection.";
import Footer from "../../../components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white pt-16" >
      <Navbar />
      <section id="hero">
        <HeroSection />
      </section>
      <section id="vision">
        <VisionSection />
      </section>

      <section id="about">
        <AboutSection />
      </section>

      <section id="features">
        <FeaturesSection />
      </section>

      <section id="courses">
        <CoursesSection />
      </section>

      <section id="cta">
        <CTASection />
      </section>

      <section id="footer">
        <Footer />
      </section>
    </div>
  );
}
