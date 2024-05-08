import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: 'authName',
    initialState: {
        isLoggedIn: false
    },
    reducers: {
        login(state, action) {
            state.isLoggedIn = !state.isLoggedIn;
        },
        logout(state, action) {
            state.isLoggedIn  = !state.isLoggedIn;
        }
        // you define any method here
    }

});

export const authActions = authSlice.actions;

export default authSlice;