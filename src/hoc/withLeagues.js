import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getAll } from '../redux/methods/leagues';

export const withLeagues = (Component) => {
  const WithLeagues = ({ getAll, leagues, isFetched, ...props }) => {
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
      setIsLoading(true);
      const getLeagues = async () => {
        await getAll();
      };

      if (!isFetched) {
        getLeagues();
      }

      setIsLoading(false);

      return () => setIsLoading(false);
    }, []);

    return (
      <Component leagues={{ list: leagues, isFetched, isLoading }} {...props} />
    );
  };

  const mapStateToProps = (state) => ({
    leagues: state.leagues.leagues,
    isFetched: state.leagues.isFetched,
  });

  const mapDispatch = {
    getAll,
  };

  return connect(mapStateToProps, mapDispatch)(WithLeagues);
};
