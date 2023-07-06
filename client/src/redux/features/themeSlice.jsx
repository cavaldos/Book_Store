import { createSlice } from '@reduxjs/toolkit';

export const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        theme: 'light',
    },

    reducers: {
        toggleTheme: (state, action) => {
            return {
                ...state,
                theme: action.payload.theme,
            };
        }
    },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
