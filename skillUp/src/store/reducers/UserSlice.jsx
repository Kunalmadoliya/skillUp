import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  user: [],
};

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loaduser: (state, action) => {
      state.user = action.payload;
    },
    removeuser: (state, action) => {
      state.user = null;
    },
  },
});

export default UserSlice.reducer;
export const {loaduser ,removeuser} = UserSlice.actions;
