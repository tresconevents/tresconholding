"use client";

import { useState, useEffect } from 'react';
import { DesktopNav } from './desktop-nav';
import { MobileNav } from './mobile-nav';
import { Logo } from '@/components/ui/logo';
import { useScroll } from '@/hooks/use-scroll';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const isScrolled = useScroll();

  // Close mobile nav on scroll
  useEffect(() => {
    const handleScroll = () => setIsOpen(false);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#003B3D]/95 backdrop-blur-sm shadow-md border-b border-white/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="md:max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8 mt-2">
        <div className="flex items-center justify-between h-20">
          <Logo />
          <DesktopNav />
          <MobileNav isOpen={isOpen} onClose={() => setIsOpen(false)} onOpen={() => setIsOpen(true)} />
        </div>
      </div>
    </header>
  );
}