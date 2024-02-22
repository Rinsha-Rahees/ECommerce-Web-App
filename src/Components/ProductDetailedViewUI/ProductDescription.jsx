import React from "react";
import { StarIcon } from "@heroicons/react/24/solid";

function ProductDescription({ description }) {
  const [title] = description.map((product) => {
    return product.title;
  });
  const [price] = description.map((product) => {
    return product.price;
  });

  return (
    <div className="flex flex-col justify-between items-center w-full ">
      <div className="flex justify-between items-center w-full tracking-wide">
        <span className="text-2xl">{title}</span>
        <span className="text-xl font-semibold">{price}</span>
      </div>
      <div className="flex justify-between text-xs w-full font-sans">
        <div className="flex flex-col">
          <span className="leading-3">Pants</span>
          <div className="flex">
            <StarIcon className="w-3" />
            <span className="leading-5 ml-0.5">1 review</span>
          </div>
        </div>
        <span className="leading-[3px]">tax included.</span>
      </div>
      <div className="flex justify-between items-center w-full mt-2">
        <span className="">
          HURRY!<span className="px-0.5 text-orange-500">6</span>LEFT
        </span>
        <div className="flex w-2/3 h-2 rounded-full">
          <span className="w-1/2 bg-black h-2 rounded-l-full"></span>
          <span className="w-1/2 bg-pink-200 h-2 rounded-r-full shadow-inner"></span>
        </div>
      </div>
    </div>
  );
}

export default ProductDescription;
