import React from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { PracticeAreasSection } from './components/PracticeAreasSection';
import { BlogSection } from './components/BlogSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
export function App() {
  return <div className="font-montserrat text-primary-600">
    <Header />
    <main>
      <HeroSection />
      <AboutSection />
      <PracticeAreasSection />
      <BlogSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
    <Footer />
  </div>;
}