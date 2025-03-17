"use client";

import Image from 'next/image';
import Link from 'next/link';

export function FooterLogo() {
  return (
    <Link href="/" className="inline-block">
      <Image
        src="/navbar_logo.svg"
        alt="Trescon Holdings"
        width={150}
        height={40}
        className="h-10 w-auto"
      />
    </Link>
  );
}