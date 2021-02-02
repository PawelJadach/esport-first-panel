import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  user: null,
  sidebarShow: false,
  afterVerification: false,
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
    setAfterVerification(state, action) {
      const { afterVerification } = action.payload;

      state.afterVerification = afterVerification;
    },
  },
});

export const { setUser, setSidebarShow, setAfterVerification } = auth.actions;

export default auth.reducer;
