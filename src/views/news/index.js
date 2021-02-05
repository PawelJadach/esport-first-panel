import React from 'react';
import { CCard, CCardBody, CCol, CRow } from '@coreui/react';

const News = () => {
  return (
    <>
      <CCard>
        <CCardBody>
          <CRow>
            <CCol sm="5">
              <h4 id="traffic" className="card-title mb-0">
                Newsy
              </h4>
              <div className="small text-muted">Strona z newsami</div>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
    </>
  );
};

export default News;
