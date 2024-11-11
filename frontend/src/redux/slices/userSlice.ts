import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../store";

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
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
    changePassword: (state, action: PayloadAction<string>) => {
      if (state.user) {
        state.user.password = action.payload;
      }
    },
    changeEmail: (state, action: PayloadAction<string>) => {
      if (state.user) {
        state.user.email = action.payload;
      }
    },
  },
});

export const { login, logout, changeEmail, changePassword } = userSlice.actions;
export const { userId } = userSlice.selectors;
export const userData = (state: RootState) => state.user;
export default userSlice.reducer;
