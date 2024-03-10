import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from "./WishlistType";

const initialWishlist = {
  wishlist: [],
};

export const WishlistReducer = (state = initialWishlist, action) => {
  switch (action.type) {
    case ADD_TO_WISHLIST: {

      if (state.wishlist.length > 0) {
        const productExists = state.wishlist.filter(
          (product) => product.id === action.productDetails.id
        );

        if (productExists.length > 0) {
          return state;
        } else {
          return { ...state, wishlist: [...state.wishlist, action.productDetails] };
        }
      } else {
        return { ...state, wishlist: [action.productDetails] };
      }
    }

    case REMOVE_FROM_WISHLIST: {
    
        if (state.wishlist.length > 0) {
          const productExists = state.wishlist.filter(
            (product) => product.id === action.id
          );
  
          if (productExists.length > 0) {
            const newWishlistWithoutProduct = state.wishlist.filter(product => product?.id!==action?.id)
            return {...state, wishlist: newWishlistWithoutProduct}
        }else{
            return state
        }
      }else{
        return state
      }
    }

    default:
      return state;
  }
};
