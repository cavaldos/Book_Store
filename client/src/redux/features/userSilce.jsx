import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        id: 111,
        name: 'default',
        email: 'default@gmail.com',
        password: 'default',
        isLoggedIn: true,
        isAdmin: true,
    },
    reducers: {
        login: (state, action) => {
            return {
                ...state,
                isLoggedIn: action.payload.isLoggedIn,
            };
        },
        editProfile: (state, action) => {
            return {
                ...state,
            };
        },
    },
});

export const { login, editProfile } = userSlice.actions;
export default userSlice.reducer;
