import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  AUTH_ERROR,
  SHOW_LOADING,
  ADD_FAVORITE,
  GET_FAVORITE_IDS,
} from './types';

const initalState = {
  token: localStorage.getItem('token'),
  isAuthenticated: false,
  loading: false,
  user: null,
  error: null,
  favoriteIDS: [],
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
    case LOGIN_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false,
      };
    case REGISTER_FAIL:
    case LOGIN_FAIL:
    case AUTH_ERROR:
    case LOGOUT:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
        error: action.payload,
        favoriteIDS: [],
      };
    case GET_FAVORITE_IDS:
      return {
        ...state,
        favoriteIDS: action.payload,
      };
    case ADD_FAVORITE:
      return {
        ...state,
        favoriteIDS: [...state.favoriteIDS, action.payload],
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
