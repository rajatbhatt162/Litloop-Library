import Image from "next/image";
import Link from "next/link";
import AddToCart from "./AddtoCart";
import { CurrencyRupeeIcon, ArchiveBoxIcon, ArchiveBoxXMarkIcon } from "@heroicons/react/24/solid";

const BookCard = ({book}) => {
  return(
    <div className="w-64 transition-all duration-300 hover:shadow-lg hover:scale-105">
      <Link href={`/store/${book.id}`}>
        <div className="flex flex-col h-[450px] rounded-xl bg-white p-4 shadow-md">
          <div className="mb-2">
            <h3 className="text-lg font-semibold text-gray-800 truncate">{book.title}</h3>
            <p className="text-sm text-gray-600 italic">by {book.author}</p>
          </div>
          <div className="relative w-full h-56 mb-4 overflow-hidden rounded-md">
            <Image 
              className="object-cover"
              src={book.cover} 
              alt={book.title} 
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={true} />
          </div>
          
          <div className="flex flex-col flex-grow">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                {book.stock ? 
                  <div className="flex items-center text-green-600">
                    <ArchiveBoxIcon className="w-4 h-4 mr-1"/> 
                    <span className="text-xs font-medium">{book.stock} in stock</span>
                  </div> : 
                  <div className="flex items-center text-red-600">
                    <ArchiveBoxXMarkIcon className="w-4 h-4 mr-1"/>
                    <span className="text-xs font-medium">Out of Stock</span>
                  </div>
                }
              </div>
              <div className="flex items-center text-purple-700 font-semibold">
                <CurrencyRupeeIcon className="w-4 h-4"/> 
                <span className="text-sm">{book.sellPrice}</span>
              </div>
            </div>
            
            <p className="text-xs text-gray-700 mb-1">
              {book.genre && <span className="bg-gray-200 rounded-full px-2 py-1 mr-1">{book.genre}</span>}
              {book.pages && <span>{book.pages} pages</span>}
            </p>
            
            <div className="mt-1 text-sm text-gray-700">
              <p>Rent: <span className="font-medium text-purple-700">{book.rentPrice} INR/month</span></p>
              <p className="text-xs mt-1">{book.isRented ? 
                `Rented by ${book?.renterIds?.length} ${book?.renterIds?.length === 1 ? 'customer' : 'customers'}` : 
                `Not rented yet`}</p>
            </div>
            
            <div className="mt-auto pt-2">
              <AddToCart book={book} />
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default BookCard;