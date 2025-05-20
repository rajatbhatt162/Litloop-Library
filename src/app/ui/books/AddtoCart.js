'use client'

import { useContext } from "react";
import { StoreContext } from "@/app/context";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { toast } from 'react-toastify';

const AddToCart = ({book}) => {
  const {cartData, setCartData} = useContext(StoreContext);

  const handleCart = (e, reason) => {
    e.preventDefault();
    e.stopPropagation();
    const newData = {...book, type: reason} 
    const found = cartData.find((item) => {
      return item.id === book.id;
    });
    if (!found){
      setCartData([...cartData, newData]);
      toast.success(`Added ${book.title} to the Cart`, {
        autoClose: 1000,
        position: toast.POSITION.TOP_RIGHT
      });
    } else {
      toast.error(`OOPS!! You have added ${book.title} already to the Cart`, {
        position: toast.POSITION.TOP_RIGHT
      });
    }
  }
  
  return (
    <div className="flex justify-between w-full space-x-2">
      <button 
        className="flex-1 bg-purple-600 hover:bg-purple-800 text-white text-xs font-medium py-2 px-3 rounded-md transition-colors duration-200"
        onClick={(event) => handleCart(event, 'Buy')}>
        <ShoppingCartIcon className="w-4 h-4 mr-1 inline" />Buy
      </button>
      <button 
        className="flex-1 border border-purple-600 text-purple-600 hover:bg-purple-50 text-xs font-medium py-2 px-3 rounded-md transition-colors duration-200"
        onClick={(event) => handleCart(event, 'Rent')}>
        <ShoppingCartIcon className="w-4 h-4 mr-1 inline" />Rent
      </button>
    </div>
  );
};

export default AddToCart;