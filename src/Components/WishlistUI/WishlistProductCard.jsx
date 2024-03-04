import React from "react";
import { TrashIcon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import { addToCart } from "../../reduxhandle/Cart/CartAction";
import { openCartDrawer } from "../../reduxhandle/CartDrawer/CartDrawerAction";
import { Link } from "react-router-dom";
import { removeFromWishlist } from "../../reduxhandle/Wishlist/WishlistAction";

function WishlistProductCard({ productDetails }) {
  
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(productDetails?.id));
    dispatch(openCartDrawer());
  };

  return (
    <div className="flex flex-col h-fit w-full py-2">
      <div className="rounded-lg shadow-sm">
        <div className="flex items-center justify-center h-80">
          <Link to={`/productview/${productDetails?.id}`}>
            <img
              src={productDetails?.images[0]}
              alt="Product Image"
              className="w-fit h-80 rounded-t-lg"
            />
          </Link>
        </div>
        <div className="flex items-center h-fit w-full">
          <button
            onClick={() => handleAddToCart()}
            className="bg-black text-white font-bold h-10 w-[85%] rounded-bl-lg">
            ADD TO CART
          </button>

          <button
            onClick={() => dispatch(removeFromWishlist(productDetails?.id))}
            className="flex items-center justify-center  h-fit w-[15%]">
            <TrashIcon className="w-5" />
          </button>
        </div>
      </div>

      <span className="mt-2">{productDetails?.title}</span>
      <span className="font-semibold text-md leading-3">
        {productDetails?.priceString}
      </span>
    </div>
  );
}

export default WishlistProductCard;
