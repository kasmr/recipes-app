import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RecipesList from '../recipes/RecipesList';
import { Redirect } from 'react-router';

const Home = ({ redirect }) => {
  if (redirect === true) {
    return <Redirect to='/results' />;
  }

  return <RecipesList />;
};

Home.propTypes = {
  redirect: PropTypes.bool.isRequired
};

const mapStateToProps = state => {
  return {
    redirect: state.recipes.redirect
  };
};

export default connect(mapStateToProps, null)(Home);
