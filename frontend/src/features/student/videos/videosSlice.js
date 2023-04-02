import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    getSingleV(state, action) {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
    },
  },
});

export default videoSlice.reducer;
export const { getSingleV } = videoSlice.actions;
