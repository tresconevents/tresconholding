"use client";

import { useState, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { NavLink } from '@/components/ui/nav-link';
import { useClickOutside } from '@/hooks/use-click-outside';
import { useActiveSection } from '@/hooks/use-active-section';
import { navItems } from './nav-items';
import { usePathname } from 'next/navigation';

export function DesktopNav() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef(null);
  const activeSection = useActiveSection();
  const pathname = usePathname();

  useClickOutside(dropdownRef, () => setOpenDropdown(null));

  return (
    <nav className="hidden lg:flex items-center space-x-8">
      {navItems.map((item) => (
        <div key={item.href} className="relative gap-8">
          {item.isDropdown ? (
            <div ref={dropdownRef}>
              <button
                onClick={() => setOpenDropdown(openDropdown === item.href ? null : item.href)}
                className="flex items-center space-x-2 text-white hover:text-[#00A5A3] transition-colors group"
              >
                <span className="relative">
                  {item.label}
                  {/* <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#C0F43C] scale-x-0 transition-transform group-hover:scale-x-100" /> */}
                </span>
                <ChevronDown 
                  className={`w-4 h-4 transition-transform duration-200 ${openDropdown === item.href ? 'rotate-180' : ''}`}
                />
              </button>
              {openDropdown === item.href && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-[#003B3D] rounded-md shadow-lg border border-white/10">
                  <div className="py-2">
                    <span className="block px-4 py-2 text-sm text-gray-400">
                      Coming soon...
                    </span>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <NavLink 
            href={item.href}
            className={`relative hover:text-[#00A5A3] ${pathname === item.href ? "text-[#00A5A3] font-bold border-b-2 pb-2 border-[#C0F43C]" : ""}`}
          >
            {item.label}
          </NavLink>
          )}
        </div>
      ))}
    </nav>
  );
}