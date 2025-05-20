import Link from "next/link";
import Image from "next/image";
import background from "../../public/home/book-bg.png";
import { 
  SparklesIcon, 
  BookOpenIcon, 
  TruckIcon, 
  UserGroupIcon, 
  CreditCardIcon,
  ArrowRightIcon
} from "@heroicons/react/24/solid";

export default function Home() {
  // Featured book categories
  const categories = [
    { name: "Fiction", count: 153, color: "bg-blue-100 text-blue-700" },
    { name: "Non-Fiction", count: 87, color: "bg-green-100 text-green-700" },
    { name: "Academic", count: 64, color: "bg-yellow-100 text-yellow-700" },
    { name: "Children", count: 42, color: "bg-red-100 text-red-700" },
    { name: "Self-Help", count: 76, color: "bg-indigo-100 text-indigo-700" },
    { name: "Poetry", count: 38, color: "bg-pink-100 text-pink-700" },
  ];

  // Features/benefits of using LitLoop
  const features = [
    {
      icon: <BookOpenIcon className="w-6 h-6" />,
      title: "Extensive Collection",
      description: "Access thousands of titles across multiple genres and categories."
    },
    {
      icon: <CreditCardIcon className="w-6 h-6" />,
      title: "Affordable Pricing",
      description: "Buy new and used books at competitive prices or rent for even less."
    },
    {
      icon: <TruckIcon className="w-6 h-6" />,
      title: "Fast Delivery",
      description: "Get your books delivered to your doorstep within 2-3 business days."
    },
    {
      icon: <UserGroupIcon className="w-6 h-6" />,
      title: "Join Community",
      description: "Connect with fellow readers and participate in book discussions."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center bg-gradient-to-b from-purple-900 to-purple-700 text-white h-[90vh] overflow-hidden">
        {/* Background Image */}
        <Image
          className="opacity-20 object-cover"
          alt="Background"
          src={background}
          quality={100}
          fill
          sizes="100vw"
          priority
        />
        
        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-white p-3 rounded-full mr-3">
              <SparklesIcon className="w-10 h-10 text-purple-600" />
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight">DoonStore</h1>
          </div>
          
          <p className="mt-6 text-xl sm:text-2xl max-w-3xl mx-auto text-purple-100">
            Your one-stop destination for buying, selling, and renting books at affordable prices
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/store"
              className="bg-white text-purple-700 hover:bg-purple-50 px-6 py-3 rounded-lg text-lg font-medium transition-colors duration-200 flex items-center justify-center"
            >
              Browse Books <ArrowRightIcon className="w-5 h-5 ml-2" />
            </Link>
            
            <Link
              href="/store/sell-lend"
              className="bg-purple-600 text-white border border-purple-300 hover:bg-purple-500 px-6 py-3 rounded-lg text-lg font-medium transition-colors duration-200"
            >
              Sell or Lend Books
            </Link>
          </div>
        </div>
        
        {/* Curved bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto fill-white">
            <path d="M0,64L80,80C160,96,320,128,480,128C640,128,800,96,960,85.3C1120,75,1280,85,1360,90.7L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Explore Book Categories</h2>
          <p className="mt-4 text-xl text-gray-600">Find books across various genres and subjects</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category, index) => (
            <Link 
              key={index} 
              href="/store" 
              className={`${category.color} rounded-lg p-4 text-center transition-transform hover:scale-105`}
            >
              <p className="font-bold text-lg">{category.name}</p>
              <p className="text-sm font-medium">{category.count} Books</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose DoonStore?</h2>
            <p className="mt-4 text-xl text-gray-600">Benefits that make us the preferred choice for book lovers</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center text-purple-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-purple-700 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Reading?</h2>
          <p className="text-xl text-purple-100 mb-8">
            Join DoonStore today and discover your next favorite book from our extensive collection.
          </p>
          <Link
            href="/store"
            className="bg-white text-purple-700 hover:bg-purple-50 px-8 py-3 rounded-lg text-lg font-medium inline-block transition-colors duration-200"
          >
            Explore the Store
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <SparklesIcon className="w-6 h-6 mr-2 text-purple-400" />
              <span className="text-xl font-bold">DoonStore</span>
            </div>
            <p className="text-gray-400">Your one-stop bookstore for buying, selling, and renting books.</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/store" className="hover:text-purple-400">Browse Books</Link></li>
              <li><Link href="/store/sell-lend" className="hover:text-purple-400">Sell or Lend</Link></li>
              <li><Link href="/store/track-order" className="hover:text-purple-400">Track Order</Link></li>
              <li><Link href="/store/community" className="hover:text-purple-400">Community</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/store" className="hover:text-purple-400">Fiction</Link></li>
              <li><Link href="/store" className="hover:text-purple-400">Non-Fiction</Link></li>
              <li><Link href="/store" className="hover:text-purple-400">Academic</Link></li>
              <li><Link href="/store" className="hover:text-purple-400">Self-Help</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-400 mb-2">Email: contact@DoonStore.com</p>
            <p className="text-gray-400 mb-2">Phone: +91 1234567890</p>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} DoonStore. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
