import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { verify } from '../redux/methods/auth';
import { BrowserRouter as Router } from 'react-router-dom';

import AuthRouter from './AuthRouter';
import MainRouter from './MainRouter';
import Loading from '../components/Loading';

import { User } from '../propTypes/user';

const RootRouter = ({ user, afterVerification, verify }) => {
  useEffect(() => {
    verify();
  }, []);

  return afterVerification ? (
    <Router>{user ? <MainRouter /> : <AuthRouter />}</Router>
  ) : (
    <Loading />
  );
};

RootRouter.propTypes = {
  user: User,
  setAfterVerification: PropTypes.func,
  verify: PropTypes.func,
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
  afterVerification: state.auth.afterVerification,
});

const mapDispatch = {
  verify,
};

export default connect(mapStateToProps, mapDispatch)(RootRouter);
