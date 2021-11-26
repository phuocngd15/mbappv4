import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "userReducer",
  initialState: {
    user: {
      email: undefined,
    },
    isLogin: false,
  },
  reducers: {
    saveUser: (state, payload) => {
      state.user = payload;
      state.isLogin =false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, saveUser } =
  userSlice.actions;
export default userSlice.reducer;
