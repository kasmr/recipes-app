import { APP_ID, APP_KEY } from '../components/userApi';
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

    if (res.status === 200) {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
      loadUser();
    } else {
      showAlert();
      dispatch({
        type: REGISTER_FAIL,
        payload: res.data.msg,
      });
    }
  } catch (err) {
    dispatch({
      type: REGISTER_FAIL,
      payload: err.response.data.msg,
    });
  }
};

//Login user
export const login = (formData) => async (dispatch) => {
  try {
    const res = await fetch('/api/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    if (res.status === 200) {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: data,
      });
      loadUser();
    } else {
      dispatch({
        type: LOGIN_FAIL,
        payload: data.msg,
      });
    }
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error,
    });
  }
};

//Logout user
export const logout = () => {
  return { type: LOGOUT };
};
//Clear Errors
