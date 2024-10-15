import { combineReducers } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import userProfile from "./slices/userProfile";
import userFavorites from "./slices/userFavorites";

export const rootReducer = combineReducers({
  user: userSlice,
  userProfile: userProfile,
  userFavorites: userFavorites,
});
