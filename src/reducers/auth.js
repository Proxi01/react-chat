import {
  SIGNUP_FAILURE, SIGNUP_REQUEST, SIGNUP_SUCCESS,
  LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS,
  LOGOUT_FAILURE, LOGOUT_REQUEST, LOGOUT_SUCCESS
}from '../constants'

const token = localStorage.getItem('token');

const initialState = {
  isAuthenticated: !!token,
  user:null,
  token,
};

export function auth(state = initialState, action) {
  console.log(action);
  switch (action.type){
    case SIGNUP_SUCCESS:
    case LOGIN_SUCCESS:
      return{
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token
      }

    case SIGNUP_FAILURE:
    case LOGIN_FAILURE:
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        token: ''
      };
    default:
      return state;
  }
}
