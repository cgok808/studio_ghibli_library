import React from "react";
import { Link } from "react-router-dom";

const Cart = ({ cart, changeQuantity, removeItem, totals }) => {
  return (
    <div className="min-h-screen bg-cream">
      <div className="py-10">
        <div className="w-full max-w-6xl mx-auto px-6">
          <p className="text-green-700 font-bold tracking-widest uppercase text-xs mb-1 font-sans">
            Your Selection
          </p>
          <h2 className="font-heading font-bold text-4xl text-green-950 mb-8">
            Shopping Cart
          </h2>

          {!cart || !cart.length ? (
            <div className="flex flex-col items-center justify-center py-28">
              <p className="text-2xl font-heading text-green-900 mb-3">
                Your cart is empty
              </p>
              <p className="text-gray-400 mb-10 font-sans">
                Add some Ghibli magic to your collection!
              </p>
              <Link to="/films">
                <button className="bg-green-800 text-white cursor-pointer outline-none border-2 border-green-800 px-10 py-4 text-lg rounded-xl box__shadow transition__ease hover:shadow-none hover:translate-y-1 font-semibold font-sans">
                  Browse Films
                </button>
              </Link>
            </div>
          ) : (
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="flex-1">
                <div className="bg-green-800 rounded-t-2xl px-6 py-3 text-white flex text-sm font-semibold font-sans">
                  <span className="w-3/5">Film</span>
                  <span className="w-1/5 text-center">Qty</span>
                  <span className="w-1/5 text-right">Price</span>
                </div>
                <div className="bg-white rounded-b-2xl shadow-sm divide-y divide-tan-200">
                  {cart.map((item) => {
                    const itemPrice = item.salePrice || item.originalPrice;
                    return (
                      <div className="px-6 py-4 flex items-center" key={item.id}>
                        <div className="w-3/5 flex items-center gap-4">
                          <img
                            className="w-16 h-20 object-cover rounded-xl shadow-sm flex-shrink-0"
                            src={item.image}
                            alt={item.title}
                          />
                          <div>
                            <p className="font-semibold text-green-900 mb-1 font-sans leading-snug">
                              {item.title}
                            </p>
                            <p className="text-sm text-gray-400 font-sans">
                              ${itemPrice.toFixed(2)} each
                            </p>
                            <button
                              className="text-sm text-red-500 hover:text-red-700 transition__ease font-semibold mt-1 font-sans"
                              onClick={() => removeItem(item)}
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                        <div className="w-1/5 flex justify-center">
                          <input
                            type="number"
                            className="p-2 w-16 border-2 border-tan-200 rounded-lg text-center font-semibold focus:outline-none focus:border-green-700 font-sans"
                            min={0}
                            max={99}
                            value={item.quantity}
                            onChange={(event) =>
                              changeQuantity(item, event.target.value)
                            }
                          />
                        </div>
                        <div className="w-1/5 text-right font-bold text-green-900 font-sans">
                          ${(itemPrice * item.quantity).toFixed(2)}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="lg:w-72">
                <div className="bg-white rounded-2xl shadow-sm p-6 sticky top-24">
                  <h3 className="font-heading text-xl font-bold text-green-900 mb-5 pb-4 border-b-2 border-tan-200">
                    Order Summary
                  </h3>
                  <div className="space-y-3 mb-6 font-sans">
                    <div className="flex justify-between text-gray-500">
                      <span>Subtotal</span>
                      <span>${totals.subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-gray-500">
                      <span>Tax (10%)</span>
                      <span>${totals.tax.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between font-bold text-green-900 text-lg pt-3 border-t-2 border-tan-200">
                      <span>Total</span>
                      <span>${totals.total.toFixed(2)}</span>
                    </div>
                  </div>
                  <button
                    className="w-full bg-green-800 text-white cursor-pointer outline-none border-2 border-green-800 py-4 text-lg rounded-xl box__shadow transition__ease hover:shadow-none hover:translate-y-1 font-semibold font-sans"
                    onClick={() => alert("Feature has not been implemented")}
                  >
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
