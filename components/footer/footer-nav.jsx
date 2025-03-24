"use client";

const navigation = {
  menu: [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#' },
    { label: 'Blogs', href: '#' },
    { label: 'News & Press-center', href: '#' },
  ],
  ventures: [
    { label: 'Trescon Events', href: '#' },
    { label: 'Demandify', href: '#' },
    { label: 'Arium', href: '#' },
    { label: 'Aura Finance', href: '#' },
    { label: 'Aspino Digital', href: '#' }
  ],
  products: [
    { label: 'Magure', href: '#' },
    { label: 'Blive', href: '#' }
  ]
};

export function FooterNav() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Menu</h3>
        <ul className="space-y-3">
          {navigation.menu.map((item) => (
            <li key={item.label}>
              <a href={item.href} className="text-gray-300 hover:text-white transition-colors">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="order-2 sm:order-none">
        <h3 className="text-lg font-semibold mb-4">Ventures</h3>
        <ul className="space-y-3">
          {navigation.ventures.map((item) => (
            <li key={item.label}>
              <a href={item.href} className="text-gray-300 hover:text-white transition-colors">
                {item.label}
              </a>
            </li>
          ))}
          {/* Mobile-only products */}
          <div className="sm:hidden">
            {navigation.products.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="text-gray-300 hover:text-white transition-colors">
                  {item.label}
                </a>
              </li>
            ))}
          </div>
        </ul>
      </div>
      
      {/* Desktop-only products */}
      <div className="hidden sm:block text-left">
        <ul className="space-y-3">
          {navigation.products.map((item) => (
            <li key={item.label}>
              <a href={item.href} className="text-gray-300 hover:text-white transition-colors">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}