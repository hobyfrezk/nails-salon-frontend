import appointmentReducer from "./appointmentSlice"
import authReducer from "./authSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
	reducer: {
		auth: authReducer,
		appointment: appointmentReducer,
	},
});

export default store;
