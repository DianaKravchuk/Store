import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../store";

type FavoritesState = {
  productIds: number[];
};

const initialState: FavoritesState = {
  productIds: [11],
};

export const userFavoritesSlice = createSlice({
  name: "userFavorites",
  initialState,
  reducers: {
    addFavoriteItem: (state, action: PayloadAction<number>) => {
      if (!state.productIds.includes(action.payload)) {
        state.productIds.push(action.payload);
      }
    },
    deleteFavoriteItem: (state, action: PayloadAction<number>) => {
      state.productIds = state.productIds.filter(
        (productId) => productId !== action.payload,
      );
    },
  },
});

export const { addFavoriteItem, deleteFavoriteItem } =
  userFavoritesSlice.actions;

export const selectFavoriteItems = (state: RootState) =>
  state.userFavorites.productIds;

export default userFavoritesSlice.reducer;
