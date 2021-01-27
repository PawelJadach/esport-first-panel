import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSidebarShow } from '../features';
import { CHeader, CToggler, CHeaderBrand, CHeaderNav } from '@coreui/react';

// routes config
import routes from '../routes';

import { TheHeaderDropdown } from './index';

const TheHeader = () => {
  const dispatch = useDispatch();
  const sidebarShow = useSelector((state) => state.auth.sidebarShow);

  const toggleSidebar = () => {
    const val = [true, 'responsive'].includes(sidebarShow)
      ? false
      : 'responsive';
    dispatch(setSidebarShow({ sidebarShow: val }));
  };

  const toggleSidebarMobile = () => {
    const val = [false, 'responsive'].includes(sidebarShow)
      ? true
      : 'responsive';
    dispatch(setSidebarShow({ sidebarShow: val }));
  };

  return (
    <CHeader>
      <CToggler
        inHeader
        className="ml-md-3 d-lg-none"
        onClick={toggleSidebarMobile}
      />
      <CToggler
        inHeader
        className="ml-3 d-md-down-none"
        onClick={toggleSidebar}
      />
      <CHeaderBrand className="mx-auto d-lg-none" to="/">
        <img src="/esport_first_black.svg" alt="Esport first logo" />
      </CHeaderBrand>
      <CHeaderNav className="px-3 ml-auto">
        <TheHeaderDropdown />
      </CHeaderNav>
    </CHeader>
  );
};

export default TheHeader;
