import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  leagues: null,
  isFetched: false,
};

const leagues = createSlice({
  name: 'leagues',
  initialState,
  reducers: {
    setLeagues(state, action) {
      const { leagues } = action.payload;

      state.leagues = leagues;
    },
    addLeague(state, action) {
      const { league } = action.payload;

      state.leagues = [...state.leagues, league];
    },
    removeLeagueById(state, action) {
      const { id } = action.payload;

      state.leagues = state.leagues.filter((league) => league.id !== id);
    },
    setIsFetched(state, action) {
      const { isFetched } = action.payload;

      state.isFetched = isFetched;
    },
    changeLeague(state, action) {
      const { league } = action.payload;

      state.leagues = state.leagues.map((item) => {
        return item.id === league.id ? league : item;
      });
    },
  },
});

export const {
  setLeagues,
  addLeague,
  removeLeagueById,
  setIsFetched,
  changeLeague,
} = leagues.actions;

export default leagues.reducer;
