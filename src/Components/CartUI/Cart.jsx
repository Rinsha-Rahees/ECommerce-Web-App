import React from "react";
import { useSelector } from "react-redux";
import CartItems from "./CartItems";
import EmptyCart from "./EmptyCart";
import Subtotal from "./Subtotal";

function Cart() {
  const { cart } = useSelector((state) => state.cart);

  return (
    <>
      {cart.length > 0 ? (
        // <> </> - parent to wrap 2 components which is rendered inside conditional branch. Outer -  outermost container
        <div className="flex flex-col justify-between w-full h-full">
          <div className="flex flex-col justify-start h-full w-full overflow-y-auto">
            {cart.map((item) => {
              return <CartItems key={`${item?.id}`} cartItemDetails={item} />;
            })}
          </div>

          <div className="flex flex-col justify-end mb-14 h-fit p-3 bg-white">
            <Subtotal />
          </div>
        </div>
      ) : (
        <EmptyCart />
      )}
    </>
  );
}

export default Cart;
