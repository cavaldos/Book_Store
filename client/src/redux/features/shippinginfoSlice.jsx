import { createSlice } from '@reduxjs/toolkit';

const shippingSlice = createSlice({
  name: 'shipping',
  initialState: {
    address: '',
    city: '',
    postalCode: '',
    phoneNo: '',
    country: '',
  },
  reducers: {
    SetAddress: (state, action) => {
      state.address = action.payload;
    },
    SetCity: (state, action) => {
      state.city = action.payload;
    },
    SetPostalCode: (state, action) => {
      state.postalCode = action.payload;
    },
    SetPhoneNo: (state, action) => {
      state.phoneNo = action.payload;
    },
    SetCountry: (state, action) => {
      state.country = action.payload;
    },
  },
});

export const {
  SetAddress,
  SetCity,
  SetPostalCode,
  SetPhoneNo,
  SetCountry,
} = shippingSlice.actions;

export default shippingSlice.reducer;
