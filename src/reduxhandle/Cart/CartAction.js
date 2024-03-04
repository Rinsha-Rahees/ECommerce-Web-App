import { ADD_TO_CART, REMOVE_FROM_CART, REMOVE_ENTIRE_ITEM_FROM_CART } from "./CartType";

export function addToCart(id){
    return{
        type: ADD_TO_CART,
        id: id
    }
}

export function removeFromCart(id){
    return{
        type: REMOVE_FROM_CART,
        id: id
    }
}

export function removeEntireItemFromCart(id){
    return{
        type: REMOVE_ENTIRE_ITEM_FROM_CART,
        id: id
    }
}