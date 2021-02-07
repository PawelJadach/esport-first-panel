import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getAll } from '../redux/methods/users';

export const withUsers = (Component) => {
  const WithUsers = ({ getAll, users, isFetched, ...props }) => {
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
      setIsLoading(true);
      const getUsers = async () => {
        await getAll();
      };

      if (!isFetched) {
        getUsers();
      }

      setIsLoading(false);

      return () => setIsLoading(false);
    }, []);

    return (
      <Component users={{ list: users, isFetched, isLoading }} {...props} />
    );
  };

  const mapStateToProps = (state) => ({
    users: state.users.users,
    isFetched: state.users.isFetched,
  });

  const mapDispatch = {
    getAll,
  };

  return connect(mapStateToProps, mapDispatch)(WithUsers);
};
