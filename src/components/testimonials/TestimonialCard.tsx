import React from 'react';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  imageUrl: string;
}

export function TestimonialCard({ name, role, content, imageUrl }: TestimonialCardProps) {
  return (
    <div className="bg-white p-6  shadow-md flex flex-col justify-between rounded-xl">
      <Quote className="h-8 w-8 text-blue-600 mb-4" />
      <p className="text-gray-600 mb-4">{content}</p>
      <div className="flex items-center">
        <img
          src={imageUrl}
          alt={name}
          className="h-12 w-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  );
}