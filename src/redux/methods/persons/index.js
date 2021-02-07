import axios from 'axios';
import {
  setPersons,
  addPerson,
  removePerson,
  updatePerson,
  setIsFetched,
} from '../../../features/persons';
import { changeUser } from '../../../features/users';
import { handleErrors } from '../errors';

export const getAll = () => async (dispatch) => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_BE_URL}/persons`, {
      withCredentials: true,
    });

    dispatch(setPersons({ persons: res.data }));
    dispatch(setIsFetched({ isFetched: true }));

    return { success: true };
  } catch (error) {
    handleErrors(error);
  }
};

export const addNewPerson = (person) => async (dispatch) => {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_BE_URL}/persons`,
      person,
      {
        withCredentials: true,
      }
    );

    if (res.data && res.data.error) {
      return { error: res.data.error };
    } else {
      dispatch(addPerson({ person: res.data }));
      return { success: true };
    }
  } catch (error) {
    handleErrors(error);
  }
};

export const removePersonById = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(
      `${process.env.REACT_APP_BE_URL}/persons/${id}`,
      {
        withCredentials: true,
      }
    );

    if (res.data && res.data.error) {
      return { error: res.data.error, success: false };
    } else {
      dispatch(removePerson({ id: id }));
      if (res.data.user) {
        dispatch(changeUser({ user: res.data.user }));
      }
      return { success: true };
    }
  } catch (error) {
    handleErrors(error);
  }
};

export const updatePersonById = (id, newPerson) => async (dispatch) => {
  try {
    const res = await axios.put(
      `${process.env.REACT_APP_BE_URL}/persons/${id}`,
      newPerson,
      {
        withCredentials: true,
      }
    );

    if (res.data && res.data.error) {
      return { error: res.data.error, success: false };
    } else {
      dispatch(updatePerson({ person: res.data }));
      return { success: true };
    }
  } catch (error) {
    handleErrors(error);
  }
};
