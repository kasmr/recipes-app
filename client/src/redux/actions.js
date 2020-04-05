import { APP_ID, APP_KEY } from '../components/userApi';
import {
  GET_RECIPES,
  GET_RECIPE,
  SEARCH_RECIPES,
  SET_QUERY,
  SHOW_LOADING,
} from './types';

//Set loading to true
export const showLoading = () => {
  return {
    type: SHOW_LOADING,
  };
};

//Get all recipes for home page

export const getRecipes = () => async (dispatch) => {
  try {
    dispatch(showLoading());

    const res = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const resJson = await res.json();
    const data = resJson.hits;

    dispatch({ type: GET_RECIPES, payload: data });
  } catch (error) {
    console.error(error);
  }
};

//Get single chosen recipe

export const getRecipe = (passedTitle) => async (dispatch) => {
  try {
    dispatch(showLoading());

    const res = await fetch(
      `https://api.edamam.com/search?q=${passedTitle}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const resJson = await res.json();
    const data = resJson.hits;

    dispatch({ type: GET_RECIPE, payload: data });
  } catch (error) {
    console.error(error);
  }
};

//Set search query

export const setQuery = (text) => {
  return {
    type: SET_QUERY,
    payload: text,
  };
};

//Search for recipes

export const searchRecipes = (query) => async (dispatch) => {
  try {
    dispatch(showLoading());

    const res = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const resJson = await res.json();
    const data = resJson.hits;
    dispatch({ type: SEARCH_RECIPES, payload: data });
  } catch (error) {
    console.error(error);
  }
};

//////////////////

//Backend actions

/////////////////

//Load user

//Register user

//Logout user

//Clear Errors
