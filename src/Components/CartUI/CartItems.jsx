import React from "react";
import {
  MinusIcon,
  PencilSquareIcon,
  PlusIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import { addToCart, removeEntireItemFromCart, removeFromCart } from "../../reduxhandle/Cart/CartAction";
import { Link } from "react-router-dom";

function CartItems({ cartItemDetails }) {
  
  const dispatch = useDispatch();

  const minusVisibility = () => {
    if (cartItemDetails?.quantity > 1) {
      return "flex";
    } else {
      return "hidden";
    }
  };

  const trashVisibility = () => {
    if (cartItemDetails?.quantity == 1) {
      return "flex";
    } else {
      return "hidden";
    }
  };

  return (
    <div className="flex flex-col justify-center w-full h-fit max-h-28 mb-4 mt-2 p-2 font-mono">
      <div className="flex items-center py-2 w-full">
          
          <Link to={`/productview/${cartItemDetails?.id}`}>
          <img
            src={cartItemDetails?.images[0]}
            alt="Product Image"
            className="max-h-28 max-w-20 text-sm "
          />
          </Link>

        <div className="flex flex-col text-md w-full pl-2">
          <div className="flex items-center justify-between">
            <span>{cartItemDetails?.title}</span>
            <button className="p-1 rounded-full" onClick={() => dispatch(removeEntireItemFromCart(cartItemDetails?.id))}>
              <TrashIcon className="w-4 text-gray-400" />
            </button>
          </div>
          <span className="leading-4 text-sm">{cartItemDetails?.size}</span>
          <span>{cartItemDetails?.priceString}</span>
          <div className="flex items-center justify-between w-full mt-2">
            <div className="flex items-center justify-between border border-black rounded-lg w-24 px-3 py-0.5">
              <div className="relative flex items-center w-fit h-fit top-0 left-0 mr-4">
                <button
                  className={`absolute h-fit w-fit ${minusVisibility()}`}
                  onClick={() => dispatch(removeFromCart(cartItemDetails?.id))}>
                  <MinusIcon className="w-4" />
                </button>
                <button
                  className={`absolute h-fit w-fit ${trashVisibility()}`}
                  onClick={() => dispatch(removeFromCart(cartItemDetails?.id))}>
                  <TrashIcon className="w-3" />
                </button>
              </div>

              <span className="font-semibold">{cartItemDetails?.quantity}</span>
              
              <button  onClick={() => dispatch(addToCart(cartItemDetails))}>
                <PlusIcon className="w-4" />
              </button>
            </div>

            <button className="flex items-center ml-1 hover:text-blue-500">
              <PencilSquareIcon className="w-4" />
              <span className="text-xs">edit order</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItems;
