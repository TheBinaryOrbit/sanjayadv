import React from 'react';

export function Hero() {
  return (
    <div className="relative h-[600px] mt-20">
      <div 
        className="absolute inset-0 bg-cover bg-center rounded-b-4xl"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 rounded-b-4xl" />
      </div>
      
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl font-bold mb-6 leading-tight">Your Trusted Family Lawyer</h1>
          <p className="text-xl mb-8 text-gray-100">Protecting your family's interests with compassion, expertise, and dedication. We're here to guide you through life's legal challenges.</p>
          <a 
            href="#contact"
            className="inline-block px-8 py-4 bg-primary-500 text-white rounded-xl hover:bg-primary-600 transition-all transform hover:scale-105 shadow-soft"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}