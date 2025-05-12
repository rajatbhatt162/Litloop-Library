import Sidebar from "../ui/sidebar/Sidebar";
import StoreProvider from "../provider";
export const metadata = {
  title: "Home Page",
  description: "Purchase Best Author Books",
};

export default function BookStoreLayout({ children }) {
  return (
    <StoreProvider>
      <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row">
        <div className="w-full sm:w-full md:w-60 lg:w-60 xl:w-60 bg-white shadow-md p-4">
          <Sidebar />
        </div>
        <div className="flex-1 p-4 overflow-auto">{children}</div>
      </div>
    </StoreProvider>
  );
}
