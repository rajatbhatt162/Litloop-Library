'use client';

import Link from "next/link";
import {
  HomeIcon,
  ShoppingBagIcon,
  BookOpenIcon,
  InformationCircleIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

const links = [
  { name: "Home", href: "/", icon: HomeIcon },
  { name: "Store", href: "/store", icon: ShoppingBagIcon },
  { name: "Order", href: "/store/track-order", icon: BookOpenIcon },
  { name: "About", href: "/store/about", icon: InformationCircleIcon },
  { name: "Communities", href: "/store/communities", icon: PhoneIcon },
];

const NavLinks = () => {
  return (
    <nav className="flex flex-row md:flex-col bg-white shadow-md rounded-lg p-4 w-full md:w-56 max-w-full gap-4">
      {links.map((link) => {
        const Icon = link.icon;
        return (
          <Link
            key={link.href}
            href={link.href}
            className="flex items-center gap-3 p-2 rounded-md text-gray-700 hover:bg-purple-100 hover:text-purple-800 transition-all duration-200"
          >
            <Icon className="w-5 h-5" />
            <span className="text-sm font-medium">{link.name}</span>
          </Link>
        );
      })}
    </nav>
  );
};

export default NavLinks;
