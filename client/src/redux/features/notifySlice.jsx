import { createSlice } from "@reduxjs/toolkit";

export const notifySlice = createSlice({
  name: "notify",
  initialState: {
    email: "ss",
    content: "s",
    status: "s",
  },

  reducers: {},
});

export const { togglenotify } = notifySlice.actions;

export default notifySlice.reducer;
