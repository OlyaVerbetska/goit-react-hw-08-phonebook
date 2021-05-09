import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import authActions from './authActions'

const user = createReducer({}, {
[authActions.registerSuccess]: (_, {payload}) => payload.user,
[authActions.loginSuccess]: (_, {payload}) => payload.user,
[authActions.logoutSuccess]: () => null, 
[authActions.getCurrentUserSuccess]: (_, {payload})=> payload, 
});


const token = createReducer(null, {
  [authActions.registerSuccess]: (_, {payload}) => payload.token,
  [authActions.loginSuccess]: (_, {payload}) => payload.token,
  [authActions.logoutSuccess]: () => null, 
});

const setError = (_, {payload}) => payload;

const error = createReducer(null, {
  [authActions.registerError]: setError,
  [authActions.loginError]: setError,
  [authActions.logoutError]: setError,
  [authActions.getCurrentUserError]: setError,
});

//eslint-disable-next-line
export default combineReducers({
  user,
  token,
  error,
});

