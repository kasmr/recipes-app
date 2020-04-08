import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const PrivateRoute = ({ component: Component, ...rest }) => {
  // Gave a try for redux hooks here
  const isAuthenticated = useSelector((state) => {
    return state.auth.isAuthenticated;
  });
  const loading = useSelector((state) => {
    return state.auth.loading;
  });

  return (
    <Route
      {...rest}
      render={(props) =>
        !isAuthenticated && !loading ? (
          <Redirect to='/login' />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

PrivateRoute.propTypes = {
  isAuthenticatied: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default PrivateRoute;
