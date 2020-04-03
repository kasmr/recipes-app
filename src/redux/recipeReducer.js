import { GET_RECIPES } from './types';

const initalState = {
  recipes: [],
  results: []
};

export const recipeReducer = (state = initalState, action) => {
  switch (action.type) {
    case GET_RECIPES:
      return {
        ...state,
        recipes: action.payload
      };

    default:
      return state;
  }
};
