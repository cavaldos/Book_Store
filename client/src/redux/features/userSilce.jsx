// import { createSlice } from "@reduxjs/toolkit";
// import axios from "axios";
// import { useEffect } from "react";

// export const userSlice = createSlice({
//   name: "user",
//   initialState: {
//     _id: "",
//     id: "",
//     username: "",
//     email: "",
//     firstname: "",
//     lastname: "",
//     phonenumber: "",
//     role: "",
//     id_order: [],
//     id_card: "",
//     account_balance: "",
//   },
//   reducers: {
//     setUser: (state, action) => {
//       state._id = action.payload._id;
//       state.id = action.payload.id;
//       state.username = action.payload.username;
//       state.email = action.payload.email;
//       state.firstname = action.payload.firstname;
//       state.lastname = action.payload.lastname;
//       state.phonenumber = action.payload.phonenumber;
//       state.role = action.payload.role;
//       state.id_order = action.payload.id_order;
//       state.id_card = action.payload.id_card;
//       state.account_balance = action.payload.account_balance;
//     },
//   },
// });

// export const { setUser } = userSlice.actions;

// export default userSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const updateUser = createAsyncThunk(
  "user/updateUser",
  async ({ userId, updatedData }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`/api/users/${userId}`, updatedData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState: {
    _id: "",
    id: "",
    username: "",
    email: "",
    firstname: "",
    lastname: "",
    phonenumber: "",
    role: "",
    id_order: [],
    id_card: "",
    account_balance: "",
    loading: false,
    error: null,
  },
  reducers: {
    setUser: (state, action) => {
      state._id = action.payload._id;
      state.id = action.payload.id;
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.firstname = action.payload.firstname;
      state.lastname = action.payload.lastname;
      state.phonenumber = action.payload.phonenumber;
      state.role = action.payload.role;
      state.id_order = action.payload.id_order;
      state.id_card = action.payload.id_card;
      state.account_balance = action.payload.account_balance;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        // Cập nhật thông tin người dùng đã được cập nhật
        state = { ...state, ...action.payload };
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
