import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {authReducer} from './auth'
import {contactsReducer} from './contacts';


const middleware = getDefaultMiddleware();
//store

const store = configureStore({
  reducer: {
    auth:authReducer,
    //contacts: contactsReducer,
  },
  middleware,
  // комментируем, чтоб было удобно проверять
  // devTools: process.env.NODE_ENV === 'development',
});

//eslint-disable-next-line
export default { store };
