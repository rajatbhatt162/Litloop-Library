'use client'

import {useContext} from 'react';
import { StoreContext } from '../../context';
import Link from 'next/link';
import { ReceiptPercentIcon } from "@heroicons/react/24/solid";

const OrderDetails = () => {
  const {cartData} = useContext(StoreContext);

  const bookToBuy = cartData.filter((book) => {
    return book.type === "Buy"
  });

  const priceForBuy = bookToBuy.reduce(
    (accumulator, book) => accumulator + book.sellPrice,
    0,
  );

  const bookToRent = cartData.filter((book) => {
    return book.type === "Rent"
  });

  const priceForRent = bookToRent.reduce(
    (accumulator, book) => accumulator + book.rentPrice,
    0,
  );

  const deliveryCharge = 29;
  const totalAmount = priceForBuy + priceForRent + deliveryCharge;

  if (cartData.length === 0) {
    return null;
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800 flex items-center">
          <ReceiptPercentIcon className="w-5 h-5 mr-2 text-purple-600" />
          Order Summary
        </h2>
      </div>
      
      <div className="p-6">
        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="text-gray-600">Buying ({bookToBuy.length} item{bookToBuy.length !== 1 ? 's' : ''})</span>
            <span className="font-medium">₹{priceForBuy}</span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-gray-600">Renting ({bookToRent.length} item{bookToRent.length !== 1 ? 's' : ''})</span>
            <span className="font-medium">₹{priceForRent}</span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-gray-600">Shipping & Handling</span>
            <span className="font-medium">₹{deliveryCharge}</span>
          </div>
          
          <div className="border-t border-gray-200 pt-4 mt-4">
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold text-gray-900">Total</span>
              <span className="text-lg font-bold text-purple-600">₹{totalAmount}</span>
            </div>
            <p className="text-xs text-gray-500 mt-1">Including all taxes</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderDetails;