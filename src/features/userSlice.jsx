import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getUserByName = createAsyncThunk(
  "user/getUserByName",
  async (username = "gaearon") => {
    try {
      let response = await fetch(`https://api.github.com/users/${username}`, {
        method: "GET",
        headers: {
          Accept: "application/vnd.github.v3+json",
          "Content-Type": "application/json",
        },
      });
      let data = await response.json();
      return data;
    } catch (error) {
      console.log(error.message);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    userData: [],
    hasData: false,
    isLoading: false,
  },
  extraReducers: {
    [getUserByName.pending]: (state) => {
      state.isLoading = true;
      state.hasData = false;
    },
    [getUserByName.fulfilled]: (state, action) => {
      state.userData = action.payload;
      state.isLoading = false;
      state.hasData = true;
    },
    [getUserByName.rejected]: (state) => {
      state.hasData = false;
      state.isLoading = false;
    },
  },
});

export default userSlice.reducer;
