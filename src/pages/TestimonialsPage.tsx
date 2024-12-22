import React from 'react';
import { TestimonialCard } from '../components/testimonials/TestimonialCard';
import { testimonials } from '../components/testimonials/testimonialData';

export function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-4">Testimonials</h1>
        <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Read what our clients have to say about their experience working with  <b>Sanjay K. Sharma & Associates</b>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
}