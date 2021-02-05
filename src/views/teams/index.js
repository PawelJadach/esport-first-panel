import React from 'react';
import { CCard, CCardBody, CCol, CRow } from '@coreui/react';

const Teams = () => {
  return (
    <>
      <CCard>
        <CCardBody>
          <CRow>
            <CCol sm="5">
              <h4 id="traffic" className="card-title mb-0">
                Drużyny
              </h4>
              <div className="small text-muted">Strona z drużynami</div>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
    </>
  );
};

export default Teams;
