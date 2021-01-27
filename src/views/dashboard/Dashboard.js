import React from 'react';
import axios from 'axios';
import { CCard, CCardBody, CCol, CRow } from '@coreui/react';
import { useCookies } from 'react-cookie';

const Dashboard = () => {
  const handleClick = async () => {
    const res = await axios.get('http://localhost:3000/test', {
      withCredentials: true,
    });
    console.log(res.data);
  };

  return (
    <>
      <CCard>
        <CCardBody>
          <CRow>
            <CCol sm="5">
              <h4 id="traffic" className="card-title mb-0">
                Działa
              </h4>
              <button onClick={handleClick}>Pobierz dane</button>
              <div className="small text-muted">Dzięki działa</div>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
    </>
  );
};

export default Dashboard;
