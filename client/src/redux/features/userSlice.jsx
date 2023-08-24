import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const updateUser = createAsyncThunk(
  "user/updateUser",
  async ({ email}, { rejectWithValue }) => {
    try {
      console.log("email", { email});
      const response = await axios.post(
        `${process.env.REACT_APP_API_PORT}/getuserbyemail`,
        { email }
      );
      console.log("response", response.data);
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
    list_id_order: [],
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
      state.list_id_order = action.payload.list_id_order;
      state.id_card = action.payload.id_card;
      state.account_balance = action.payload.account_balance;
    },
    resetUser: (state) => {
      state._id = "";
      state.id = "";
      state.username = "";
      state.email = "";
      state.firstname = "";
      state.lastname = "";
      state.phonenumber = "";
      state.role = "";
      state.list_id_order = [];
      state.id_card = "";
      state.account_balance = "";
    }

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
        state._id = action.payload.user._id;
        state.id = action.payload.user.id;
        state.username = action.payload.user.username;
        state.email = action.payload.user.email;
        state.firstname = action.payload.user.firstname;
        state.lastname = action.payload.user.lastname;
        state.phonenumber = action.payload.user.phonenumber;
        state.role = action.payload.user.role;
        state.list_id_order = action.payload.user.list_id_order;
        state.id_card = action.payload.user.id_card;
        state.account_balance = action.payload.user.account_balance;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setUser, resetUser } = userSlice.actions;
export default userSlice.reducer;

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
//     list_id_order: [],
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
//       state.list_id_order = action.payload.list_id_order;
//       state.id_card = action.payload.id_card;
//       state.account_balance = action.payload.account_balance;
//     },
//   },
// });
// export const { setUser } = userSlice.actions;
// export default userSlice.reducer;
