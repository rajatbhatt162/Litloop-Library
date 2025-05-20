import { 
  CheckCircleIcon, 
  TruckIcon, 
  HomeIcon, 
  PackageIcon
} from "@heroicons/react/24/solid";

const orderStatus = {
  orderId: "A009434567",
  orderDate: "June 15, 2023",
  estimatedDelivery: "June 20, 2023",
  status: "shipping", // can be "processing", "shipping", "delivered"
  customerName: "John Doe",
  shippingAddress: "123 Book Lane, Reading City, 56789",
  items: [
    { title: "The Great Gatsby", price: 299, type: "Buy" },
    { title: "To Kill a Mockingbird", price: 349, type: "Buy" },
    { title: "The Alchemist", price: 120, type: "Rent" }
  ],
  steps: [
    { id: 1, name: 'Order Placed', status: 'complete', date: 'June 15, 2023' },
    { id: 2, name: 'Processing', status: 'complete', date: 'June 16, 2023' },
    { id: 3, name: 'Shipped', status: 'current', date: 'June 17, 2023' },
    { id: 4, name: 'Delivered', status: 'upcoming', date: 'Est. June 20, 2023' },
  ]
};

const TrackOrder = () => {
  return(
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Order Header */}
        <div className="bg-purple-600 text-white px-6 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold">Track Your Order</h1>
              <p className="opacity-90">Order placed on {orderStatus.orderDate}</p>
            </div>
            <div className="text-right">
              <p className="text-lg font-semibold">Order #{orderStatus.orderId}</p>
              <p className="text-sm opacity-90">Est. Delivery: {orderStatus.estimatedDelivery}</p>
            </div>
          </div>
        </div>

        {/* Tracking Progress */}
        <div className="p-6 border-b">
          <div className="relative">
            <div className="overflow-hidden h-2 mb-6 text-xs flex rounded bg-gray-200">
              <div 
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-600"
                style={{ width: orderStatus.status === 'processing' ? '33%' : orderStatus.status === 'shipping' ? '66%' : '100%' }}>
              </div>
            </div>
            <div className="flex justify-between">
              {orderStatus.steps.map((step) => (
                <div key={step.id} className="flex flex-col items-center">
                  <div className={`rounded-full p-2 ${
                    step.status === 'complete' 
                      ? 'bg-green-100 text-green-600' 
                      : step.status === 'current' 
                        ? 'bg-purple-100 text-purple-600' 
                        : 'bg-gray-100 text-gray-400'
                  }`}>
                    {step.status === 'complete' ? (
                      <CheckCircleIcon className="h-6 w-6" />
                    ) : step.id === 2 ? (
                      <PackageIcon className="h-6 w-6" />
                    ) : step.id === 3 ? (
                      <TruckIcon className="h-6 w-6" />
                    ) : (
                      <HomeIcon className="h-6 w-6" />
                    )}
                  </div>
                  <p className={`mt-2 text-sm font-medium ${
                    step.status === 'complete' 
                      ? 'text-green-600' 
                      : step.status === 'current' 
                        ? 'text-purple-600' 
                        : 'text-gray-400'
                  }`}>
                    {step.name}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">{step.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Order Details */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-lg font-semibold mb-3">Shipping Details</h2>
            <div className="bg-gray-50 p-4 rounded-md">
              <p className="font-medium">{orderStatus.customerName}</p>
              <p className="text-gray-600 mt-1">{orderStatus.shippingAddress}</p>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-3">Order Summary</h2>
            <div className="bg-gray-50 p-4 rounded-md">
              <div className="divide-y">
                {orderStatus.items.map((item, index) => (
                  <div key={index} className="py-2 flex justify-between">
                    <div>
                      <p className="font-medium">{item.title}</p>
                      <p className="text-sm text-gray-500">{item.type}</p>
                    </div>
                    <p className="font-medium">₹{item.price}</p>
                  </div>
                ))}
              </div>
              <div className="border-t mt-3 pt-3 flex justify-between font-bold">
                <p>Total</p>
                <p>₹{orderStatus.items.reduce((total, item) => total + item.price, 0)}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Help Section */}
        <div className="bg-gray-50 px-6 py-4 border-t">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-600">Need help with your order?</p>
              <p className="text-purple-600 font-medium">Contact Support</p>
            </div>
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200">
              View Order Details
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrackOrder;