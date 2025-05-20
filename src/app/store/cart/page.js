import CartItems from "@/app/ui/cart/CartItems";
import Payment from "@/app/ui/cart/Payment";
import OrderDetails from "@/app/ui/cart/OrderDetails";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";

const CartPage = () => {
  return(
    <div className="w-full max-w-7xl mx-auto">
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex items-center gap-3 mb-4">
          <ShoppingBagIcon className="w-8 h-8 text-purple-600" />
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Your Shopping Cart</h2>
            <p className="text-gray-600">Complete your purchase to get these amazing books</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <CartItems />
        </div>
        <div className="lg:col-span-1 space-y-6">
          <OrderDetails />
          <Payment />
        </div>
      </div>
    </div>
  )
}

export default CartPage;