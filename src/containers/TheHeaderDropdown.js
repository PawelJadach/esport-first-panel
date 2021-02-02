import React from 'react';
import PropTypes from 'prop-types';
import {
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CImg,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { logout } from '../redux/methods/auth';
import { connect } from 'react-redux';

const TheHeaderDropdown = ({ logout }) => {
  return (
    <CDropdown inNav className="c-header-nav-items" direction="down">
      <CDropdownToggle className="c-header-nav-link" caret={false}>
        <div className="c-avatar">
          <CImg
            src={'avatars/avatar-placeholder.png'}
            className="c-avatar-img"
            alt="admin@bootstrapmaster.com"
          />
        </div>
      </CDropdownToggle>
      <CDropdownMenu placement="bottom-end">
        <CDropdownItem onClick={logout}>
          <CIcon name="cil-lock-locked" />
          Wyloguj
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  );
};

TheHeaderDropdown.propTypes = {
  logout: PropTypes.func,
};

const mapDispatch = {
  logout,
};

export default connect(null, mapDispatch)(TheHeaderDropdown);
