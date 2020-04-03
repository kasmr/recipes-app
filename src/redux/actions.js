import { APP_ID, APP_KEY } from '../components/userApi';
import { GET_RECIPES } from './types';

export const getRecipes = () => async dispatch => {
  try {
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
