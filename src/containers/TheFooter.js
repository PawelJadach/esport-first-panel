import React from 'react';
import { CFooter } from '@coreui/react';

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <span className="ml-1">&copy; 2020 Esport First. All rights reserved.</span>
      </div>
    </CFooter>
  );
};

export default React.memo(TheFooter);
