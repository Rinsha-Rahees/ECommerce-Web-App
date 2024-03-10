import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from "./WishlistType";

export function addToWishlist(productDetails) {
  return {
    type: ADD_TO_WISHLIST,
    productDetails: productDetails
  };
}

export function removeFromWishlist(id) {
  return {
    type: REMOVE_FROM_WISHLIST,
    id: id,
  };
}
