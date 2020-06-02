// import { createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import thunkMiddleware from 'redux-thunk';

import { 
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SEND,
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from '../actions/action-types/auth-actions'
import { Router } from 'next/router';

const initialState = {
    token: () => { if (localStorage){ return localStorage.getItem('token');} },
    isAuthenticated: null,
    isLoading: false,
    user: null
};

export default function (state = initialState, action) {
    switch (action.type) {
      case USER_LOADING:
        return {
          ...state,
          isLoading: true
        };
      case USER_LOADED:
        return {
          ...state,
          isAuthenticated: true,
          isLoading: false,
          user: action.payload
        };
      case REGISTER_SEND:
        return {
          ...state,
          ...action.payload,
          isAuthenticated: false,
          isLoading: false
        };
      case LOGIN_SUCCESS:
      case REGISTER_SUCCESS:
        return {
          ...state,
          ...action.payload,
          isAuthenticated: true,
          isLoading: false
        };
      case AUTH_ERROR:
      case LOGIN_FAIL:
      case LOGOUT_SUCCESS:
      case REGISTER_FAIL:
        if (localStorage)
        {
            localStorage.removeItem('token');
        }
        return {
          ...state,
          token: null,
          user: null,
          isAuthenticated: false,
          isLoading: false
        };
      default:
        return state;
    }
  }

// export const initStore = (initialState = initState) => {
//     return createStore(
//         authReducer,
//         initialState,
//         composeWithDevTools(applyMiddleware(thunkMiddleware))
//     )
// }