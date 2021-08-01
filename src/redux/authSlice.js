import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
	name: "auth",
	initialState: {
		isLoggedIn: false,
		user: {},
	},
	reducers: {
		updateAuth: (state, action) => {
			state.isLoggedIn = action.payload.auth.isLoggedIn;
			state.user = action.payload.auth.user;
		},
	},
});

export const { updateAuth } = authSlice.actions
export default authSlice.reducer