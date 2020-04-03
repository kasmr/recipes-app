import {
  GET_RECIPES,
  GET_RECIPE,
  SEARCH_RECIPES,
  SET_QUERY,
  SET_REDIRECT
} from './types';

const initalState = {
  recipes: [],
  currentRecipe: [],
  query: '',
  redirect: false,
  results: []
};

export const recipeReducer = (state = initalState, action) => {
  switch (action.type) {
    case GET_RECIPES:
      return {
        ...state,
        recipes: action.payload,
        redirect: false
      };
    case GET_RECIPE:
      return {
        ...state,
        currentRecipe: action.payload,
        redirect: false
      };
    case SET_QUERY:
      return {
        ...state,
        query: action.payload,
        redirect: true
      };
    case SEARCH_RECIPES:
      return {
        ...state,
        results: action.payload,
        redirect: false
      };
    case SET_REDIRECT:
      return {
        ...state,
        redirect: true
      };

    default:
      return state;
  }
};
