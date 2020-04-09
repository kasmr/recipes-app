import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const PrivateRoute = ({ component: Component, loading, token, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        !token && !loading ? <Redirect to='/login' /> : <Component {...props} />
      }
    />
  );
};

PrivateRoute.propTypes = {
  token: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  return {
    loading: state.auth.loading,
    token: state.auth.token,
  };
};

export default withRouter(
  connect(mapStateToProps, null, null, { pure: false })(PrivateRoute)
);
