import React from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';
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
  const role = useSelector((state) => state.auth.user.role);

  const filteredNavs = navigation.filter((item) => {
    if (item.roles) {
      return item.roles.includes(role);
    } else {
      return true;
    }
  });

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
          items={filteredNavs}
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
