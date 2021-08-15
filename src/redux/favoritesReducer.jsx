import { ADDED_FAVORITE, DELETED_FAVORITE } from "./type";

const initState = {
  items: [],
  loading: false,
};

export const favoritesReducer = (state = initState, action) => {
  switch (action.type) {
    case ADDED_FAVORITE:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case DELETED_FAVORITE:
      console.log(action.payload);
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    default:
      return {
        ...state,
      };
  }
};
