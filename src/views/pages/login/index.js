import React from 'react';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { login } from '../../../redux/methods/auth';
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
import clsx from 'clsx';

import { useHistory } from 'react-router-dom';

const Login = ({ login }) => {
  const history = useHistory();
  const { register, handleSubmit, errors, setError, clearErrors } = useForm();
  const onSubmit = async (data) => {
    const res = await login(data);

    if (res.success) {
      history.push('/');
    } else {
      setError('form', {
        type: 'manual',
        message: res.error,
      });
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

const mapDispatch = {
  login,
};

export default connect(null, mapDispatch)(Login);
