import React from "react";

function EmptyCart() {
  return (
    <div className="flex flex-col items-center text-center font-sans m-8">
      <h2 className="font-semibold text-xl">YOUR CART MISSES YOU :( </h2>
      <span className="mt-4 text-sm px-2">Let’s personalise your cart & find the perfect
      streetwear gear to match you!</span>
    </div>
  );
}

export default EmptyCart;
