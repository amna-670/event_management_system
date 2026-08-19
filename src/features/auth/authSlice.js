import { createSlice } from "@reduxjs/toolkit";

const STORAGE_KEY = "eventsphere_current_user";

const loadStoredUser = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : null;
  } catch {
    return null;
  }
};

const storedUser = loadStoredUser();

const initialState = {
  currentUser: storedUser,
  isAuthenticated: Boolean(storedUser),
};

const authSlice = createSlice({
  name: "auth",

  initialState,

  reducers: {
    login: (state, action) => {
      state.currentUser = action.payload;
      state.isAuthenticated = true;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(action.payload));
    },

    logout: (state) => {
      state.currentUser = null;
      state.isAuthenticated = false;
      localStorage.removeItem(STORAGE_KEY);
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
