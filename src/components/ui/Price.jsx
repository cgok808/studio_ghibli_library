import React from "react";

const Price = ({ salePrice, originalPrice }) => {
  return (
    <div className='text-base mt-2 mb-6'>
      {salePrice ? (
        <>
          <span className='line-through pr-1 text-[#bfbfbf]'>
            ${originalPrice.toFixed(2)}
          </span>
          ${salePrice.toFixed(2)}
        </>
      ) : (
        <>${originalPrice.toFixed(2)}</>
      )}
    </div>
  );
};

export default Price;
