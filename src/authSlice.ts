import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  isAuth: boolean;
  userData: {
    email: string;
  };
}

const initialState: AuthState = {
  isAuth: localStorage.getItem("isAuth") === "true",
  userData: {
    email:
      (localStorage.getItem("isAuth") === "true" &&
        localStorage.getItem("userEmail")) ||
      "",
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action: PayloadAction<string>) {
      state.isAuth = true;
      state.userData.email = action.payload;
      localStorage.setItem("isAuth", "true");
      localStorage.setItem("userEmail", action.payload);
    },
    logout(state) {
      state.isAuth = false;
      localStorage.setItem("isAuth", "false");
      localStorage.removeItem("userEmail");
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
