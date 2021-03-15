import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { removeUserById, changeRole } from '../../../redux/methods/users';

import UserTable from '../../../components/tables/UserTable';
import Spinner from '../../../reusable/Spinner';

import { WithUsersHocPropTypes } from '../../../propTypes/user';
import { withUsers } from '../../../hoc/withUsers';

const propTypes = {
  users: WithUsersHocPropTypes,
  removeUserById: PropTypes.func,
  changeRole: PropTypes.func,
  setUserToEdit: PropTypes.func,
};

const UserTableFeat = ({
  users,
  removeUserById,
  changeRole,
  setUserToEdit,
}) => {
  return users.isLoading ? (
    <Spinner />
  ) : (
    users.isFetched && (
      <UserTable
        remove={removeUserById}
        changeRole={changeRole}
        users={users.list}
        setUserToEdit={setUserToEdit}
      />
    )
  );
};

UserTableFeat.propTypes = propTypes;

const mapDispatch = {
  removeUserById,
  changeRole,
};

export default withUsers(connect(null, mapDispatch)(UserTableFeat));
