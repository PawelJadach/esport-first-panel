import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  users: null,
  isFetched: false,
};

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUsers(state, action) {
      const { users } = action.payload;

      state.users = users;
    },
    addUser(state, action) {
      const { user } = action.payload;

      state.users = [...state.users, user];
    },
    removeUser(state, action) {
      const { id } = action.payload;

      state.users = state.users.filter((user) => user.id !== id);
    },
    changeUserRole(state, action) {
      const { id, newRoleId } = action.payload;

      state.users = state.users.map((user) => {
        return user.id === id ? { ...user, role: newRoleId } : user;
      });
    },
    setIsFetched(state, action) {
      const { isFetched } = action.payload;

      state.isFetched = isFetched;
    },
  },
});

export const {
  setUsers,
  addUser,
  removeUser,
  changeUserRole,
  setIsFetched,
} = auth.actions;

export default auth.reducer;
