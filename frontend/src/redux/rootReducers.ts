import { combineReducers } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import userAddress from "./slices/userAddress";
import userFavorites from "./slices/userFavorites";

export const rootReducer = combineReducers({
  user: userSlice,
  userAddress: userAddress,
  userFavorites: userFavorites,
});
