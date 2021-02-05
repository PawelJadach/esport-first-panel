import { CSpinner } from '@coreui/react';
import clsx from 'clsx';
import React from 'react';

const Spinner = ({ full }) => {
  return (
    <div
      className={clsx(
        'd-flex justify-content-center align-items-center',
        full && 'position-absolute w-100 h-100'
      )}
      style={{ zIndex: '9999', backgroundColor: 'rgba(255,255,255, 0.2)' }}
    >
      <CSpinner color="primary" />
    </div>
  );
};

export default Spinner;
