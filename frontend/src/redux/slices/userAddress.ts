import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../store";

export type Address = {
  id: number;
  fullName: string;
  address: string;
  phone: string;
};

type AddressState = {
  addresses: Address[];
};

const initialState: AddressState = {
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
};

export const userAddressSlice = createSlice({
  name: "userAddress",
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
        (address) => address.id !== action.payload,
      );
    },
  },
});

export const { addNewAddress, deleteAddress } = userAddressSlice.actions;
export const userAddresses = (state: RootState) => state.userAddress.addresses;
export default userAddressSlice.reducer;
