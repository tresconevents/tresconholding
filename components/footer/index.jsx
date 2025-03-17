"use client";

import { FooterLogo } from './footer-logo';
import { FooterSocial } from './footer-social';
import { FooterNav } from './footer-nav';
import { FooterBottom } from './footer-bottom';

export function Footer() {
  return (
    <footer className="bg-[#003B3D] text-white py-16">
      <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Logo and Social Links */}
          <div className="lg:col-span-3 space-y-6">
            <FooterLogo />
            <p className="text-sm text-gray-300">For the latest Tresconnews, follow us on:</p>
            <FooterSocial />
          </div>
          
          {/* Navigation */}
          <div className="lg:col-span-9">
            <FooterNav />
          </div>
        </div>
        
        <FooterBottom />
      </div>
    </footer>
  );
}