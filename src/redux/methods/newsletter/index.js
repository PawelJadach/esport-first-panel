import axios from 'axios';
import {
  setNewsletter,
  setIsFetched,
  removeNewsletter,
} from '../../../features/newsletter';
import { handleErrors } from '../errors';

export const getAll = () => async (dispatch) => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_BE_URL}/newsletters`, {
      withCredentials: true,
    });

    dispatch(setNewsletter({ newsletter: res.data }));
    dispatch(setIsFetched({ isFetched: true }));

    return { success: true };
  } catch (error) {
    handleErrors(error);
  }
};

export const removeNewsletterById = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(
      `${process.env.REACT_APP_BE_URL}/newsletters/${id}`,
      {
        withCredentials: true,
      }
    );

    if (res.data && res.data.error) {
      return { error: res.data.error, success: false };
    } else {
      dispatch(removeNewsletter({ id: id }));
      return { success: true };
    }
  } catch (error) {
    handleErrors(error);
  }
};
