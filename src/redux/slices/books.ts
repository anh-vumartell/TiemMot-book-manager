import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  total: 0,
} as const;

export const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addOneBook: (state) => {
      state.total += 1;
    },
    removeOneBook: (state) => {
      state.total -= 1;
    },
    addManyBooks: (state, action: PayloadAction<number>) => {
      state.total += action.payload;
    },
  },
});

export const { addOneBook, removeOneBook, addManyBooks } = booksSlice.actions;
export default booksSlice.reducer;
