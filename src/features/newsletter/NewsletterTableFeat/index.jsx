import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  getAll,
  removeNewsletterById,
} from '../../../redux/methods/newsletter';

import Spinner from '../../../reusable/Spinner';
import NewsletterTable from '../../../components/tables/NewsletterTable';

import { Newsletter } from '../../../propTypes/user';

const propTypes = {
  getAll: PropTypes.func,
  newsletter: PropTypes.arrayOf(Newsletter),
  isFetched: PropTypes.bool,
  removeNewsletterById: PropTypes.func,
};

const NewsletterTableFeat = ({
  isFetched,
  newsletter,
  getAll,
  removeNewsletterById,
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
    <NewsletterTable remove={removeNewsletterById} newsletter={newsletter} />
  );
};

NewsletterTableFeat.propTypes = propTypes;

const mapStateToProps = (state) => ({
  newsletter: state.newsletter.newsletter,
  isFetched: state.newsletter.isFetched,
});

const mapDispatch = {
  getAll,
  removeNewsletterById,
};

export default connect(mapStateToProps, mapDispatch)(NewsletterTableFeat);
