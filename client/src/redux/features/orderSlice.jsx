import { createSlice } from "@reduxjs/toolkit";

export const orderSlice = createSlice({
  name: "order",
  initialState: [], // set initial state to an empty array

  reducers: {
    addToCart: (state, action) => {
      const { id, image, title, author, rate, price, description, _id } =
        action.payload;
      const newOrder = {
        id,
        image,
        title,
        author,
        rate,
        price,
        description,
        quantity: 1,
        _id,
      };
      state.push(newOrder);
    },
    removeOrder: (state, action) => {
      const idToRemove = action.payload;
      return state.filter((item) => item.id !== idToRemove);
    },
    increaseQuantity: (state, action) => {
      const idToUpdate = action.payload;
      const orderToUpdate = state.find((item) => item.id === idToUpdate);
      if (orderToUpdate) {
        orderToUpdate.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const idToUpdate = action.payload;
      const orderToUpdate = state.find((item) => item.id === idToUpdate);
      if (orderToUpdate && orderToUpdate.quantity > 1) {
        orderToUpdate.quantity -= 1;
      }
    },
    resetOrder: (state) => {
      return [];
    },
  },
});

export const {
  addToCart,
  removeOrder,
  increaseQuantity,
  decreaseQuantity,
  resetOrder,
} = orderSlice.actions;

export default orderSlice.reducer;