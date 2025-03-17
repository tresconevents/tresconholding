import { LAYOUT_CONSTANTS } from '@/lib/constants';

export function VenturesContainer({ children }) {
  return (
    <div 
      className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8"
   
    >
      {children}
    </div>
  );
}