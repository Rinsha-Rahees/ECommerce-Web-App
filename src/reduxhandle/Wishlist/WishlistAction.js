import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from "./WishlistType";

export function addToWishlist(id) {
  return {
    type: ADD_TO_WISHLIST,
    id: id,
  };
}

export function removeFromWishlist(id) {
  return {
    type: REMOVE_FROM_WISHLIST,
    id: id,
  };
}
