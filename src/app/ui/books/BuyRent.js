'use client'

import { ShoppingCartIcon, BookOpenIcon } from "@heroicons/react/24/solid";

const BuyOrRent = ({book}) => {
  return(
    <div className="flex flex-col sm:flex-row gap-4">
      <div className="flex-1">
        <button className="w-full bg-purple-600 hover:bg-purple-800 text-white font-medium py-3 px-6 rounded-md shadow-sm transition-colors duration-200 flex items-center justify-center">
          <ShoppingCartIcon className="w-5 h-5 mr-2" />
          Buy for {book.sellPrice} INR
        </button>
        <p className="text-sm text-gray-600 mt-2 text-center">
          {book?.sold ? 
            `${book?.sold} copies sold` : 
            `Be the first to buy this book!`}
        </p>
      </div>  
      <div className="flex-1">
        <button className="w-full border-2 border-purple-600 bg-white text-purple-600 hover:bg-purple-50 font-medium py-3 px-6 rounded-md shadow-sm transition-colors duration-200 flex items-center justify-center">
          <BookOpenIcon className="w-5 h-5 mr-2" />
          Rent for {book.rentPrice} INR/month
        </button>
        <p className="text-sm text-gray-600 mt-2 text-center">
          {book.isRented ? 
            `Rented by ${book?.renterIds?.length} ${book?.renterIds?.length === 1 ? 'person' : 'people'}` : 
            `Be the first to rent this book!`}
        </p>
      </div>
    </div>
  )
}

export default BuyOrRent;