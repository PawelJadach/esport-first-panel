import React, { useState } from 'react';
import {
  CButton,
  CButtonToolbar,
  CCard,
  CCardBody,
  CCol,
  CRow,
} from '@coreui/react';
import LeaguesTableFeat from '../../features/leagues/LeaguesTableFeat';
import AddNewLeagueModal from '../../features/leagues/AddNewLeagueModal';
import EditLeagueModal from '../../features/leagues/EditLeagueModal';

const Leagues = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [editLeague, setEditLeague] = useState(null);
  const [refetch, setRefetch] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  const toggleEditModal = () => {
    setEditLeague(null);
  };

  const handleEdit = (item) => {
    setEditLeague(item);
  };

  const editSuccess = () => {
    setRefetch(true);
    setRefetch(false);
  };

  return (
    <>
      <CCard>
        <CCardBody>
          <CRow>
            <CCol sm="12">
              {!refetch && <LeaguesTableFeat handleEdit={handleEdit} />}
              <CButtonToolbar justify="end">
                <CButton
                  onClick={openModal}
                  color="success"
                  className="ml-auto"
                >
                  ADD NEW LEAGUE
                </CButton>
              </CButtonToolbar>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
      <AddNewLeagueModal
        isOpen={isOpen}
        close={() => setIsOpen(false)}
        toggle={toggle}
      />
      {editLeague && (
        <EditLeagueModal
          isOpen={!!editLeague}
          close={() => setEditLeague(false)}
          toggle={toggleEditModal}
          initialValues={editLeague}
          editSuccess={editSuccess}
        />
      )}
    </>
  );
};

export default Leagues;
