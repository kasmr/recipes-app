import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RecipesList from '../recipes/RecipesList';
import { loadUser, getFavoriteIDS } from '../../redux/actions';

const Home = ({ loadUser, getFavoriteIDS }) => {
  useEffect(() => {
    loadUser();
    getFavoriteIDS();
    //eslint-disable-next-line
  }, []);

  return <RecipesList />;
};

Home.propTypes = {
  loadUser: PropTypes.func.isRequired,
  getFavoriteIDS: PropTypes.func.isRequired,
};

export default connect(null, { loadUser, getFavoriteIDS })(Home);
