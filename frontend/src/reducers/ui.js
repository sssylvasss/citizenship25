import { createSlice } from "@reduxjs/toolkit";

export const ui = createSlice({
  name: "ui",
  initialState: {
    isLoading: false,
    animation: false,
  },
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setAnimation: (state, action) => {
      state.animation = action.payload;
    },
  },
});
