import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  user: null,
  sidebarShow: false,
};

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action) {
      const { user } = action.payload;

      state.user = user;
    },
    setSidebarShow(state, action) {
      const { sidebarShow } = action.payload;

      state.sidebarShow = sidebarShow;
    },
  },
});

export const { setUser, setSidebarShow } = auth.actions;

export default auth.reducer;
