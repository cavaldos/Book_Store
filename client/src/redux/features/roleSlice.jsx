import { createSlice } from "@reduxjs/toolkit";

//import subrice from redux
export const roleSlice = createSlice({
  name: "role",
  initialState: {
      role: "admin",
      roleRouter: "admin",
      email: "",
      password: "",
  },
  reducers: {
    updateRole: (state, action) => {
      return {
        ...state,
        role: action.payload.role,
        roleRouter: action.payload.roleRouter,
        email: action.payload.email,
        password: action.payload.password,
      };
    }
  },
});
export const { updateRole } = roleSlice.actions;
export default roleSlice.reducer;
