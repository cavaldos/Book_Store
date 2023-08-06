import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

export const paymentSlice = createSlice({
  name: "payment",
  initialState: {
    id_payment: "",
    currentStep: 0,
    orderDetails: [],
    email_user: "",
    total: 0,
  },
  reducers: {
    createPayment: (state, action) => {
      return {
        ...state,
        id_payment: action.payload.id_payment,
        orderDetails: action.payload.orderDetails,
        email_user: action.payload.email_user || "",
        currentStep: action.payload.currentStep || 0,
        total: action.payload.total || 0,
      };
    },
    updateTotal: (state, action) => {
      state.total = action.payload;
    },
    updateCurrentStep: (state, action) => {
      return {
        ...state,
        currentStep: action.payload.currentStep,
      };
    },
    removePayment: (state) => {
      state.id_payment = 0;
      state.orderDetails = [];
      state.email_user = "";
      state.currentStep = 0;
      state.total = 0;
    },
    resetPayment: (state) => {
      state.id_payment = 0;
      state.orderDetails = [];
      state.email_user = "";
      state.currentStep = 0;
      state.total = 0;
    }
  },
});

export const { createPayment, updateTotal, updateCurrentStep, removePayment,resetPayment } =
  paymentSlice.actions;

export default paymentSlice.reducer;
