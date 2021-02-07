import React from 'react';
import PropTypes from 'prop-types';
import { CBadge, CButton, CButtonGroup, CDataTable } from '@coreui/react';

import { User } from '../../propTypes/user';

const propTypes = {
  users: PropTypes.arrayOf(User),
  setUserToEdit: PropTypes.func,
  changeRole: PropTypes.func,
  remove: PropTypes.func,
};

const UserTable = ({ users, remove, changeRole, setUserToEdit }) => {
  const fields = [
    { key: 'email', _style: { width: '20%' } },
    { key: 'role', _style: { width: '20%' } },
    { key: 'name', _style: { width: '20%' } },
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

  const handleChangeRole = (user) => () => {
    changeRole(user.id, user.role === 1 ? 0 : 1);
  };

  const handleRemove = (user) => () => {
    remove(user.id);
  };

  const handleSetUserToEdit = (user) => () => {
    setUserToEdit(user);
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
        name: (user) => (
          <td>
            <CBadge color="primary">
              {user.person && `${user.person.name} ${user.person.surname}`}
            </CBadge>
          </td>
        ),
        actions: (user) => {
          return (
            <td>
              <CButtonGroup>
                <CButton
                  color="success"
                  size="sm"
                  onClick={handleChangeRole(user)}
                >
                  Role
                </CButton>
                <CButton
                  color="info"
                  size="sm"
                  onClick={handleSetUserToEdit(user)}
                >
                  Edit
                </CButton>
                <CButton color="danger" size="sm" onClick={handleRemove(user)}>
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
