import { OPEN_CART, CLOSE_CART } from "./CartDrawerType";

const initialeCartOpenState = {
    isCartOpen : false
}

export const CartDrawerReducer = (state = initialeCartOpenState, action ) => {
    switch(action.type){
        case OPEN_CART : return { ...state, isCartOpen : true }
        case CLOSE_CART : return {...state, isCartOpen : false}
        default : return state
    }

}