import {
  GET_RECIPES,
  GET_RECIPE,
  SEARCH_RECIPES,
  SET_QUERY,
  SET_REDIRECT,
  SHOW_LOADING,
} from './types';

const initalState = {
  recipes: [],
  currentRecipe: {},
  query: '',
  redirect: false,
  results: [],
  loading: false,
};

export const recipeReducer = (state = initalState, action) => {
  switch (action.type) {
    case GET_RECIPES:
      return {
        ...state,
        recipes: action.payload,
        redirect: false,
        loading: false,
      };
    case GET_RECIPE:
      return {
        ...state,
        currentRecipe: action.payload,
        redirect: false,
        loading: false,
      };
    case SET_QUERY:
      return {
        ...state,
        query: action.payload,
        redirect: true,
        loading: false,
      };
    case SEARCH_RECIPES:
      return {
        ...state,
        query: state.query,
        results: action.payload,
        redirect: false,
        loading: false,
      };
    case SET_REDIRECT:
      return {
        ...state,
        redirect: true,
        loading: false,
      };
    case SHOW_LOADING:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};
