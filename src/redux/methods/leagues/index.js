import axios from 'axios';
import {
  setIsFetched,
  setLeagues,
  addLeague,
  changeLeague,
  removeLeagueById,
} from '../../../features/leagues';
import { handleErrors } from '../errors';

export const getAll = () => async (dispatch) => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_BE_URL}/leagues`, {
      withCredentials: true,
    });

    dispatch(setLeagues({ leagues: res.data }));
    dispatch(setIsFetched({ isFetched: true }));

    return { success: true };
  } catch (error) {
    handleErrors(error);
  }
};

export const addNewLeague = (formData) => async (dispatch) => {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_BE_URL}/leagues`,
      formData,
      {
        withCredentials: true,
      }
    );

    if (res.data && res.data.error) {
      return { error: res.data.error };
    } else {
      dispatch(addLeague({ league: res.data }));
      return { success: true };
    }
  } catch (error) {
    handleErrors(error);

    return { error: 'Url must be valid url!' };
  }
};

export const editLeague = (formData, id) => async (dispatch) => {
  try {
    const res = await axios.put(
      `${process.env.REACT_APP_BE_URL}/leagues/${id}`,
      formData,
      {
        withCredentials: true,
      }
    );

    if (res.data && res.data.error) {
      return { error: res.data.error };
    } else {
      dispatch(changeLeague({ id, league: res.data }));
      return { success: true };
    }
  } catch (error) {
    handleErrors(error);

    return { error: 'Url must be valid url!' };
  }
};

export const removeLeague = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(
      `${process.env.REACT_APP_BE_URL}/leagues/${id}`,
      {
        withCredentials: true,
      }
    );

    if (res.data && res.data.error) {
      return { error: res.data.error };
    } else {
      dispatch(removeLeagueById({ id }));
      return { success: true };
    }
  } catch (error) {
    handleErrors(error);

    return { error: 'Url must be valid url!' };
  }
};
