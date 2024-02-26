import { ADD_TO_CART, REMOVE_FROM_CART } from "./CartType";
import { bootsCollection } from "../../assets/DataCollection/DataArray";

const initialCartState = {
  cart: [],
};

export const CartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const getProductdetails = bootsCollection.find(
        (product) => product.id == action.id
      );

      if (state.cart.length == 0) {
        return { ...state, cart: [{ ...getProductdetails, quantity: 1 }] };
      } else {
        const productExists = state.cart.filter(
          (product) => product.id == action.id
        );

        if (productExists.length > 0) {
          return {
            ...state,
            cart: state.cart.map((product) =>
              product.id == action.id
                ? { ...product, quantity: product.quantity + 1 }
                : product
            ),
          };
        } else {
          return {
            ...state,
            cart: [...state.cart, { ...getProductdetails, quantity: 1 }],
          };
        }
      }
    }
    case REMOVE_FROM_CART:{

      if(state.cart.length > 0){
        const productExists = state.cart.filter(
          (product) => product.id == action.id 
        );
        const newCartWithoutProduct = state.cart.filter(
          (product) => product.id != action.id
        );

        if(productExists.length > 0){
          return {...state, cart: state.cart.map((product) =>
            product.id == action.id
              ? { ...product, quantity: product.quantity - 1 }
              : product
          ),
          }
        }else{
          return {...state, cart: newCartWithoutProduct}
        }
      }
      
    }
    default:
      return state;
  }
};
