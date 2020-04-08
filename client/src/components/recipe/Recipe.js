import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getRecipe } from '../../redux/actions';
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
  isAuthenticated,
}) => {
  const passedTitle = match.params.title;
  const passedSource = match.params.source;
  const passedTime = match.params.time;

  useEffect(() => {
    getRecipe(passedTitle);
    //eslint-disable-next-line
  }, []);

  if (!isAuthenticated) {
    return <Redirect to='/login' />;
  }

  if (redirect === true) {
    return <Redirect to='/results' />;
  }

  if (loading || currentRecipe === null) {
    return <SkeletonCurrent />;
  }

  return (
    <>
      {currentRecipe
        .filter(
          (r) =>
            //eslint-disable-next-line
            r.recipe.source === passedSource && r.recipe.totalTime == passedTime
        )
        .map((r) => (
          <div key={r.recipe.uri}>
            <RecipeBody recipe={r.recipe} />
            <RecipeIngredients recipe={r.recipe} />
            <RecipeTable recipe={r.recipe} />
          </div>
        ))}
    </>
  );
};

Recipe.propTypes = {
  currentRecipe: PropTypes.array.isRequired,
  getRecipe: PropTypes.func.isRequired,
  redirect: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  return {
    currentRecipe: state.recipes.currentRecipe,
    redirect: state.recipes.redirect,
    loading: state.recipes.loading,
    isAuthenticated: state.auth.isAuthenticated,
  };
};

export default connect(mapStateToProps, { getRecipe })(Recipe);
