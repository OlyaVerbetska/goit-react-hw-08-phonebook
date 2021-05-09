//import { createSelector } from '@reduxjs/toolkit';


const getIsAuthenticated = state => Boolean(state.auth.token);
const getMail = state => state.auth.user.email;



//eslint-disable-next-line
export default { getIsAuthenticated, getMail}
