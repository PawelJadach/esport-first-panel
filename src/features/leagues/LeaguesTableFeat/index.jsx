import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeLeague } from '../../../redux/methods/leagues';

import LeaguesTable from '../../../components/tables/LeaguesTable';
import Spinner from '../../../reusable/Spinner';

import { League } from '../../../propTypes/user';
import { withLeagues } from '../../../hoc/withLeagues';

const propTypes = {
  leagues: PropTypes.shape({
    list: PropTypes.arrayOf(League),
    isFetched: PropTypes.bool,
    isLoading: PropTypes.bool,
  }),
  handleEdit: PropTypes.func,
  removeLeague: PropTypes.func,
};

const LeaguesTableFeat = ({
  leagues: { list, isLoading },
  handleEdit,
  removeLeague,
}) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <LeaguesTable
      handleEdit={handleEdit}
      handleRemove={(league) => removeLeague(league.id)}
      leagues={list}
    />
  );
};

LeaguesTableFeat.propTypes = propTypes;

const mapDispatch = {
  removeLeague,
};

export default withLeagues(connect(null, mapDispatch)(LeaguesTableFeat));
