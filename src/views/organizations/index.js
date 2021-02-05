import React from 'react';
import { CCard, CCardBody, CCol, CRow } from '@coreui/react';

const Games = () => {
  return (
    <>
      <CCard>
        <CCardBody>
          <CRow>
            <CCol sm="5">
              <h4 id="traffic" className="card-title mb-0">
                Gry
              </h4>
              <div className="small text-muted">Strona z grami</div>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
    </>
  );
};

export default Games;
