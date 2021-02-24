import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  newsletter: null,
  isFetched: false,
};

const newsletter = createSlice({
  name: 'newsletter',
  initialState,
  reducers: {
    setNewsletter(state, action) {
      const { newsletter } = action.payload;

      state.newsletter = newsletter;
    },
    setIsFetched(state, action) {
      const { isFetched } = action.payload;

      state.isFetched = isFetched;
    },
    removeNewsletter(state, action) {
      const { id } = action.payload;

      state.newsletter = state.newsletter.filter((item) => item.id !== id);
    },
  },
});

export const {
  setNewsletter,
  setIsFetched,
  removeNewsletter,
} = newsletter.actions;

export default newsletter.reducer;
