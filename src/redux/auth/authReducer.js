import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import authActions from './authActions'

const user = createReducer({}, {
[authActions.registerSuccess]: (_, {payload}) => payload.user,
[authActions.loginSuccess]: (_, {payload}) => payload.user,
[authActions.logoutSuccess]: () => null, 
});


const token = createReducer(null, {
  [authActions.registerSuccess]: (_, {payload}) => payload.token,
  [authActions.loginSuccess]: (_, {payload}) => payload.token,
  [authActions.logoutSuccess]: () => null, 
});


const error = createReducer(null, {
  [authActions.registerError]: (_, {payload}) => payload,  [authActions.loginError]: (_, {payload}) => payload,
  [authActions.logoutError]: (_, {payload}) => payload,
});

//eslint-disable-next-line
export default combineReducers({
  user,
  token,
  error,
});

