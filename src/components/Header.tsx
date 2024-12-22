import React, { useState } from 'react';
import { Scale, Menu, X } from 'lucide-react';
import { Link } from './Link';
import { MobileMenu } from './MobileMenu';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const links = [
    { href: '#home', text: 'Home' },
    { href: '#services', text: 'Services' },
    { href: '#about', text: 'About' },
    { href: '#testimonials', text: 'Testimonials' },
    { href: '#contact', text: 'Contact' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-2">
            <Scale className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-semibold">Sanjay K. Sharma & Associates</span>
          </div>
          <div className="flex items-center space-x-4 justify-between gap-10">
            <nav className="hidden md:flex items-center space-x-8">
              {links.map(link => (
                <Link key={link.href} href={link.href}>{link.text}</Link>
              ))}
            </nav>
            <a
              href="tel:+919958568881"
              className="hidden md:flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition" 
            >
              Call Us
            </a>
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 hover:bg-gray-100 rounded-md transition"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      <MobileMenu isOpen={isMenuOpen} onLinkClick={() => setIsMenuOpen(false)} />
    </header>
  );
}