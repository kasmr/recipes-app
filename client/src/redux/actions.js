import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import {
  GET_RECIPES,
  GET_RECIPE,
  SEARCH_RECIPES,
  SET_QUERY,
  SHOW_LOADING,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  SHOW_ALERT,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
} from './types';

const cors = 'http://cors-anywhere.herokuapp.com';

//Set loading to true
export const showLoading = () => {
  return {
    type: SHOW_LOADING,
  };
};

//Set Alert to true
export const showAlert = () => {
  return {
    type: SHOW_ALERT,
  };
};

//Get all recipes for home page

export const getRecipes = () => async (dispatch) => {
  try {
    dispatch(showLoading());

    const res = await axios.get(
      `${cors}/https://api.spoonacular.com/recipes/random?number=12&limitLicense=false&apiKey=${process.env.REACT_APP_RECIPE_API_KEY}`
    );
    dispatch({ type: GET_RECIPES, payload: res.data.recipes });
  } catch (err) {
    console.error(err);
  }
};

//Get single chosen recipe

export const getRecipe = (id) => async (dispatch) => {
  try {
    dispatch(showLoading());

    const res = await axios.get(
      `${cors}/https://api.spoonacular.com/recipes/${id}/information?&apiKey=${process.env.REACT_APP_RECIPE_API_KEY}`
    );

    dispatch({ type: GET_RECIPE, payload: res.data });
  } catch (err) {
    console.error(err);
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

    const res = await axios.get(
      `https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_RECIPE_API_ID}&app_key=${process.env.REACT_APP_RECIPE_API_KEY}`
    );

    dispatch({ type: SEARCH_RECIPES, payload: res.data.hits });
  } catch (err) {
    console.error(err);
  }
};

//////////////////

//Backend actions

/////////////////

//Load user
export const loadUser = () => async (dispatch) => {
  // load token into global headers
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get('/api/auth');

    dispatch({ type: USER_LOADED, payload: res.data });
  } catch (err) {
    dispatch({ type: AUTH_ERROR });
  }
};

//Register user
export const register = (formData) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const res = await axios.post('/api/users', formData, config);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
    loadUser();
  } catch (err) {
    dispatch({
      type: REGISTER_FAIL,
      payload: err.response.data.msg,
    });
  }
};

//Login user
export const login = (formData) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const res = await axios.post('/api/auth', formData, config);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    loadUser();
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
      payload: err.response.data.mag,
    });
  }
};

//Logout user
export const logout = () => {
  return { type: LOGOUT };
};
//Clear Errors
