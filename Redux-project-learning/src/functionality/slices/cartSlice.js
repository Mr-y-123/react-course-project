import { createSlice } from "@reduxjs/toolkit";
const initialCartVisible = {
  cartisVisible: false,
  notification: null,
};
const cartSlice = new createSlice({
  name: "ui",
  initialState: initialCartVisible,
  reducers: {
    toggle: (state) => {
      state.cartisVisible = !state.cartisVisible;
    },
    setNotification: (state, action) => {
      state.notification = {
        status: action.payload.status,
        message: action.payload.message,
      };
    },
  },
});

export const { toggle ,setNotification} = cartSlice.actions;
export default cartSlice.reducer;
