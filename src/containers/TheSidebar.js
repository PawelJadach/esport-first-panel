import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSidebarShow } from '../features/auth';
import {
  CCreateElement,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarNavDivider,
  CSidebarNavTitle,
  CSidebarNavDropdown,
  CSidebarNavItem,
} from '@coreui/react';

// sidebar nav config
import navigation from './_nav';

const TheSidebar = () => {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.auth.sidebarShow);

  return (
    <CSidebar
      show={show}
      onShowChange={(val) => dispatch(setSidebarShow({ sidebarShow: val }))}
    >
      <CSidebarBrand className="d-md-flex d-none" to="/">
        <img src="/esport_first.svg" alt="Esport first logo" />
      </CSidebarBrand>
      <CSidebarNav>
        <CCreateElement
          items={navigation}
          components={{
            CSidebarNavDivider,
            CSidebarNavDropdown,
            CSidebarNavItem,
            CSidebarNavTitle,
          }}
        />
      </CSidebarNav>
    </CSidebar>
  );
};

export default React.memo(TheSidebar);
