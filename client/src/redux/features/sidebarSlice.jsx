import { createSlice } from '@reduxjs/toolkit';

export const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState: {
        toggle_sidebar: 'close', //close
        scroll: 'up',
    },

    reducers: {
        toggleSidebar: (state, action) => {
            return {
                ...state,
                toogle: action.payload.toogle,
            };
        }
    },
});

export const { toggleSidebar} = sidebarSlice.actions;

export default sidebarSlice.reducer;
