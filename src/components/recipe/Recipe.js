import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getRecipe } from '../../redux/actions';
import RecipeBody from './RecipeBody';
import RecipeTable from './RecipeTable';
import RecipeIngredients from './RecipeIngredients';

const Recipe = ({ match, getRecipe, currentRecipe }) => {
  const passedTitle = match.params.title;
  const passedSource = match.params.source;
  const passedTime = match.params.time;

  useEffect(() => {
    getRecipe(passedTitle);
    //eslint-disable-next-line
  }, []);

  return (
    <>
      {currentRecipe
        .filter(
          r =>
            //eslint-disable-next-line
            r.recipe.source === passedSource && r.recipe.totalTime == passedTime
        )
        .map(r => (
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
  getRecipe: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    currentRecipe: state.recipes.currentRecipe
  };
};

export default connect(mapStateToProps, { getRecipe })(Recipe);
