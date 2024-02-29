import React, { useState } from "react";
import ButtonStyle from "../GenericComponents/ButtonStyle";
import { HeartIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { openCartDrawer } from "../../reduxhandle/CartDrawer/CartDrawerAction";
import { addToCart } from "../../reduxhandle/Cart/CartAction";
import { addToWishlist } from "../../reduxhandle/Wishlist/WishlistAction";
import { Tooltip } from "react-tooltip";

function ProductCard({ productDetails }) {
  const dispatch = useDispatch();

  const [tooltipId, setTooltipId] = useState("");
  const [heartBgColor, setHeartBgColor] = useState("bg-white");
  const [heartTextColor, setHeartTextColor] = useState("text-black");
  const [linkToWishlist, setLinkToWishlist] = useState("");
  

  const handleAddToCart = () => {
    dispatch(openCartDrawer());
    dispatch(addToCart(productDetails?.id));
  };

  const handleAddToWishlist = () => {
    dispatch(addToWishlist(productDetails?.id));
    setTooltipId("my-tooltip-1");
    setHeartBgColor("bg-black")
    setHeartTextColor("text-white")
    setLinkToWishlist("/wishlist")
    //Code to open wishlist
  };

  console.log(tooltipId);

  return (
    <div className="flex flex-col h-full font-mono">
      <div className="relative flex flex-col items-center justify-center h-full w-full top-0 border rounded-md">
        <div className="absolute hover:bg-gray-400 duration-300 ease-in-out hover:opacity-20  h-full w-full top-0 left-0 rounded-md" />
        
        <Link to={linkToWishlist}>
        <button
          data-tooltip-id={tooltipId}
          data-tooltip-content="Browse Wishlist"
          onClick={() => handleAddToWishlist()}
          className={`absolute top-1 right-1 rounded-md ${heartBgColor} ${heartTextColor} hover:bg-black hover:text-white p-1`}>
          <HeartIcon className="w-6 hover:animate-pulse" />
        </button>
        </Link>

        <Tooltip
          id="my-tooltip-1"
          place="top"
          style={{ backgroundColor: "transparent" , marginTop: 6}}
        />

        <Link to={`/productview/${productDetails?.id}`}>
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
            {productDetails?.priceString}
          </span>
          <div className="flex items-center">
            <StarIcon className="w-3" />
            <span className="text-xs font-sans font-extralight ml-0.5">
              2 reviews
            </span>
          </div>
        </div>
        <button className="leading-3 mt-2" onClick={() => handleAddToCart()}>
          <ButtonStyle bgcolor="black" textcolor="white">
            ADD TO CART
          </ButtonStyle>
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
