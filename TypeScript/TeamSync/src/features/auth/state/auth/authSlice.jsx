import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    expolyee: null,
    isLoading: false,
  },
  reducers: {
    addExpolyee: (state, action) => {
      state.expolyee = action.payload;
    },
    removeEmployee: (state) => {
      state.expolyee = null;
      state.isLoading = true;
    },
  },
});

export const { addExpolyee, removeEmployee } = authSlice.actions;

export default authSlice.reducer
