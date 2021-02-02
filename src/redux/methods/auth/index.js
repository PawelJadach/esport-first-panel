import axios from 'axios';
import { setAfterVerification, setUser } from '../../../features/auth';
import { handleErrors } from '../errors';

export const login = ({ email, pwd }) => async (dispatch) => {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_BE_URL}/auth/login`,
      { email, pwd },
      {
        withCredentials: true,
      }
    );

    if (res.data && res.data.error) {
      return { error: res.data.error, success: false };
    } else {
      dispatch(setUser({ user: res.data }));
      return { success: true };
    }
  } catch (error) {
    handleErrors(error);
  }
};

export const logout = () => async (dispatch) => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_BE_URL}/auth/logout`, {
      withCredentials: true,
    });

    if (res.data.ok) {
      dispatch(setUser({ user: null }));
    } else {
      handleErrors('Wystąpił błąd w metodzie wylogowywania');
    }
  } catch (error) {
    handleErrors(error);
  }
};

export const verify = () => async (dispatch) => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_BE_URL}/auth/verify`, {
      withCredentials: true,
    });

    dispatch(setAfterVerification({ afterVerification: true }));

    if (res.data.error) {
      return;
    }
    dispatch(setUser({ user: res.data }));
  } catch (error) {
    dispatch(setAfterVerification({ afterVerification: true }));
    handleErrors(error);
  }
};
