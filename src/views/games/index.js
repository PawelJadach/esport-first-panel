import React from 'react';
import { CCard, CCardBody, CCol, CRow } from '@coreui/react';

const Organizations = () => {
  return (
    <>
      <CCard>
        <CCardBody>
          <CRow>
            <CCol sm="5">
              <h4 id="traffic" className="card-title mb-0">
                Organizacje
              </h4>
              <div className="small text-muted">Strona z organizacjami</div>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
    </>
  );
};

export default Organizations;
