import { SET_MENU, SET_CATEGORIES } from '../actions/types';

const initialState = {
  menu: [],
  categories: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_MENU:
      return { ...state, menu: action.payload };
    case SET_CATEGORIES:
      return { ...state, categories: action.payload };
    default:
      return state;
  }
}


