'use client'

import {useContext} from 'react';
import { StoreContext } from '@/app/context';
import { 
  HomeIcon, 
  UserGroupIcon, 
  BookOpenIcon, 
  CubeTransparentIcon, RectangleStackIcon, CogIcon, TruckIcon, Squares2X2Icon, ShoppingCartIcon } from "@heroicons/react/24/solid";
import { usePathname } from 'next/navigation';
import Link from "next/link";

const links = [
  {name: 'Home', href: '/', icon: HomeIcon},
  {name: 'Books', href: '/store', icon: BookOpenIcon},
  {name: 'Sell or Lend', href: '/store/sell-lend', icon: RectangleStackIcon},
  {name: 'Cart', href: '/store/cart', icon: ShoppingCartIcon},
  {name: 'Track Order', href: '/store/track-order', icon: TruckIcon},
  {name: 'Community', href: '/store/community', icon: UserGroupIcon},
  {name: 'Settings', href: '/store/settings', icon: CogIcon},
  {name: 'About', href: '/store/about', icon: Squares2X2Icon},
  {name: 'Admin', href: '/store/admin', icon: CubeTransparentIcon},
]

const NavLinks = () => {
  const {cartData} = useContext(StoreContext);
  const pathname = usePathname();
  
  return(
    <div className="space-y-1">
      {
        links.map((link) => {
          const IconComponent = link.icon;
          const isActive = pathname === link.href || 
                           (link.href !== '/' && pathname?.startsWith(link.href));
          
          return (
            <Link 
              key={link.name}
              href={link.href}
              className={`flex h-[48px] w-full items-center gap-2 rounded-md p-2 text-sm font-medium transition-colors duration-200
                ${isActive 
                  ? 'bg-purple-100 text-purple-700' 
                  : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-purple-600'}`}
            >
              <IconComponent className={`w-5 h-5 ${isActive ? 'text-purple-700' : 'text-gray-500'}`}/>
              <span>
                {(link.name === 'Cart' && cartData && cartData.length > 0) 
                  ? `${link.name} (${cartData.length})` 
                  : link.name}
              </span>
              {link.name === 'Cart' && cartData && cartData.length > 0 && (
                <span className="ml-auto flex h-5 w-5 items-center justify-center rounded-full bg-purple-600 text-xs text-white">
                  {cartData.length}
                </span>
              )}
            </Link>
          )
        })
      }
    </div>
  )
}

export default NavLinks;