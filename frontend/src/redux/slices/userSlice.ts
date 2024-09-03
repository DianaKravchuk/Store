import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../store";

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
};

type UserState = {
  user: User | null;
};

const initialState: UserState = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  selectors: {
    userId: (state) => state.user?.id,
  },
  reducers: {
    login: (state, action: PayloadAction<UserState>) => {
      state.user = action.payload.user;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export const { userId } = userSlice.selectors;
export const userData = (state: RootState) => state.user;
export default userSlice.reducer;
