import React from 'react';
import PropTypes from 'prop-types';
import { CBadge, CButton, CButtonGroup, CDataTable } from '@coreui/react';
import CIcon from '@coreui/icons-react';

import { User } from '../../propTypes/user';

const propTypes = {
  users: PropTypes.arrayOf(User),
};

const UserTable = ({ users, remove, changeRole }) => {
  const fields = [
    { key: 'email', _style: { width: '50%' } },
    { key: 'role', _style: { width: '50%' } },
    {
      key: 'actions',
      label: '',
      _style: { width: '1%' },
      sorter: false,
      filter: false,
    },
  ];

  const userRoleBadges = {
    0: 'success',
    1: 'secondary',
  };

  const userRoleString = {
    0: 'Admin',
    1: 'Moderator',
  };

  const handleChangeRole = (item) => () => {
    changeRole(item.id, item.role === 1 ? 0 : 1);
  };

  const handleRemove = (item) => () => {
    remove(item.id);
  };

  return (
    <CDataTable
      items={users}
      fields={fields}
      tableFilter
      itemsPerPage={20}
      hover
      pagination
      scopedSlots={{
        role: (user) => (
          <td>
            <CBadge color={userRoleBadges[user.role]}>
              {userRoleString[user.role]}
            </CBadge>
          </td>
        ),
        actions: (item) => {
          return (
            <td>
              <CButtonGroup>
                <CButton
                  color="primary"
                  variant="outline"
                  size="sm"
                  onClick={handleChangeRole(item)}
                >
                  Role
                </CButton>
                <CButton color="danger" size="sm" onClick={handleRemove(item)}>
                  Remove
                </CButton>
              </CButtonGroup>
            </td>
          );
        },
      }}
    />
  );
};

UserTable.propTypes = propTypes;

export default UserTable;
