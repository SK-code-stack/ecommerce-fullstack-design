// CartPage.jsx
import React, { useState } from "react";

const initialCartItems = [
  {
    id: 1,
    name: "T-shirts with multiple colors, for men and lady",
    price: 78.99,
    quantity: 9,
    seller: "Artel Market",
    size: "medium",
    color: "blue",
    material: "Plastic",
  },

];

const initialSavedItems = [1, 2, 3, 4].map((i) => ({
  id: i,
  name: `img ${i}`,
  price: 99.5,
}));

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [savedItems, setSavedItems] = useState(initialSavedItems);
  const [coupon, setCoupon] = useState("");
  
  const handleRemove = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const handleSaveForLater = (item) => {
    handleRemove(item.id);
    setSavedItems([...savedItems, item]);
  };

  const handleMoveToCart = (item) => {
    setSavedItems(savedItems.filter(i => i.id !== item.id));
    setCartItems([...cartItems, { ...item, quantity: 1 }]);
  };

  const handleQuantityChange = (id, quantity) => {
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity: parseInt(quantity) } : item
    ));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = 60;
  const tax = 14;
  const total = subtotal - discount + tax;

  return (
    <>
    <div className="p-4 md:p-8 max-w-6xl mx-auto  ">
      <h3 className="text-xl font-bold mb-4">My cart ({cartItems.length})</h3>
      <div className="grid md:grid-cols-3 gap-4 ">
        <div className="md:col-span-2 space-y-4 bg-white rounded-xl border-1 border-gray-300 p-2">
          {cartItems.map((item) => (
            <div key={item.id} className="border-b-1 border-gray-300  p-4 flex flex-col md:flex-row  justify-between">
                <div className="flex gap-2">
                    <div className=" w-2/12">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRerSKGX1pm2GXuSTIqTbFnIe87I2T_9Lze1g&s" alt="my img" className="bg-black"/>
                    </div>
                    <div>
                        <h5 className="font-semibold">{item.name}</h5>
                        <p className="text-sm text-gray-500">Size: {item.size}, Color: {item.color}, Material: {item.material}</p>
                        <p className="text-sm text-gray-500">Seller: {item.seller}</p>
                        <div className="flex gap-2">
                        <button onClick={() => handleRemove(item.id)} className="text-red-600 rounded px-2 py-1 shadow border-1 border-gray-300">Remove</button>
                        <button onClick={() => handleSaveForLater(item)} className="text-blue-600 rounded px-2 py-1 shadow border-1 border-gray-300">Save for later</button>
                        </div>
                    </div>
                </div>
              <div className="flex flex-col items-end space-y-2">
                <p className="font-semibold">${item.price}</p>
                <select value={item.quantity} onChange={(e) => handleQuantityChange(item.id, e.target.value)} className="border rounded p-1">
                  {[...Array(10).keys()].map(i => (
                    <option key={i+1} value={i+1}>Qty: {i+1}</option>
                  ))}
                </select>
              </div>
            </div>
          ))}
          <div className="flex justify-between">
            <button className="bg-blue-600 px-1 py-2 text-white rounded">Back to shop</button>
            <button onClick={() => setCartItems([])} className="bg-white px-1 py-2 text-blue-600 rounded border-1 border-gray-300">Remove all</button>
          </div>
        </div>

        {/* Coupon and Summary */}
        <div className="border rounded-lg p-4 space-y-4 ">
          <div className="bg-white border-1 border-gray-300 p-4 rounded-xl shadow">
            <p className="font-semibold text-gray-500">Have a coupon?</p>
            <div className="flex mt-2 border-1 border-gray-300 rounded overflow-hidden">
              <input type="text" value={coupon} onChange={(e) => setCoupon(e.target.value)} placeholder="Add coupon" className=" p-2 w-full" />
              <button className=" text-blue-600 px-4 rounded-r border-l border-gray-300 hover:bg-blue-600 hover:text-white">Apply</button>
            </div>
          </div>
          <div className="bg-white rounded-xl border-1 border-gray-300 p-4 space-y-1 shadow">
            <p>Subtotal: ${subtotal.toFixed(2)}</p>
            <p>Discount: -${discount.toFixed(2)}</p>
            <p className="">Tax: +${tax.toFixed(2)}</p>
            <hr />
            <p className="font-bold">Total: ${total.toFixed(2)}</p>
            <button className="bg-green-600 text-white w-full py-2 rounded">Checkout</button>
          {/* img for payment methods */}
          <div className="mt-4 flex justify-between">
            <img src="https://www.freepnglogos.com/uploads/paypal-logo-png/paypal-logo-png-0.png" alt="p" className="w-full  border-1 border-gray-300 object-cover mt-2 rounded" />
            <img src="https://www.freepnglogos.com/uploads/paypal-logo-png/paypal-logo-png-0.png" alt="p" className="w-full  border-1 border-gray-300 object-cover mt-2 rounded" />
            <img src="https://www.freepnglogos.com/uploads/paypal-logo-png/paypal-logo-png-0.png" alt="p" className="w-full  border-1 border-gray-300 object-cover mt-2 rounded" />
            <img src="https://www.freepnglogos.com/uploads/paypal-logo-png/paypal-logo-png-0.png" alt="p" className="w-full  border-1 border-gray-300 object-cover mt-2 rounded" />
            <img src="https://www.freepnglogos.com/uploads/paypal-logo-png/paypal-logo-png-0.png" alt="p" className="w-full  border-1 border-gray-300 object-cover mt-2 rounded" />
          </div>
          </div>
        </div>
      </div>

      {/* Saved for Later */}
      <div className="mt-10 bg-white p-2 shadow rounded-xl">
        <h3 className="text-lg font-semibold mb-4">Saved for later</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4  ">
          {savedItems.map((item) => (
            <div key={item.id} className="p-4 rounded">
              <div className="h-24 bg-gray-200 flex items-center justify-center mb-2">{item.name}</div>
              <p>${item.price.toFixed(2)}</p>
              <p>GoPro HERO6 4K Action Camera - Black</p>
              <button onClick={() => handleMoveToCart(item)} className="text-blue-600 mt-2 border-1 border-gray-300 rounded px-1 py-1">
                <i className="fas fa-shopping-cart mr-2"></i>
                Move to cart
            </button>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}
