import React from 'react';

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function Link({ href, children, className = '', onClick }: LinkProps) {
  const handleClick = (e: React.MouseEvent) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      if (onClick) onClick();
    }
  };

  return (
    <a 
      href={href}
      onClick={handleClick}
      className={`text-gray-600 hover:text-blue-600 transition-colors ${className}`}
    >
      {children}
    </a>
  );
}