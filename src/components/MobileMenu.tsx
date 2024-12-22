import React from 'react';
import { Link } from './Link';

interface MobileMenuProps {
  isOpen: boolean;
  onLinkClick: () => void;
}

export function MobileMenu({ isOpen, onLinkClick }: MobileMenuProps) {
  if (!isOpen) return null;

  const links = [
    { href: '#home', text: 'Home' },
    { href: '#services', text: 'Services' },
    { href: '#about', text: 'About' },
    { href: '#testimonials', text: 'Testimonials' },
    { href: '#contact', text: 'Contact' }
  ];

  return (
    <div className="absolute top-20 left-0 right-0 bg-white shadow-lg md:hidden duration-300">
      <nav className="flex flex-col p-4 space-y-4">
        {links.map(link => (
          <Link 
            key={link.href} 
            href={link.href}
            onClick={onLinkClick}
          >
            {link.text}
          </Link>
        ))}
        <a 
          href="tel:+919958568881" 
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Call Us
        </a>
      </nav>
    </div>
  );
}