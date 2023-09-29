import { createSlice } from "@reduxjs/toolkit";

interface CountState {
  count: number;
}

const initialState: CountState = {
  count: 4,
};

const ingredientsSlice = createSlice({
  name: "ingredients",
  initialState,
  reducers: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      if (state.count === 1) return;
      state.count--;
    },
  },
});

export const { increment, decrement } = ingredientsSlice.actions;
export default ingredientsSlice.reducer;
