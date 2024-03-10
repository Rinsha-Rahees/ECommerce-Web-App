import { ADD_TO_CART, REMOVE_FROM_CART, REMOVE_ENTIRE_ITEM_FROM_CART } from "./CartType";

export function addToCart(productDetails){
    return{
        type: ADD_TO_CART,
        productDetails: productDetails
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