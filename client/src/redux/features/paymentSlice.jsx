import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

export const paymentSlice = createSlice({
  name: "payment",
  initialState: {
    currentStep: 0,
    orderDetails: [],
    email_user: "",
    total: 0,
  },
  reducers: {
    createPayment: (state, action) => {
      return {
        ...state,
        orderDetails: action.payload.orderDetails,
        email_user: action.payload.email_user || "",
        currentStep: action.payload.currentStep || 0,
      };
    },
    updateTotal: (state, action) => {
      state.total = action.payload;
    },
    updateCurrentStep: (state, action) => {
      state.currentStep = action.payload;
    },
  },
});

export const { createPayment, updateTotal, updateCurrentStep } =
  paymentSlice.actions;

export default paymentSlice.reducer;
