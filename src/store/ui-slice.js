import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    cartIsVisible: false,
    notification: null,
  },
  reducers: {
    showNotification(state, action) {
      const { status, title, message } = action.payload;

      state.notification = {
        status,
        title,
        message,
      };
    },

    toogleCart(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
  },
});

export default uiSlice.reducer;
export const { showNotification, toogleCart } = uiSlice.actions;
