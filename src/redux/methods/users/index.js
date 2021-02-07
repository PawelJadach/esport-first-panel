import axios from 'axios';
import {
  addUser,
  removeUser,
  changeUserRole,
  setIsFetched,
  setUsers,
  changeUser,
} from '../../../features/users';
import { handleErrors } from '../errors';

export const getAll = () => async (dispatch) => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_BE_URL}/user`, {
      withCredentials: true,
    });

    dispatch(setUsers({ users: res.data }));
    dispatch(setIsFetched({ isFetched: true }));

    return { success: true };
  } catch (error) {
    handleErrors(error);
  }
};

export const addModerator = (newUser) => async (dispatch) => {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_BE_URL}/user/register`,
      newUser,
      {
        withCredentials: true,
      }
    );

    if (res.data && res.data.error) {
      return { error: res.data.error };
    } else {
      dispatch(addUser({ user: res.data }));
      return { success: true };
    }
  } catch (error) {
    handleErrors(error);
  }
};

export const removeUserById = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(
      `${process.env.REACT_APP_BE_URL}/user/${id}`,
      {
        withCredentials: true,
      }
    );

    if (res.data && res.data.error) {
      return { error: res.data.error, success: false };
    } else {
      dispatch(removeUser({ id: id }));
      return { success: true };
    }
  } catch (error) {
    handleErrors(error);
  }
};

export const changeRole = (id, newRoleId) => async (dispatch) => {
  try {
    const res = await axios.put(
      `${process.env.REACT_APP_BE_URL}/user/${id}/role`,
      {
        role: newRoleId,
      },
      {
        withCredentials: true,
      }
    );

    if (res.data && res.data.error) {
      return { error: res.data.error, success: false };
    } else {
      dispatch(changeUserRole({ id, newRoleId }));
      return { success: true };
    }
  } catch (error) {
    handleErrors(error);
  }
};

export const updateUser = (id, newUser) => async (dispatch) => {
  try {
    const res = await axios.put(
      `${process.env.REACT_APP_BE_URL}/user/${id}`,
      newUser,
      {
        withCredentials: true,
      }
    );

    if (res.data && res.data.error) {
      return { error: res.data.error, success: false };
    } else {
      dispatch(changeUser({ user: res.data }));
      return { success: true };
    }
  } catch (error) {
    handleErrors(error);
  }
};
