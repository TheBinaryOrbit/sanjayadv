import React from 'react';
import { Scale, Users, Heart, FileText, Home, MessageSquare } from 'lucide-react';

const services = [
  {
    icon: Scale,
    title: 'Divorce Mediation',
    description: 'Professional mediation services to help couples reach amicable agreements.',
  },
  {
    icon: Users,
    title: 'Child Custody',
    description: 'Protecting your childrens best interests in custody arrangements.',
  },
  {
    icon: Heart,
    title: 'Family Support',
    description: 'Expert guidance in alimony and child support matters.',
  },
  {
    icon: FileText,
    title: 'Prenuptial Agreements',
    description: 'Secure your future with comprehensive prenuptial agreements.',
  },
  {
    icon: Home,
    title: 'Property Division',
    description: 'Fair and equitable division of marital assets and property.',
  },
  {
    icon: MessageSquare,
    title: 'Legal Consultation',
    description: 'Professional advice on all aspects of family law.',
  },
];

export function Services() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.title} 
              className="bg-white p-8 rounded-2xl shadow-elegant hover:shadow-soft transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
            >
              <div className="bg-primary-50 p-4 rounded-xl inline-block mb-6">
                <service.icon className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}