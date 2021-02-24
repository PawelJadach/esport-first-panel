import React from 'react';
import { CButton, CCard, CCardBody, CCol, CRow } from '@coreui/react';
import NewsletterTableFeat from '../../features/newsletter/NewsletterTableFeat';
import { getAll } from '../../redux/methods/newsletter';
import { connect } from 'react-redux';

const Newsletter = ({ getAll }) => {
  return (
    <>
      <CCard>
        <CCardBody>
          <CButton onClick={getAll} color="primary">
            UPDATE DATA
          </CButton>
          <CRow>
            <CCol sm="12">
              <NewsletterTableFeat />
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
    </>
  );
};

const mapDispatch = {
  getAll,
};

export default connect(null, mapDispatch)(Newsletter);
