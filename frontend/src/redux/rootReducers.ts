import { combineReducers } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import userProfile from "./slices/userProfile";
import userFavorites from "./slices/userFavorites";
import orderSlice from "./slices/orderSlice";

export const rootReducer = combineReducers({
  user: userSlice,
  userProfile: userProfile,
  userFavorites: userFavorites,
  order: orderSlice,
});
