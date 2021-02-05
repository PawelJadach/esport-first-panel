import React from 'react';
import { CCard, CCardBody, CCol, CRow } from '@coreui/react';

const Users = () => {
  return (
    <>
      <CCard>
        <CCardBody>
          <CRow>
            <CCol sm="5">
              <h4 id="traffic" className="card-title mb-0">
                Osoby
              </h4>
              <div className="small text-muted">Strona z osobami</div>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
    </>
  );
};

export default Users;
