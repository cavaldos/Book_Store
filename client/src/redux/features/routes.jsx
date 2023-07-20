import { createSlice } from "@reduxjs/toolkit";
import {
  publicRoutes,
  adminRoutes,
  userRoutes,
  employeeRoutes,
} from "../../Routes";

export const routesSlice = createSlice({
  name: "routes",
  initialState: {
    routes: publicRoutes,
  },
  reducers: {
    setRoutes: (state, action) => {
      return {
        ...state,
        routes: action.payload.routes,
      };
    },
  },
});

export const { setRoutes } = routesSlice.actions;
export default routesSlice.reducer;
