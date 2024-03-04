import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from "./WishlistType";
import { productDetails } from "../../assets/DataCollection/DataArray";

const initialWishlist = {
  wishlist: [],
};

export const WishlistReducer = (state = initialWishlist, action) => {
  switch (action.type) {
    case ADD_TO_WISHLIST: {
      const getProductdetails = productDetails.find((product) => {
        return product.id == action.id;
      });

      if (state.wishlist.length > 0) {
        const productExists = state.wishlist.filter(
          (product) => product.id === action.id
        );

        if (productExists.length > 0) {
          return state;
        } else {
          return { ...state, wishlist: [...state.wishlist, getProductdetails] };
        }
      } else {
        return { ...state, wishlist: [getProductdetails] };
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
