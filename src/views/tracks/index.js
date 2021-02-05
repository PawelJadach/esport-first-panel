import React from 'react';
import { CCard, CCardBody, CCol, CRow } from '@coreui/react';

const Tracks = () => {
  return (
    <>
      <CCard>
        <CCardBody>
          <CRow>
            <CCol sm="5">
              <h4 id="traffic" className="card-title mb-0">
                Tory
              </h4>
              <div className="small text-muted">Strona z torami</div>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
    </>
  );
};

export default Tracks;
