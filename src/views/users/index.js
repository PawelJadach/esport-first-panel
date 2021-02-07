import React, { useState } from 'react';
import {
  CButton,
  CButtonToolbar,
  CCard,
  CCardBody,
  CCol,
  CRow,
} from '@coreui/react';
import UserTableFeat from '../../features/users/UserTableFeat';
import AddNewUserModal from '../../features/users/AddNewUserModal';
import EditUserModal from '../../features/users/EditUserModal';

const Users = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userToEdit, setUserToEdit] = useState(null);

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
              <UserTableFeat setUserToEdit={setUserToEdit} />
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
      {!!userToEdit && (
        <EditUserModal
          isOpen={!!userToEdit}
          close={() => setUserToEdit(null)}
          toggle={() => setUserToEdit(null)}
          defaultValues={{
            email: userToEdit && userToEdit.email,
            personId:
              userToEdit && userToEdit.person ? userToEdit.person.id : '',
            id: userToEdit.id,
          }}
        />
      )}
    </>
  );
};

export default Users;
