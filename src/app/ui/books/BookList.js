import BookCard from "./BookCard";
import { BookOpenIcon } from "@heroicons/react/24/solid";

const BookList = ({books}) => {
  return(
    <div className="w-full max-w-7xl mx-auto">
      {/* Header Section with Gradient Background */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-lg shadow-md mb-8 overflow-hidden">
        <div className="flex items-start px-6 py-6 md:py-8">
          <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg mr-4">
            <BookOpenIcon className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Available Books</h2>
            <p className="text-purple-100">Discover our collection of {books.length} books across various genres</p>
          </div>
        </div>
        
        {/* Category Pills - Optional */}
        <div className="px-6 py-4 bg-purple-700/40 backdrop-blur-none flex flex-wrap gap-2">
          <span className="bg-white/20 text-white px-4 py-1 rounded-full text-sm font-medium">All</span>
          <span className="bg-white/10 hover:bg-white/20 text-white px-4 py-1 rounded-full text-sm font-medium cursor-pointer transition-colors">Fiction</span>
          <span className="bg-white/10 hover:bg-white/20 text-white px-4 py-1 rounded-full text-sm font-medium cursor-pointer transition-colors">Non-Fiction</span>
          <span className="bg-white/10 hover:bg-white/20 text-white px-4 py-1 rounded-full text-sm font-medium cursor-pointer transition-colors">Academic</span>
          <span className="bg-white/10 hover:bg-white/20 text-white px-4 py-1 rounded-full text-sm font-medium cursor-pointer transition-colors">Self-Help</span>
        </div>
      </div>
      
      {/* Book Grid */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default BookList;
