"use client";

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { NavLink } from '@/components/ui/nav-link';
import { navItems } from '@/components/navigation/nav-items';

export function SidebarNav({ onClose }) {
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <nav className="flex-1 py-6">
      <ul className="space-y-2">
        {navItems.map((item) => (
          <li key={item.href}>
            {item.isDropdown ? (
              <div>
                <button
                  onClick={() => setOpenDropdown(openDropdown === item.href ? null : item.href)}
                  className="w-full px-6 py-3 flex items-center justify-between text-white hover:text-[#C0F43C] hover:bg-white/5 transition-colors group"
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
                className="block px-6 py-3 hover:bg-white/5"
              >
                {item.label}
              </NavLink>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}