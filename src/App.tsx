import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Footer } from './components/Footer';
import { TestimonialsPage } from './pages/TestimonialsPage';
import { AboutPage } from './pages/AboutPage';
import { Contact } from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="testimonials">
          <TestimonialsPage />
        </section>
        <section id="about">
          <AboutPage />
        </section>
        <Contact />
      </main>
      <WhatsAppButton />
      <Footer />
    </div>
  );
}