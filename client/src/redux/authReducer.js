import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  AUTH_ERROR,
  CLEAR_ERRORS,
  SHOW_LOADING,
  SHOW_ALERT,
} from './types';

const initalState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: false,
  alert: false,
  user: null,
  error: null,
};

export const authReducer = (state = initalState, action) => {
  switch (action.type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload,
      };
    case REGISTER_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false,
      };
    case REGISTER_FAIL:
    case AUTH_ERROR:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
        error: action.payload,
      };
    case SHOW_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SHOW_ALERT:
      return {
        ...state,
        alert: true,
      };

    default:
      return state;
  }
};
