import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getRecipe, loadUser } from '../../redux/actions';
import RecipeBody from './RecipeBody';
import RecipeTable from './RecipeTable';
import RecipeIngredients from './RecipeIngredients';
import { Redirect } from 'react-router';
import SkeletonCurrent from '../layout/SkeletonCurrent';

const Recipe = ({
  match,
  getRecipe,
  currentRecipe,
  redirect,
  loading,
  loadUser,
}) => {
  const id = match.params.id;

  useEffect(() => {
    getRecipe(id);
    loadUser();
    //eslint-disable-next-line
  }, []);

  if (redirect === true) {
    return <Redirect to='/results' />;
  }

  if (loading || currentRecipe === null) {
    return <SkeletonCurrent />;
  }

  return (
    <>
      {currentRecipe && (
        <div>
          <RecipeBody recipe={currentRecipe} />
          {/* <RecipeIngredients recipe={currentRecipe} /> */}
          {/* <RecipeTable recipe={currentRecipe} /> */}
        </div>
      )}
    </>
  );
};

Recipe.propTypes = {
  currentRecipe: PropTypes.object.isRequired,
  getRecipe: PropTypes.func.isRequired,
  redirect: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  loadUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    currentRecipe: state.recipes.currentRecipe,
    redirect: state.recipes.redirect,
    loading: state.recipes.loading,
    isAuthenticated: state.auth.isAuthenticated,
  };
};

export default connect(mapStateToProps, { getRecipe, loadUser })(Recipe);
