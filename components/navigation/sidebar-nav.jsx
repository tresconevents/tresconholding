"use client";

import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { NavLink } from '@/components/ui/nav-link';
import { navItems } from './nav-items';
import { usePathname } from 'next/navigation';

export function SidebarNav({ isOpen, onClose }) {
  const [openDropdown, setOpenDropdown] = useState(null);
    const pathname = usePathname();
  

  // Handle body scroll
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
        onClick={() => onClose()}
        className="lg:hidden p-2 text-white hover:text-[#C0F43C] transition-colors"
        aria-label="Toggle menu"
      >
        <Menu size={24} />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 right-0 w-full sm:w-80 bg-[#003B3D] transform transition-transform duration-300 ease-in-out z-50 lg:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
style={{height:"100vh"}}      >
        <div className="h-full flex flex-col">
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
          <nav className="flex-1 py-6">
            <ul className="space-y-2">
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
                      className={`block px-6 py-3 hover:bg-white/5 ${pathname === item.href ? 'text-[#C0F43C]' :""}`}
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