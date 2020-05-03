import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import {
  GET_RECIPES,
  GET_RECIPE,
  SEARCH_RECIPES,
  SEARCH_EXTENDED,
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
  ADD_FAVORITE,
  DELETE_FAVORITE,
  GET_FAVORITES,
  GET_FAVORITE_IDS,
  GET_DIETS,
  GET_FAVORITE_RECIPES,
} from './types';

const cors = 'https://cors-anywhere.herokuapp.com';

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
      `${cors}/https://api.spoonacular.com/recipes/complexSearch?query=${query}&number=10&addRecipeInformation=true&apiKey=${process.env.REACT_APP_RECIPE_API_KEY}`
    );

    const { results } = res.data;
    dispatch({ type: SEARCH_RECIPES, payload: results });
  } catch (err) {
    console.error(err);
  }
};

//Extended search for recipes

export const searchExtended = (
  value,
  inst,
  cuisine,
  diet,
  dishType,
  mins,
  calories,
  intolerances
) => async (dispatch) => {
  try {
    dispatch(showLoading());

    const res = await axios.get(
      `${cors}/https://api.spoonacular.com/recipes/complexSearch?query=${value}&number=10&addRecipeInformation=true&instructionsRequired=${inst}&cuisine=${cuisine}&diet=${diet}&type=${dishType}&maxReadyTime=${mins}&maxCalories=${calories}&intolerances=${intolerances}&apiKey=${process.env.REACT_APP_RECIPE_API_KEY}`
    );

    const { results } = res.data;
    console.log(results);
    dispatch({ type: SEARCH_EXTENDED, payload: results });
  } catch (err) {
    console.error(err);
  }
};

//Get diets

export const getDiets = (diets) => async (dispatch) => {
  try {
    const res = await axios.get(
      `${cors}/https://api.spoonacular.com/recipes/complexSearch?query=${diets}&number=10&addRecipeInformation=true&diet=${diets}&apiKey=${process.env.REACT_APP_RECIPE_API_KEY}`
    );

    const { results } = res.data;
    console.log(results);
    dispatch({ type: GET_DIETS, payload: results });
  } catch (err) {
    console.error(err);
  }
};

////////////////////////////

//Favorite actions

////////////////////////////

//Get favorite ids from backend

export const getFavoriteIDS = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/favorites');

    //Dont know how to make MongoDB not to store the same ids, well i sort and filter array so it doesnt have the same ids

    // const modifiedData = res.data
    //   .map((item) => item.recipeID)
    //   .sort()
    //   .filter((item, pos, ary) => !pos || item != ary[pos - 1]);

    dispatch({ type: GET_FAVORITE_IDS, payload: res.data });
  } catch (err) {
    console.error(err);
  }
};

//Get favorite Recipes
export const getFavoriteRecipes = (ids) => async (dispatch) => {
  try {
    dispatch(showLoading());

    const res = await axios.get(
      `${cors}/https://api.spoonacular.com/recipes/informationBulk?ids=${ids}&apiKey=${process.env.REACT_APP_RECIPE_API_KEY}`
    );

    dispatch({ type: GET_FAVORITE_RECIPES, payload: res.data });
  } catch (err) {
    console.error(err);
  }
};

//Add favorite
export const addFavorite = (favorite) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const res = await axios.post('/api/favorites', favorite, config);

    dispatch({ type: ADD_FAVORITE, payload: res.data });
  } catch (err) {
    console.error(err);
  }
};

//Delete favorite

//Set current

//Clear current

//////////////////

//Backend actions

//////////////////

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
      payload: err.response.data.msg,
    });
  }
};

//Logout user
export const logout = () => {
  return { type: LOGOUT };
};
//Clear Errors
