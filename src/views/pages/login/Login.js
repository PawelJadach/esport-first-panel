import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
  CFormText,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { setUser } from '../../../features';
import clsx from 'clsx';

import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { register, handleSubmit, errors, setError, clearErrors } = useForm();
  const onSubmit = async (data) => {
    const res = await axios.post('http://localhost:3000/auth/login', data, {
      withCredentials: true,
    });

    if (res.data && res.data.error) {
      setError('form', {
        type: 'manual',
        message: res.data.error,
      });
    } else {
      dispatch(setUser({ user: data.email }));
      history.push('/');
    }
  };

  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="flex-column justify-content-center align-items-center">
          <CCol xs="12" md="8" lg="4">
            <CCard>
              <CCardBody>
                <CForm onSubmit={handleSubmit(onSubmit)}>
                  <img
                    className="mb-3"
                    src="/esport_first_black_login.svg"
                    alt="Esport first logo"
                  />
                  <p className="text-muted">Zaloguj się do swojego konta</p>
                  <CInputGroup className={clsx(!errors.email && 'mb-3')}>
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-user" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      type="email"
                      placeholder="Email"
                      name="email"
                      innerRef={register({ required: true })}
                      invalid={!!errors.email}
                      onChange={() => clearErrors('form')}
                    />
                  </CInputGroup>
                  {errors.email && (
                    <small className="d-block text-danger text-small mb-2">
                      Pole wymagane
                    </small>
                  )}
                  <CInputGroup className={clsx(!errors.password && 'mb-3')}>
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      type="password"
                      placeholder="Hasło"
                      name="pwd"
                      innerRef={register({ required: true })}
                      invalid={!!errors.pwd}
                      onChange={() => clearErrors('form')}
                    />
                  </CInputGroup>
                  {errors.pwd && (
                    <CFormText className="help-block">
                      <span className="text-danger">Pole wymagane</span>
                    </CFormText>
                  )}
                  <CRow>
                    <CCol xs="6">
                      <CButton color="primary" className="px-4" type="submit">
                        Login
                      </CButton>
                    </CCol>
                  </CRow>
                  {errors.form && (
                    <small className="d-block text-danger text-small mb-2">
                      {errors.form.message}
                    </small>
                  )}
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Login;
