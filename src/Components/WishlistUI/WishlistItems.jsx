import React from "react";
import WishlistProductCard from "./WishlistProductCard";
import { useSelector } from "react-redux";
import EmptyWishlist from "./EmptyWishlist";

function WishlistItems({ filtered }) {
  
  const { wishlist } = useSelector((state) => state.wishlist);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-2 gap-y-8 p-2 mt-4 xl:max-w-[85vw]">
      {filtered.length > 0 ? (
        filtered.map((product) => {
          return (
            <WishlistProductCard key={product?.id} productDetails={product} />
          );
        })
      ) : wishlist.length > 0 ? (
        wishlist.map((product) => {
          return (
            <WishlistProductCard key={product?.id} productDetails={product} />
          );
        })
      ) : (
        <div className="w-[85vw] -ml-4">
          <EmptyWishlist />
        </div>
      )}
    </div>
  );
}

export default WishlistItems;
