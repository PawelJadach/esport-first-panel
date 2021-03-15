import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  getAll,
  removePersonById,
  updatePersonById,
} from '../../../redux/methods/persons';

import PersonsTable from '../../../components/tables/PersonsTable';
import Spinner from '../../../reusable/Spinner';

import { User } from '../../../propTypes/user';

const propTypes = {
  getAll: PropTypes.func,
  users: PropTypes.arrayOf(User),
  isFetched: PropTypes.bool,
  removePersonById: PropTypes.func,
  updatePersonById: PropTypes.func,
};

const UserTableFeat = ({
  isFetched,
  persons,
  getAll,
  removePersonById,
  updatePersonById,
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
    <PersonsTable
      remove={removePersonById}
      updatePerson={updatePersonById}
      persons={persons}
    />
  );
};

UserTableFeat.propTypes = propTypes;

const mapStateToProps = (state) => ({
  persons: state.persons.persons,
  isFetched: state.persons.isFetched,
});

const mapDispatch = {
  getAll,
  removePersonById,
};

export default connect(mapStateToProps, mapDispatch)(UserTableFeat);
