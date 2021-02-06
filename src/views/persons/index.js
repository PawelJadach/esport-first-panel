import React, { useState } from 'react';
import {
  CButton,
  CButtonToolbar,
  CCard,
  CCardBody,
  CCol,
  CRow,
} from '@coreui/react';
import PersonsTableFeat from '../../features/persons/PersonsTableFeat';
import AddNewPersonModal from '../../features/persons/AddNewPersonModal';
import EditPersonModal from '../../features/persons/EditPersonModal';

const Users = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [editPerson, setEditPerson] = useState(null);

  const openModal = () => {
    setIsOpen(true);
  };

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  const toggleEditModal = () => {
    setEditPerson(null);
  };

  return (
    <>
      <CCard>
        <CCardBody>
          <CRow>
            <CCol sm="12">
              <PersonsTableFeat
                updatePersonById={(person) => setEditPerson(person)}
              />
              <CButtonToolbar justify="end">
                <CButton
                  onClick={openModal}
                  color="success"
                  className="ml-auto"
                >
                  ADD NEW PERSON
                </CButton>
              </CButtonToolbar>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
      <AddNewPersonModal
        isOpen={isOpen}
        close={() => setIsOpen(false)}
        toggle={toggle}
      />
      {editPerson && (
        <EditPersonModal
          isOpen={!!editPerson}
          close={() => setEditPerson(false)}
          toggle={toggleEditModal}
          initialValues={editPerson}
        />
      )}
    </>
  );
};

export default Users;
