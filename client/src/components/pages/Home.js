import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RecipesList from '../recipes/RecipesList';
import { Redirect } from 'react-router';
import { loadUser } from '../../redux/actions';

const Home = ({ redirect, loadUser }) => {
  useEffect(() => {
    loadUser();
    //eslint-disable-next-line
  }, []);

  if (redirect === true) {
    return <Redirect to='/results' />;
  }

  return <RecipesList />;
};

Home.propTypes = {
  redirect: PropTypes.bool.isRequired,
  loadUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    redirect: state.recipes.redirect,
  };
};

export default connect(mapStateToProps, { loadUser })(Home);
