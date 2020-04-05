import { combineReducers } from 'redux';
import { recipeReducer } from './recipeReducer';
import { authReducer } from './authReducer';

export const rootReducer = combineReducers({
  recipes: recipeReducer,
  auth: authReducer,
});
