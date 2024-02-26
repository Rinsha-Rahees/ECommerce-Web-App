import React, { useState } from "react";
import {
  MinusIcon,
  PencilSquareIcon,
  PlusIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../reduxhandle/Cart/CartAction";

function CartItems({ cartItemDetails }) {

  const dispatch = useDispatch()

  console.log("CART_ITEM", cartItemDetails);

  const minusVisibility = () => {
    if(cartItemDetails?.quantity > 1){
      return "flex"
    }else {
      return "hidden"
    }
  }

  const trashVisibility = () => {
    if(cartItemDetails?.quantity == 1){
      return "flex"
    }else {
      return "hidden"
    }
  }
    

  return (
    <div className="flex flex-col justify-center w-full max-h-28 mb-6">
      <div className="flex items-center m-4">
        <img
          src={cartItemDetails?.images[0]}
          alt="Product Image"
          className="h-fit w-20"
        />

        <div className="flex flex-col px-3 h-fit">
          <div className="flex w-full items-center justify-between">
            <span>{cartItemDetails?.title}</span>
            <button className="bg-gray-200 p-1 rounded-full">
              <TrashIcon className="w-4 text-gray-400" />
            </button>
          </div>
          <span className="leading-4 text-sm">Size</span>
          <span className="font-semibold">{cartItemDetails?.price}</span>
          <div className="flex justify-end items-center w-full mt-2">
            <div className="flex flex-1 items-center justify-between border border-black rounded-lg w-24 px-3 py-0.5 mr-4">
              
              <div className="relative flex items-center w-fit h-fit top-0 left-0 mr-4">
              <button className={`absolute h-fit w-fit p-0 ${minusVisibility()}`} onClick={() => dispatch(removeFromCart(cartItemDetails?.id))}>
                <MinusIcon className="w-3" />
              </button>
              <button className={`absolute h-fit w-fit p-0 ${trashVisibility()}`} onClick={() => dispatch(removeFromCart(cartItemDetails?.id))}>
                <TrashIcon className="w-3 " />
              </button>
              </div>
              
              <span>{cartItemDetails?.quantity}</span>
              <button>
                <PlusIcon className="w-4" />
              </button>
            </div>
            <div className="flex items-center">
              <button>
                <PencilSquareIcon className="w-5" />
              </button>
              <span className="text-xs">edit order</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItems;
