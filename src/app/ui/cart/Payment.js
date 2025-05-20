'use client'

import { useRouter } from "next/navigation";
import { CreditCardIcon, LockClosedIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { StoreContext } from "../../context";

const Payment = () => {
  const router = useRouter();
  const { cartData } = useContext(StoreContext);
  
  const makePayment = () => {
    router.push('/store/track-order')
  }

  if (cartData.length === 0) {
    return null;
  }

  return(
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800 flex items-center">
          <CreditCardIcon className="w-5 h-5 mr-2 text-purple-600" />
          Payment Method
        </h2>
      </div>
      
      <div className="p-6">
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="card">
              Card Number
            </label>
            <input 
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors" 
              id="card" 
              type="text" 
              placeholder="1234 5678 9012 3456"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="expiry">
                Expiry Date
              </label>
              <input 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors" 
                id="expiry" 
                type="text" 
                placeholder="MM/YY"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="cvv">
                CVV/CVC
              </label>
              <input 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors" 
                id="cvv" 
                type="password" 
                placeholder="123"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">
              Name on Card
            </label>
            <input 
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors" 
              id="name" 
              type="text" 
              placeholder="John Doe"
            />
          </div>

          <button 
            type="button"
            onClick={makePayment}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2.5 px-4 rounded-md transition-colors duration-200 flex items-center justify-center"
          >
            <LockClosedIcon className="w-4 h-4 mr-2" />
            Pay Securely
          </button>
          
          <p className="mt-4 text-xs text-gray-500 text-center">
            <LockClosedIcon className="w-3 h-3 inline mr-1" />
            This is a demo store. Please do not enter real card details.
          </p>
        </form>
      </div>
    </div>
  )
}

export default Payment;