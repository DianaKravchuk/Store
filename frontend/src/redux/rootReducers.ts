import { combineReducers } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import userAddress from "./slices/userAddress";

export const rootReducer = combineReducers({
  user: userSlice,
  userAddress: userAddress,
});
