import Link from "next/link";
import Logo from "./Logo";
import Navlinks from "./Navlinks";

const Sidebar = () => {
  return (
    <aside className="w-full md:w-60 bg-white shadow-md rounded-lg p-4 flex flex-col gap-6">
      <Link href="/store" className="flex items-center justify-start">
        <Logo />
      </Link>

      <div className="flex flex-col md:flex-col gap-4">
        <Navlinks />
        <button className="bg-purple-600 text-white rounded-md px-4 py-2 text-sm font-medium hover:bg-purple-700 transition">
          Sign Out
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
