import { createSlice } from "@reduxjs/toolkit";

export const roleSlice = createSlice({
  name: "role",
  initialState: {
    role: "public",
    roleRouter: "public",
    email: "...",
    token: null,
  },
  reducers: {
    updateRole: (state, action) => {
      state.role = action.payload.role;
      state.roleRouter = action.payload.role;
      state.email = action.payload.email;
      state.token = action.payload.token;
    },
    logout: (state, action) => {
      state.role = "public";
      state.roleRouter = "public";
      state.email = "...";
      state.token = null;
    },
  },
});

export const { updateRole, logout } = roleSlice.actions;
export default roleSlice.reducer;
