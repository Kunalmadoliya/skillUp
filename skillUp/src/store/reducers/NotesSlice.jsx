import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notes: [],
};

const NotesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    loadnotes: (state, action) => {
      state.notes = action.payload;
    },
  },
});

export default NotesSlice.reducer;
export const { loadnotes } = NotesSlice.actions;
