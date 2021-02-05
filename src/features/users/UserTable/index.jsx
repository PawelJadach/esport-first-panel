import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  getAll,
  removeUserById,
  changeRole,
} from '../../../redux/methods/users';

import UserTable from '../../../components/UserTable';
import Spinner from '../../../reusable/Spinner';

import { User } from '../../../propTypes/user';

const propTypes = {
  getAll: PropTypes.func,
  users: PropTypes.arrayOf(User),
  isFetched: PropTypes.bool,
  removeUserById: PropTypes.func,
  changeRole: PropTypes.func,
};

const UserTableFeat = ({
  isFetched,
  users,
  getAll,
  removeUserById,
  changeRole,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const get = async () => {
      await getAll();
    };

    if (!isFetched) {
      get();
    }
    setIsLoading(false);
  }, []);

  return isLoading ? (
    <Spinner />
  ) : (
    <UserTable remove={removeUserById} changeRole={changeRole} users={users} />
  );
};

UserTableFeat.propTypes = propTypes;

const mapStateToProps = (state) => ({
  users: state.users.users,
  isFetched: state.users.isFetched,
});

const mapDispatch = {
  getAll,
  removeUserById,
  changeRole,
};

export default connect(mapStateToProps, mapDispatch)(UserTableFeat);
