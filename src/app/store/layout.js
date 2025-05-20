import Sidebar from "../ui/sidebar/Sidebar"
import MobileNavbar from "../ui/sidebar/MobileNavbar"
import StoreProvider from "../provider"

export const metadata = {
  title: 'LitLoop - Buy or Rent Books',
  description: 'An Online Bookstore to Sell and Rent Used Books',
}

export default function BookStoreLayout({ children }) {
  return (
    <StoreProvider>
      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Desktop Sidebar - hidden on mobile */}
        <div className="hidden md:block md:w-64 flex-shrink-0 md:sticky md:top-0 md:h-screen z-10">
          <Sidebar />
        </div>
        
        {/* Main Content */}
        <div className="flex-grow overflow-auto p-4 pb-20 md:pb-4">
          {children}
        </div>
        
        {/* Mobile Navigation - hidden on desktop */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-50">
          <MobileNavbar />
        </div>
      </div>
    </StoreProvider>
  )
}
