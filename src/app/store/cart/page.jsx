"use client";
import { useContext } from "react";
import { StoreContext } from "@/app/context";
import OrderDetails from "@/app/ui/cart/OrderDetails";
import Payment from "@/app/ui/cart/Payment";

const CartPage = () => {
//   const { cartData } = useContext(StoreContext);

  return (
    <div className="p-4 w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-2">🛒 Your Cart</h2>
      {/* <p className="text-lg mb-4">
        You have {cartData.length} item(s) in your cart
      </p> */}
      <div>
        <OrderDetails />
        <Payment />
      </div>
    </div>
  );
};

export default CartPage;
