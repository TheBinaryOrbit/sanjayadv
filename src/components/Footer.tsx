import React from 'react';
import { Github } from 'lucide-react';
import { Link } from './Link';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Sanjay K. Sharma & Associates</h3>
            <p className="text-gray-400">Your trusted partner in family law matters.</p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link href="#about" className="text-gray-400 block">About Us</Link>
              <Link href="#services" className="text-gray-400 block">Services</Link>
              <Link href="#testimonials" className="text-gray-400 block">Testimonials</Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <div className="text-gray-400 space-y-2">
              <p>Palam Vihar, Sector-6, Dwarka</p>
              <p>New Delhi-110075</p>
              <p>Phone: +91 9958568881</p>
              <p>Email: sanjaysharma.adv@gmail.com</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
              />
              <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">© 2024 Sanjay K. Sharma & Associates. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <p className="text-sm text-gray-100 font-bold flex justify-center items-center gap-3">Developed By <a href="https://www.github.com/7anish" target='blank' className='hover:underline flex justify-center items-center gap-1'><Github size={18} />7anish</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
}