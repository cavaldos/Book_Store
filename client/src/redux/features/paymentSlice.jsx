import { createSlice } from "@reduxjs/toolkit";

export const paymentSlice = createSlice({
  name: "payment",
  initialState: {
    email: "",
    id_payment: "",
    currentStep: 0,
    orderDetails: [],
    total: 0,
  },
  reducers: {
    createPayment: (state, action) => {
      return {
        ...state,
        email: action.payload.email || "", 
        id_payment: action.payload.id_payment,
        orderDetails: action.payload.orderDetails,
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
      return {
        initialState: {
          email: "",
          id_payment: "",
          currentStep: 0,
          orderDetails: [],
          total: 0,
        },
      };
    },
    resetPayment: (state) => {
      state.id_payment = 0;
      state.orderDetails = [];
      state.email = "";
      state.currentStep = 0;
      state.total = 0;
    },
  },
});

export const {
  createPayment,
  updateTotal,
  updateCurrentStep,
  removePayment,
  resetPayment,
} = paymentSlice.actions;

export default paymentSlice.reducer;
