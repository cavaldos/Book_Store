import { createSlice } from "@reduxjs/toolkit";

export const roleSlice = createSlice({
  name: "role",
  initialState: {
    role: "public",
    roleRouter: "public",
    email: "...",
    password: "...",
  },
  reducers: {
    updateRole: (state, action) => {
      state.role = action.payload.role;
      state.roleRouter = action.payload.roleRouter;
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
  },
});

export const { updateRole } = roleSlice.actions;
export default roleSlice.reducer;
