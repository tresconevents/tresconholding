import Link from 'next/link';
import Image from 'next/image';

export function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <Image
        src="/navbar_logo.svg"
        alt="Trescon Logo"
        width={100}
        height={60}
        priority
      />
    </Link>
  );
}