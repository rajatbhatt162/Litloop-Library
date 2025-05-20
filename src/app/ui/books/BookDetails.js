import Image from "next/image";
import BuyOrRent from "./BuyRent";

const BookDetails = ({book}) => {
  return(
    <div className="w-full max-w-6xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <div className="relative aspect-[3/4] w-full rounded-lg overflow-hidden shadow-md">
              <Image 
                className="object-cover"
                src={book.cover} 
                alt={book.title} 
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                priority={true} />
            </div>
          </div>
          
          <div className="md:w-2/3 flex flex-col">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">{book.title}</h1>
            <p className="text-xl text-gray-600 italic mb-6">by {book.author}</p>
            
            <div className="flex flex-wrap gap-3 mb-6">
              {book.genre && (
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                  {book.genre}
                </span>
              )}
              {book.pages && (
                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                  {book.pages} pages
                </span>
              )}
              {book.stock ? (
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  {book.stock} in stock
                </span>
              ) : (
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                  Out of stock
                </span>
              )}
            </div>
            
            <div className="prose max-w-none mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">About this book</h3>
              <p className="text-gray-700">{book.description}</p>
            </div>
            
            <div className="mt-auto">
              <BuyOrRent book={book}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookDetails;