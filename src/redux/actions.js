import { ADD_FAV, REMOVE_FAV } from "./action-types";

export function addFav(charact) {
    // console.log('el payload de "charact" en actions: ', charact);
    return {
        type: ADD_FAV,
        payload: charact
    }
}

export function removeFav(idChar) {
    return {
        type: REMOVE_FAV,
        payload: idChar
    }
}