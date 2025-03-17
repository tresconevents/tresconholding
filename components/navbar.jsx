"use client";

import { useState } from 'react';
import { Logo } from '@/components/ui/logo';
import { HamburgerButton } from '@/components/ui/hamburger-button';
import { DesktopNav } from '@/components/navigation/desktop-nav';
import { MobileNav } from '@/components/navigation/mobile-nav';
import { useScroll } from '@/hooks/use-scroll';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const isScrolled = useScroll();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#003B3D]/95 backdrop-blur-sm shadow-md' : 'bg-[#fff]'
      }`}
    >
      <div className="mt-3 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Logo />
          <DesktopNav />
          <div className="md:hidden">
            <HamburgerButton isOpen={isOpen} onClick={toggleMenu} />
          </div>
        </div>
      </div>
      <MobileNav isOpen={isOpen} onClose={closeMenu} />
    </header>
  );
}