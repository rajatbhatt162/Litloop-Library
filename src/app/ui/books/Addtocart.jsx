"use client";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { toast } from "react-toastify";
import { useContext } from "react";
import { StoreContext } from "@/app/context";

const AddToCart = ({ book }) => {
  const { cartData, setCartData } = useContext(StoreContext);
  const handleCart = (event, action) => {
    event.preventDefault();
    const newData = { ...book, type: action };
    setCartData([...cartData, newData]);
    console.log(cartData);
    toast.success(`Added ${newData.title} to the cart`, {
      autoClose: 1000,
      position: "top-right",
    });
    // You might want to send `newData` to a cart context or backend here
  };

  return (
    <div className="flex justify-around mt-5 p-1">
      <button
        className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-2 border-10"
        onClick={(event) => handleCart(event, "Buy")}
      >
        <ShoppingBagIcon className="w-5 mr-0.5 inline" /> Buy
      </button>
      <button
        className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-3 border-10 rounded-sm"
        onClick={(event) => handleCart(event, "Add")}
      >
        <ShoppingBagIcon className="w-5 mr-0.5 inline" /> AddCart
      </button>
    </div>
  );
};

export default AddToCart;
