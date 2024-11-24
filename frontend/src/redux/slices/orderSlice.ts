import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { OrderProps } from "@/pages/Account/components/OrderPreview/types";

type OrderState = {
  order: OrderProps | null;
};

const initialState: OrderState = {
  order: null,
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addCurrentOrder: (state, action: PayloadAction<OrderProps>) => {
      state.order = action.payload;
    },
    clearCurrentOrder: (state) => {
      state.order = null;
    },
  },
});

export const { addCurrentOrder, clearCurrentOrder } = orderSlice.actions;
export const selectOrder = (state: RootState) => state.order.order;
export default orderSlice.reducer;
