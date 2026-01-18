import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

/**
 * BONUS: Async Action (simulate an API call)
 * This will wait 2 seconds then return a new user object.
 */
export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return {
    name: "Async User",
    email: "async@test.com",
  };
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "Sama",
    email: "sama@test.com",
    status: "idle", // idle | loading | success
  },
  reducers: {
    updateUserName: (state, action) => {
      state.name = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.status = "success";
        state.name = action.payload.name;
        state.email = action.payload.email;
      });
  },
});

export const { updateUserName } = userSlice.actions;
export default userSlice.reducer;
