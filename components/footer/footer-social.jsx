"use client";

import { Twitter, Linkedin, Youtube, Facebook, Instagram } from 'lucide-react';

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Youtube, href: '#', label: 'YouTube' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
];

export function FooterSocial() {
  return (
    <div className="flex space-x-4">
      {socialLinks.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          aria-label={label}
        >
          <Icon className="w-4 h-4" />
        </a>
      ))}
    </div>
  );
}