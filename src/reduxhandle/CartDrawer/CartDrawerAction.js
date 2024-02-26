import { OPEN_CART, CLOSE_CART } from "./CartDrawerType";

export function openCartDrawer(){
    return{
        type: OPEN_CART
    }
}

export function closeCartDrawer(){
    return{
        type: CLOSE_CART
    }
}