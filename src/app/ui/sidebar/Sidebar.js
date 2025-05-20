import Link from 'next/link';
import {ArrowLeftOnRectangleIcon} from '@heroicons/react/24/solid';

import Logo from './Logo';
import NavLinks from './NavLinks';

const Sidebar = () => {
  return(
    <div className="flex h-full flex-col bg-gradient-to-b from-gray-100 to-gray-200 border-r border-gray-200 shadow-md">
      <Link
        className="mb-4 flex h-20 items-end justify-start rounded-md bg-purple-600 p-4 mx-3 mt-3"
        href="/store"
      >
        <div className="w-32 text-white md:w-40">
          <Logo />
        </div>
      </Link>
      <div className="px-3 py-2 overflow-y-auto">
        <div className="space-y-1.5">
          <NavLinks />
          <div className="pt-4 mt-4 border-t border-gray-300">
            <form>
              <button className="flex w-full h-[48px] items-center gap-2 rounded-md bg-white p-3 text-sm font-medium text-gray-600 hover:bg-red-50 hover:text-red-600 transition-colors duration-200 md:justify-start md:px-3">
                <ArrowLeftOnRectangleIcon className="w-6 text-gray-600" />
                <div className="md:block">Sign Out</div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar;