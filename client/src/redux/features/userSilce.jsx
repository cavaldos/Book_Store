import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useEffect } from "react";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    id: null,
    name: "",
    email: "",
    password: "",
    Notification: [
      {
        id: 1,
        title: "Thông báo 1",
      },
    ],
    number_notification: Notification.length,
  },
  reducers: {
    setUser: (state, action) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
    getNotification: (state, action) => {
      state.Notification = action.payload.Notification;
      state.number_notification = action.payload.number_notification;
    },
    addNotification: (state, action) => {
      state.Notification.push(action.payload);
      state.id += 1;
    },
    removeNotification: (state, action) => {
      const idToRemove = action.payload;
      state.Notification = state.Notification.filter(
        (item) => item.id !== idToRemove
      );
      state.number_notification = state.Notification.length;
    },
  },
});

export const { setUser, getNotification, addNotification, removeNotification } =
  userSlice.actions;

export default userSlice.reducer;
// // Thực hiện gọi API để lấy thông tin user
// export const fetchUser = () => async (dispatch) => {
//   try {
//     const response = await axios.get("/api/user");
//     const { id, name, email, password } = response.data;
//     dispatch(setUser({ id, name, email, password }));
//   } catch (error) {
//     console.log(error);
//   }
// };

// // Thực hiện gọi API để cập nhật thông tin user
// export const updateUser = (userData) => async (dispatch) => {
//   try {
//     const response = await axios.put("/api/user", userData);
//     const { id, name, email, password } = response.data;
//     dispatch(setUser({ id, name, email, password }));
//   } catch (error) {
//     console.log(error);
//   }
// };

// export default userSlice.reducer;
