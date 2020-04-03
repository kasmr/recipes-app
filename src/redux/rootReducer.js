import { combineReducers } from 'redux';
import { recipeReducer } from './recipeReducer';

export const rootReducer = combineReducers({
  recipes: recipeReducer
});
