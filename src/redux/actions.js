import { ADD_FAV, REMOVE_FAV, FILTER, ORDER_CARDS } from "./action-types";

//action creators
export function addFav(payload) {
    // console.log('el payload de "charact" en actions: ', charact);
    return {
        type: ADD_FAV,
        payload
    }
}

export function removeFav(idChar) {
    return {
        type: REMOVE_FAV,
        payload: idChar
    }
}

export function filterCards(gender) {
    return {
        type: FILTER,
        payload: gender
    }
}

export function orderCards(order) {
    return {
        type: ORDER_CARDS,
        payload: order
    }
}