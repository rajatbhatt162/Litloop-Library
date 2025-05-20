'use client'

import { useContext } from 'react';
import { StoreContext } from '@/app/context';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { 
  HomeIcon, 
  BookOpenIcon, 
  ShoppingCartIcon,
  TruckIcon,
  UserGroupIcon
} from "@heroicons/react/24/solid";

// Only include essential navigation items for mobile
const navItems = [
  { name: 'Home', href: '/', icon: HomeIcon },
  { name: 'Books', href: '/store', icon: BookOpenIcon },
  { name: 'Cart', href: '/store/cart', icon: ShoppingCartIcon },
  { name: 'Track', href: '/store/track-order', icon: TruckIcon },
  { name: 'Community', href: '/store/community', icon: UserGroupIcon }
];

const MobileNavbar = () => {
  const { cartData } = useContext(StoreContext);
  const pathname = usePathname();

  return (
    <div className="bg-white border-t border-gray-200 shadow-lg">
      <div className="grid grid-cols-5 h-16">
        {navItems.map((item) => {
          const IconComponent = item.icon;
          const isActive = pathname === item.href || 
                          (item.href !== '/' && pathname?.startsWith(item.href));
          
          return (
            <Link 
              key={item.name}
              href={item.href}
              className={`flex flex-col items-center justify-center ${
                isActive ? 'text-purple-600' : 'text-gray-500'
              }`}
            >
              <div className="relative">
                <IconComponent className={`w-6 h-6 ${isActive ? 'text-purple-600' : 'text-gray-500'}`} />
                {item.name === 'Cart' && cartData && cartData.length > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-purple-600 text-[10px] text-white">
                    {cartData.length > 9 ? '9+' : cartData.length}
                  </span>
                )}
              </div>
              <span className="mt-1 text-xs">
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MobileNavbar; 