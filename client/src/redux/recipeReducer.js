import {
  GET_RECIPES,
  GET_RECIPE,
  SEARCH_RECIPES,
  SEARCH_EXTENDED,
  SET_QUERY,
  SHOW_LOADING,
  GET_DIETS,
  GET_FAVORITE_RECIPES,
} from './types';

const initalState = {
  recipes: [],
  currentRecipe: {},
  query: '',
  results: [],
  loading: false,
  favorites: [],
};

export const recipeReducer = (state = initalState, action) => {
  switch (action.type) {
    case GET_RECIPES:
      return {
        ...state,
        recipes: action.payload,
        loading: false,
      };
    case GET_RECIPE:
      return {
        ...state,
        currentRecipe: action.payload,
        loading: false,
      };
    case SET_QUERY:
      return {
        ...state,
        query: action.payload,
        loading: false,
      };
    case SEARCH_RECIPES:
    case SEARCH_EXTENDED:
      return {
        ...state,
        query: state.query,
        results: action.payload,
        loading: false,
      };
    case GET_DIETS:
      return {
        ...state,
        query: action.payload,
        results: action.payload,
        loading: false,
      };
    case GET_FAVORITE_RECIPES:
      return {
        ...state,
        favorites: action.payload,
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
