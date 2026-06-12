import React from "react";

const Price = ({ salePrice, originalPrice }) => {
  return (
    <div className="text-sm mt-1 font-sans">
      {salePrice ? (
        <div className="flex items-center gap-2">
          <span className="line-through text-gray-400">
            ${originalPrice.toFixed(2)}
          </span>
          <span className="text-green-600 font-bold">
            ${salePrice.toFixed(2)}
          </span>
        </div>
      ) : (
        <span className="text-gray-700 font-semibold">
          ${originalPrice.toFixed(2)}
        </span>
      )}
    </div>
  );
};

export default Price;
