import { createSlice } from "@reduxjs/toolkit";

const role = {
  public: "public",
  admin: "admin",
  user: "user",
  employee: "employee",
};
export const roleSlice = createSlice({
  name: "role",
  initialState: {
    role: role.public,
    roleRouter: role.public ,
    email: "",
    password: "",
  },
  reducers: {
    setRole: (state, action) => {
      return {
        ...state,
        role: action.payload.role,
        roleRouter: action.payload.roleRouter,
        email: action.payload.email,
        password: action.payload.password,
      };
    },
    updateRole: (state, action) => {
      return {
        ...state,
        role: action.payload.role,
      };
    },
    removeRole: (state, action) => {
      return {
        initialState: {
          role: role.public,
          email: "removed",
          password: "removed",
        },
      };
    },
  },
});
export const { setRole, updateRole, removeRole } = roleSlice.actions;
export default roleSlice.reducer;
