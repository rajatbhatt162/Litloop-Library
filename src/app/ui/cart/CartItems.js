'use client'

import { toast } from 'react-toastify';
import { StoreContext } from '../../context';
import { useContext } from 'react';
import { TrashIcon, ShoppingBagIcon, BookOpenIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const CartItems = () => {
  const { cartData, setCartData } = useContext(StoreContext);

  const removeItem = (event, id, title) => {
    event.preventDefault();
    const filteredItem = cartData.filter((item) => {
      return item.id !== id;
    });

    setCartData([...filteredItem]);

    toast.success(`${title} has been removed from the Cart successfully!`, {
      autoClose: 1000,
      position: toast.POSITION.TOP_RIGHT
    });
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800 flex items-center">
          <span className="mr-2">{cartData.length}</span>
          {cartData.length === 1 ? 'Item' : 'Items'} in Cart
        </h2>
      </div>

      {cartData.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-12 px-6">
          <div className="bg-gray-100 p-6 rounded-full mb-4">
            <ShoppingBagIcon className="w-12 h-12 text-gray-400" />
          </div>
          <h3 className="text-xl font-medium text-gray-800 mb-2">Your cart is empty</h3>
          <p className="text-gray-600 text-center mb-6">Browse our collection and find your next favorite book!</p>
          <a 
            href="/store"
            className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-md transition-colors duration-200"
          >
            Browse Books
          </a>
        </div>
      ) : (
        <ul className="divide-y divide-gray-200">
          {cartData.map((item) => (
            <li key={item.id} className="p-4 hover:bg-gray-50 transition-colors duration-150">
              <div className="flex items-center space-x-4">
                <div className={`flex-shrink-0 p-2 rounded-full ${item.type === "Buy" ? 'bg-purple-100 text-purple-600' : 'bg-blue-100 text-blue-600'}`}>
                  {item.type === "Buy" ? (
                    <ShoppingBagIcon className="w-5 h-5" />
                  ) : (
                    <BookOpenIcon className="w-5 h-5" />
                  )}
                </div>
                
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">{item.title}</p>
                  <p className="text-sm text-gray-500">
                    {item.type === "Buy" 
                      ? `Buy: ₹${item.sellPrice}` 
                      : `Rent: ₹${item.rentPrice}/month`}
                  </p>
                </div>
                
                <div>
                  <button
                    onClick={(event) => removeItem(event, item.id, item.title)}
                    className="text-red-500 hover:text-red-700 focus:outline-none"
                  >
                    <TrashIcon className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default CartItems;