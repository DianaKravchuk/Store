import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../store";

export type Address = {
  id: number;
  fullName: string;
  address: string;
  phone: string;
};

export type Payment = {
  id: number;
  lastName: string;
  firstName: string;
  fullName: string;
  cardsNumber: string;
  isDefault: boolean;
};

type UserProfileState = {
  addresses: Address[];
  payment: Payment[];
};

const initialState: UserProfileState = {
  addresses: [
    {
      id: 1,
      fullName: "Valentina Maksymova",
      address: "Ukraine, 65080, Odesa Varnenskaya st. 2 apartment 81",
      phone: "+380660225522",
    },
    {
      id: 2,
      fullName: "Valentina Maksymova",
      address: "Ukraine, 65080, Odesa Varnenskaya st. 2 apartment 81",
      phone: "+380660225522",
    },
  ],
  payment: [
    {
      cardsNumber: "0000000000009999",
      firstName: "Valentyna",
      fullName: "Valentyna Maksymova",
      lastName: "Maksymova",
      id: 1,
      isDefault: true,
    },
  ],
};

export const userProfileSlice = createSlice({
  name: "userProfile",
  initialState,
  reducers: {
    addNewAddress: (state, action: PayloadAction<Omit<Address, "id">>) => {
      const newId = state.addresses.length
        ? Math.max(...state.addresses.map((address) => address.id)) + 1
        : 1;
      state.addresses.push({ ...action.payload, id: newId });
    },
    deleteAddress: (state, action: PayloadAction<number>) => {
      state.addresses = state.addresses.filter(
        ({ id }) => id !== action.payload,
      );
    },
    addNewPayment: (state, action: PayloadAction<Omit<Payment, "id">>) => {
      const newId = state.payment.length
        ? Math.max(...state.payment.map(({ id }) => id)) + 1
        : 1;
      state.payment.push({ ...action.payload, id: newId });
    },
    deletePayment: (state, action: PayloadAction<number>) => {
      state.payment = state.payment.filter(({ id }) => id !== action.payload);
    },
  },
});

export const { addNewAddress, deleteAddress, addNewPayment, deletePayment } =
  userProfileSlice.actions;
export const userProfile = (state: RootState) => state.userProfile;
export default userProfileSlice.reducer;
