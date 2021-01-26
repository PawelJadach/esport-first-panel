import React from 'react';
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
  CRow
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import {setUser} from '../../../features';

const Login = () => {
  const dispatch = useDispatch();
  const handleLogin = () => {
    dispatch(setUser({ user: true }));
  };

  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="flex-column justify-content-center align-items-center">
          <CCol xs="12" md="8" lg="4">
            <CCard>
              <CCardBody>
                <CForm>
                  <img className='mb-3' src='/esport_first_black_login.svg' alt='Esport first logo' />
                  <p className="text-muted">Zaloguj się do swojego konta</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-user" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="text" placeholder="Email" autoComplete="username" />
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="password" placeholder="Hasło" autoComplete="current-password" />
                  </CInputGroup>
                  <CRow>
                    <CCol xs="6">
                      <CButton onClick={handleLogin} color="primary" className="px-4">Login</CButton>
                    </CCol>
                  </CRow>
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
