"use client";
import { useContext } from "react";
import { StoreContext } from "@/app/context";
import Link from "next/link";
import {
  HomeIcon,
  ShoppingBagIcon,
  BookOpenIcon,
  InformationCircleIcon,
  PhoneIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";

const links = [
  { name: "Home", href: "/", icon: HomeIcon },
  { name: "Books", href: "/store", icon: ShoppingBagIcon },
  { name: "BuySell", href: "/store/track-order", icon: BookOpenIcon },
  { name: "Cart", href: "/store/cart", icon: ShoppingCartIcon },
  { name: "About", href: "/store/about", icon: InformationCircleIcon },
  { name: "Communities", href: "/store/communities", icon: PhoneIcon },
];

const NavLinks = () => {
  const { cartData } = useContext(StoreContext);

  return (
    <nav className="flex flex-row md:flex-col bg-white shadow-md rounded-lg p-4 w-full max-w-full gap-4 overflow-y-auto max-h-96">
      {links.map((link) => {
        const Icon = link.icon;
        return (
          <Link
            key={link.href}
            href={link.href}
            className="flex items-center gap-3 p-2 rounded-md text-gray-700 hover:bg-purple-100 hover:text-purple-800 transition-all duration-200"
          >
            <Icon className="w-5 h-5" />
            <span className="text-sm font-medium">
              {link.name === "Cart" && cartData?.length > 0
                ? `${link.name} (${cartData.length})`
                : link.name}
            </span>
          </Link>
        );
      })}
    </nav>
  );
};

export default NavLinks;
