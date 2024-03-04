import React from "react";
import ButtonStyle from "../GenericComponents/ButtonStyle";
import { useSelector } from "react-redux";

function Subtotal() {
  const { cart } = useSelector((state) => state.cart);

  let total = 0;

  if (cart.length > 0) {
    total = cart
      .map((prod) => prod.price * prod.quantity)
      .reduce((acc, curr) => acc + curr, total)
      .toFixed(2);
  }

  return (
    <div className="flex flex-col items-start h-fit w-full font-sans p-2 border border-gray-100 shadow-lg">
      <div className="flex justify-between w-full text-lg">
        <h2 className="font-semibold">Subtotal:</h2>
        <span className="font-mono">RS.{total}</span>
      </div>
      <span className="text-xs">
        Tax included and shipping calculated at checkout
      </span>
      <div className="flex items-center ml-3 mb-2 mt-4">
        <input type="checkbox" />
        <span className="ml-3 text-sm">I have a gift card</span>
      </div>
      <button className="w-full my-1">
        <ButtonStyle>CONFIRM ORDER</ButtonStyle>
      </button>
      <div className="flex justify-center text-sm w-full">
        <span>Free Returns On All Orders*</span>
      </div>
    </div>
  );
}

export default Subtotal;
