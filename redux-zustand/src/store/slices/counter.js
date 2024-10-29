import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  countValue: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    handleIncreaseCount: (state, actions) => {
      state.countValue++;
    },
  },
});

export const { handleIncreaseCount } = counterSlice.actions;

export default counterSlice.reducer;
