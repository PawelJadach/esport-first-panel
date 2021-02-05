import React from 'react';
import { CCard, CCardBody, CCol, CRow } from '@coreui/react';

const Leagues = () => {
  return (
    <>
      <CCard>
        <CCardBody>
          <CRow>
            <CCol sm="5">
              <h4 id="traffic" className="card-title mb-0">
                Tory
              </h4>
              <div className="small text-muted">Strona z ligami</div>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
    </>
  );
};

export default Leagues;
