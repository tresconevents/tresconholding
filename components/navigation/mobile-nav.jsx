"use client";

import { useEffect, useState } from 'react';
import { NavLink } from '@/components/ui/nav-link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Logo } from '@/components/ui/logo';
import { navItems } from './nav-items';
import { usePathname } from 'next/navigation';
export function MobileNav({ isOpen, onClose, onOpen }) {
  const [openDropdown, setOpenDropdown] = useState(null);
  const pathname = usePathname();
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={onOpen}
        className="lg:hidden p-2 text-[#1E2124] rounded bg-[#C0F43C] hover:text-[#1E2124] transition-colors"
        aria-label="Open menu"
      >
        <Menu size={24} />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-full sm:w-80 h-[100dvh] transform transition-transform duration-300 ease-in-out z-50 lg:hidden ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="absolute inset-0 bg-[#003B3D]" />
        <div className="relative h-full flex flex-col">
          {/* Header */}
          <div className="h-20 flex items-center justify-between px-6 border-b border-white/10">
            <Logo />
            <button
              onClick={onClose}
              className="text-white hover:text-[#C0F43C] transition-colors"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto">
            <ul className="space-y-2 py-6">
              {navItems.map((item) => (
                <li key={item.href}>
                  {item.isDropdown ? (
                    <div>
                      <button
                        onClick={() => setOpenDropdown(openDropdown === item.href ? null : item.href)}
                        className="w-full px-6 py-3 flex items-center justify-between text-white hover:text-[#C0F43C] transition-colors group"
                      >
                        <span>{item.label}</span>
                        <ChevronDown 
                          className={`w-4 h-4 transition-transform duration-200 ${
                            openDropdown === item.href ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {openDropdown === item.href && (
                        <div className="bg-[#002B2D] py-2">
                          <span className="block px-8 py-2 text-sm text-gray-400">
                            Coming soon...
                          </span>
                        </div>
                      )}
                    </div>
                  ) : (
                    <NavLink
                      href={item.href}
                      onClick={onClose}
                      className={`block px-6 py-3 hover:bg-white/5 ${pathname === item.href ? '#C0F43C' :""}`}  
                    >
                      {item.label}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
    </>
  );
}