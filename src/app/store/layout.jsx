import Sidebar from "../ui/sidebar/Sidebar";

export const metadata = {
  title: "Home Page",
  description: "Purchase Best Author Books",
};

export default function BookStoreLayout({ children }) {
  return (
    <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row">
      {/* Sidebar: Fixed width on large screens, full width on small screens */}
      <div className="w-full sm:w-full md:w-60 lg:w-60 xl:w-60 bg-white shadow-md p-4">
        <Sidebar />
      </div>

      {/* Main Content: Takes remaining width, will be on the right side of the sidebar */}
      <div className="flex-1 p-4 overflow-auto">
        {children}
      </div>
    </div>
  );
}
