import React from "react";
import ButtonStyle from "../GenericComponents/ButtonStyle";
import { HeartIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

function ProductCard({ productDetails }) {
  return (
    <div className="flex flex-col h-full font-mono">
      <div className="relative flex flex-col items-center justify-center h-full w-full top-0 border rounded-md">
        <Link to={`/productview/${productDetails?.id}`}>
          <div className="absolute hover:bg-gray-400 duration-300 ease-in-out hover:opacity-20  h-full w-full top-0 rounded-md" />
          <button className="absolute top-1 right-1 rounded-md bg-white text-black hover:bg-black hover:text-white w-8 p-1.5">
            <HeartIcon className="hover:animate-pulse" />
          </button>

          <img
            src={productDetails?.images[0]}
            alt={"Image " + productDetails?.title}
            className="h-64 sm:h-72 lg:h-80 w-fit rounded-md"
          />
        </Link>
        <div className="flex justify-center my-1">
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

      <div className="flex flex-col">
        <div className="flex flex-col mt-1.5">
          <Link to={`/productview/${productDetails?.id}`}>
            <button className="flex w-fit text-sm hover:text-emerald-600 ease-in-out duration-200">
              {productDetails?.title}
            </button>
          </Link>
          <span className="font-semibold text-lg leading-4">
            {productDetails?.price}
          </span>
          <div className="flex items-center">
            <StarIcon className="w-3" />
            <span className="text-xs font-sans font-extralight ml-0.5">
              2 reviews
            </span>
          </div>
        </div>
        <button className="leading-3 mt-2">
          <ButtonStyle bgcolor="black" textcolor="white">
            ADD TO CART
          </ButtonStyle>
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
