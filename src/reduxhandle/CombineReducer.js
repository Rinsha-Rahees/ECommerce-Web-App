import { CartDrawerReducer } from "./CartDrawer/CartDrawerReducer";
import { CartReducer } from "./Cart/CartReducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
    isCartOpen: CartDrawerReducer,
    cart: CartReducer
})



