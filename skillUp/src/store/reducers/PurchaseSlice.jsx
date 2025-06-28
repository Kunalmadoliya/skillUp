import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  purchase: [],
};

const PurchaseSlice = createSlice({
  name: "purchase",
  initialState,
  reducers: {
    loadpurchase: (state, action) => {
      state.purchase = action.payload;
    },
  },
});

export default PurchaseSlice.reducer;
export const { loadpurchase } = PurchaseSlice.actions;
