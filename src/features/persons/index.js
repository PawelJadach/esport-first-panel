import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  persons: null,
  isFetched: false,
};

const persons = createSlice({
  name: 'persons',
  initialState,
  reducers: {
    setPersons(state, action) {
      const { persons } = action.payload;

      state.persons = persons;
    },
    addPerson(state, action) {
      const { person } = action.payload;

      state.persons = [...state.persons, person];
    },
    removePerson(state, action) {
      const { id } = action.payload;

      state.persons = state.persons.filter((person) => person.id !== id);
    },
    updatePerson(state, action) {
      const { person } = action.payload;

      state.persons = state.persons.map((currentPerson) => {
        return currentPerson.id === person.id ? person : currentPerson;
      });
    },
    setIsFetched(state, action) {
      const { isFetched } = action.payload;

      state.isFetched = isFetched;
    },
  },
});

export const {
  setPersons,
  addPerson,
  removePerson,
  updatePerson,
  setIsFetched,
} = persons.actions;

export default persons.reducer;
