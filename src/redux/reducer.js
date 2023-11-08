import { ADD_FAV, REMOVE_FAV, FILTER, ORDER_CARDS } from "./action-types";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.allCharacters, payload],
        allCharacters: [...state.allCharacters, payload],
      };
    case REMOVE_FAV:
      const removeCharac = state.myFavorites.filter(
        (char) => char.id !== Number(payload)
      );
      return {
        ...state,
        myFavorites: removeCharac,
        // allCharacters: removeCharac,
      };
    case FILTER:
      let filtered = state.allCharacters.filter(
        (character) => character.gender === payload
      );
      return {
        ...state,
        myFavorites: payload === "All" ? state.allCharacters : filtered,
      };
    case ORDER_CARDS:
      const orderChars = state.myFavorites.sort((firstEl, secondEl) => {
        if (payload === "A") {
          return firstEl.id - secondEl.id;
        } else if (payload === "D") {
          return secondEl.id - firstEl.id;
        }
      });
      return {
        ...state,
        myFavorites: [...orderChars],
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
