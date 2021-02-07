import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getAll } from '../redux/methods/persons';

export const withPersons = (Component) => {
  const WithPersons = ({ getAll, persons, isFetched, ...props }) => {
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
      setIsLoading(true);
      const getPersons = async () => {
        await getAll();
      };

      if (!isFetched) {
        getPersons();
      }

      setIsLoading(false);

      return () => setIsLoading(false);
    }, []);

    return (
      <Component persons={{ list: persons, isFetched, isLoading }} {...props} />
    );
  };

  const mapStateToProps = (state) => ({
    persons: state.persons.persons,
    isFetched: state.persons.isFetched,
  });

  const mapDispatch = {
    getAll,
  };

  return connect(mapStateToProps, mapDispatch)(WithPersons);
};
