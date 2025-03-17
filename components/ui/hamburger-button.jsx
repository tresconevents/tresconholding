"use client";

export function HamburgerButton({ isOpen, onClick }) {
  return (
    <button
      onClick={onClick}
      className="relative w-10 h-10 focus:outline-none"
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <span
          className={`block h-0.5 w-6 bg-white transform transition-all duration-300 ${
            isOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1'
          }`}
        />
        <span
          className={`block h-0.5 w-6 bg-white transform transition-all duration-300 ${
            isOpen ? 'opacity-0' : 'opacity-100'
          }`}
        />
        <span
          className={`block h-0.5 w-6 bg-white transform transition-all duration-300 ${
            isOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1'
          }`}
        />
      </div>
    </button>
  );
}