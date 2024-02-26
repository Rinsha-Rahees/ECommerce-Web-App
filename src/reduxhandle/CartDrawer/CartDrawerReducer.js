import { OPEN_CART, CLOSE_CART } from "./CartDrawerType";

const initialeState = {
    isCartOpen : false
}

export const CartDrawerReducer = (state = initialeState, action ) => {
    switch(action.type){
        case OPEN_CART : return { ...state, isCartOpen : true }
        case CLOSE_CART : return {...state, isCartOpen : false}
        default : return state
    }

}