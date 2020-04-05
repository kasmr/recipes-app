import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  AUTH_ERROR,
  CLEAR_ERRORS,
} from './types';

const initalState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: false,
  user: null,
  error: null,
};

export const recipeReducer = (state = initalState, action) => {
  switch (action.type) {
    case SHOW_LOADING:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};
