import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notifications",
  initialState: { count: 3 },
  reducers: {
    incrementNotifications: (state) => {
      state.count += 1;
    },
  },
});

export const { incrementNotifications } = notificationSlice.actions;
export default notificationSlice.reducer;
