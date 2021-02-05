import React, { useState } from 'react';
import {
  CButton,
  CButtonToolbar,
  CCard,
  CCardBody,
  CCol,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CRow,
} from '@coreui/react';
import UserTableFeat from '../../features/users/UserTable';
import AddNewUserModal from '../../features/users/AddNewUserModal';

const Users = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <CCard>
        <CCardBody>
          <CRow>
            <CCol sm="12">
              <UserTableFeat />
              <CButtonToolbar justify="end">
                <CButton
                  onClick={openModal}
                  color="success"
                  className="ml-auto"
                >
                  ADD NEW USER
                </CButton>
              </CButtonToolbar>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
      <AddNewUserModal
        isOpen={isOpen}
        close={() => setIsOpen(false)}
        toggle={toggle}
      />
    </>
  );
};

export default Users;
