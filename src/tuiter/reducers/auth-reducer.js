import { createSlice } from "@reduxjs/toolkit";
import { loginThunk } from "../services/auth-thunks";


const authSlice = createSlice({
 name: "auth",
 initialState: { currentUser: null },
 reducers: {},
 extraReducers: {
   [loginThunk.fulfilled]: (state, { payload }) => {
     state.currentUser = payload;
   },
   [logoutThunk.fulfilled]: (state) => {
     state.currentUser = null;
   },
   [profileThunk.fulfilled]: (state, { payload }) => {
     state.currentUser = payload;
   },
   [profileThunk.rejected]: (state, { payload }) => {
     state.currentUser = null;
   },
   [profileThunk.pending]: (state, action) => {
     state.currentUser = null;
   },
   [updateUserThunk.fulfilled]: (state, { payload }) => {
     state.currentUser = payload;
   },
   [register.fulfilled]: (state, { payload }) => {},
 },
});
export default authSlice.reducer;