import { createSlice } from "@reduxjs/toolkit";

const appointmentSlice = createSlice({
  name: "appointment",
  initialState: {
    historyList: [],
	},
	
	reducers: {
		updateHistoryList: (state, action) => {
			state.historyList = action.payload.historyList;
		},
	},
});

export const { updateHistoryList } = appointmentSlice.actions;
export default appointmentSlice.reducer;
