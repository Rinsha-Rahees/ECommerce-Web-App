import React from "react";
import ButtonStyle from "../ButtonStyle";
import { HeartIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";

function ProductCard({ productDetails }) {
  return (
    <div className="flex flex-col border rounded-lg h-fit w-50 md:w-60  font-mono hover:bg-slate-100">
      <div className="flex flex-col items-center justify-center">
        <div className="relative h-fit w-full">
          <div className="absolute top-1 right-1 rounded-md bg-white text-black hover:bg-black hover:text-white w-6 p-0.5">
            <HeartIcon className="hover:animate-pulse" />
          </div>
        </div>
        <img
          src={productDetails?.image}
          alt={"Image " + productDetails?.title}
          className="max-h-60"
        />
        <div className="flex justify-center my-2">
          {productDetails?.size.map((size, idx) => {
            return (
              <span 
              className="border border-black text-xs p-0.5 mx-0.5" 
              key={`${idx}_size`}>
                {size}
              </span>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col leading-3">
        <div className="flex flex-col px-2">
          <span>{productDetails?.title}</span>
          <span className="font-bold text-lg">{productDetails?.price}</span>
          <span className="mb-2">
            <StarIcon className="w-5" />
          </span>
        </div>
        <button>
          <ButtonStyle bgcolor="black" textcolor="white">ADD TO CART</ButtonStyle>
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
