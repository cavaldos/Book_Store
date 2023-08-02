import { createSlice } from '@reduxjs/toolkit';

//import subrice from redux
export const walletSlice = createSlice({
    name: 'wallet',
    initialState: {
        id: 12,
        name: 'wallet',
        price: 100,
        surplus: 1000,
    },
    reducers: {
        recharge: (state, action) => {
            return {
                ...state,
                surplus: state.surplus + action.payload,
            };
        }
    },
});
export const {  reducer } = walletSlice.actions;
export default walletSlice.reducer;