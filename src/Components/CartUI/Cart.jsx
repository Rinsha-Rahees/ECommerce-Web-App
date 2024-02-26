import React from "react";
import { useSelector } from "react-redux";
import CartItems from "./CartItems";

function Cart() {
  const { cart } = useSelector((state) => state.cart);

  return (
    <>
      {cart.length > 0
        ? cart.map((item, idx) => {
            if (item?.quantity > 0) {
              return (
                <CartItems key={`${idx}_cartItem`} cartItemDetails={item} />
              );
            }
          })
        : "CART EMPTY"}
    </>
  );
}

export default Cart;
