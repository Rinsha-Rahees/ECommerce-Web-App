import { combineReducers } from "redux";
import { CartDrawerReducer } from "./CartDrawer/CartDrawerReducer";
import { CartReducer } from "./Cart/CartReducer";
import { WishlistReducer } from "./Wishlist/WishlistReducer";

export const rootReducer = combineReducers({
    isCartOpen: CartDrawerReducer,
    cart: CartReducer,
    wishlist: WishlistReducer
})



