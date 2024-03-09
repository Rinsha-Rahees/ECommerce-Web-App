import React, {useState} from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import CollapseUI from "../GenericComponents/CollapseUI";
import { addToCart } from "../../reduxhandle/Cart/CartAction";
import { useDispatch } from "react-redux";
import { openCartDrawer } from "../../reduxhandle/CartDrawer/CartDrawerAction";
import { addToWishlist } from "../../reduxhandle/Wishlist/WishlistAction";
import { Tooltip } from "react-tooltip";

function ProductDescription({ description }) {

  const dispatch = useDispatch();
  const [tooltipId, setTooltipId] = useState("");

  const handleAddToCart = () => {
    dispatch(openCartDrawer());
    dispatch(addToCart(description?.id));
  };

  const handleAddToWishlist = () => {
    dispatch(addToWishlist(description?.id));
    setTooltipId("my-tooltip-1");
    //To open wishlist
    setLinkToWishlist("/wishlist");
  };

  return (
    <div className="flex flex-col justify-between w-full -mt-2">
      <div className="flex justify-between items-center w-full">
        <span className="text-2xl">{description?.title}</span>
        <span className="text-xl font-semibold">{description?.priceString}</span>
      </div>
      <div className="flex justify-between text-xs w-full font-sans">
        <div className="flex flex-col">
          <span className="leading-3">Pants</span>
          <div className="flex">
            <StarIcon className="w-3" />
            <span className="leading-5 ml-0.5">{description?.rating} reviews</span>
          </div>
        </div>
        <span className="leading-[3px]">tax included.</span>
      </div>
      <div className="flex justify-between items-center w-full mt-2">
        <span>
          HURRY!<span className="px-0.5 text-orange-500">6</span>LEFT
        </span>
        <div className="flex w-2/3 h-2 rounded-full">
          <span className="w-1/2 bg-black h-2 rounded-l-full"></span>
          <span className="w-1/2 bg-pink-200 h-2 rounded-r-full shadow-inner"></span>
        </div>
      </div>
      <div className="flex flex-col justify-between items-start w-full bg-gray-100 rounded-md text-lg p-3 mt-10">
          <span className="font-bold">CHOOSE SIZE: XS</span>
          <button className="bg-white rounded-md border hover:border-black px-1.5 py-0.5 mt-3">xs</button>
          <button className="bg-black text-white w-full rounded-lg p-2 mt-6" onClick={() => handleAddToCart()}>ADD TO CART - {description?.priceString}</button>
          <span 
          className="flex justify-center text-sm underline mt-2 w-full hover:cursor-pointer" 
          data-tooltip-id={tooltipId}
          data-tooltip-content="Browse Wishlist"
          onClick={() => handleAddToWishlist()}>ADD TO WISHLIST</span>
           <Tooltip
          id="my-tooltip-1"
          place="top"
          style={{ backgroundColor: "transparent", marginTop: 6 }}
        />
       </div>

       <CollapseUI/>

    </div>
  );
}

export default ProductDescription;
