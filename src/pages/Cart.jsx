import React from "react";
import { Link } from "react-router-dom";

const Cart = ({cart, changeQuantity, removeItem, totals}) => {
  return (
    <div className='bg-green-400 flex-1 flex flex-col'>
      <div className='flex-1 bg-gray-100 '>
        <div className='py-6 px-0 '>
          <div className='w-full max-w-7xl my-0 mx-auto py-0 px-6'>
            <div className='py-0 px-6 mb-2 text-3xl text-[#242424] flex items-center'>
              <h2 className='mb-4'>Cart</h2>
            </div>
            <div>
              <div className='bg-[#42D67B] my-0 mx-6 py-2 px-4 text-white flex'>
                <span className='w-3/5 flex'>Movie</span>
                <span className='w-2/5 flex items-center'>Quantity</span>
                <span className='w-full max-w-24 flex items-center justify-end text-base'>
                  Price
                </span>
              </div>
              <div>
                {cart.map((item) => {
                  const itemPrice = item.salePrice || item.originalPrice;
                  return (
                    <div className='m-6 flex pr-2' key={item.id}>
                      <div className='w-3/5 flex'>
                        <img
                          className='w-full max-w-24 max-h-32'
                          src={item.image}
                        />
                        <div className='flex flex-col justify-center py-2 px-4'>
                          <span className='text-xl mb-4'>{item.title}</span>
                          <span className='mb-4'>${itemPrice.toFixed(2)}</span>
                          <button
                            className='bg-transparent text-[#cf0000] border-0 pl-0 w-12'
                            onClick={() => removeItem(item)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                      <div className='w-2/5 flex items-center'>
                        <input
                          type='number'
                          className='p-2 w-16'
                          min={0}
                          max={99}
                          value={item.quantity}
                          onChange={(event) =>
                            changeQuantity(item, event.target.value)
                          }
                        />
                      </div>
                      <div className='w-full max-w-24 flex items-center justify-end text-lg '>
                        ${(itemPrice * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  );
                })}
                {(!cart || !cart.length) && (
                  <div className='flex flex-col items-center justify-center'>
                    <h2>You don't have any movies in your cart!</h2>
                    <Link to='/films'>
                      <button className='bg-green-200 bg-no-repeat cursor-pointer outline-none border-2 border-white px-6 py-3 text-xl md:text-2xl rounded-xl box__shadow transition__ease hover:shadow-none hover:transition-all hover:translate-y-1 m-5 font-semibold'>
                        Browse movies
                      </button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
            {cart && cart.length > 0 && (
              <div className='flex flex-col items-end py-0 px-6 w-full max-w-80 ml-auto text-base'>
                <div className='text-lg mb-6 w-full flex justify-between border-t-2 border-t-[#42D67B] pt-6'>
                  <span>Subtotal</span>
                  <span>${totals.subtotal.toFixed(2)}</span>
                </div>
                <div className='text-lg mb-6 w-full flex justify-between'>
                  <span>Tax</span>
                  <span>${totals.tax.toFixed(2)}</span>
                </div>
                <div className='text-lg mb-6 w-full flex justify-between font-bold'>
                  <span>Total</span>
                  <span>${totals.total.toFixed(2)}</span>
                </div>
                <button
                  className='bg-green-200 bg-no-repeat cursor-pointer outline-none border-2 border-white  text-xl md:text-2xl rounded-xl box__shadow transition__ease hover:shadow-none hover:transition-all hover:translate-y-1 m-5 font-semibold w-full py-3 px-0 '
                  onClick={() => alert(`Feature has not been implemented`)}
                >
                  Proceed to checkout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
