import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getRecipes } from '../../redux/actions';
import PropTypes from 'prop-types';
import RecipeItem from './RecipeItem';
import './recipesList.scss';

const RecipesList = ({ stateRecipes, getRecipes }) => {
  useEffect(() => {
    // fetchData();
    getRecipes();

    //eslint-disable-next-line
  }, []);

  return (
    <div className='main-container'>
      {stateRecipes.map(r => (
        <RecipeItem
          image={r.recipe.image}
          title={r.recipe.label}
          source={r.recipe.source}
          labels={r.recipe.healthLabels}
          calories={r.recipe.calories}
          time={r.recipe.totalTime}
          key={r.recipe.uri}
        />
      ))}
    </div>
  );
};

RecipesList.propTypes = {
  stateRecipes: PropTypes.array.isRequired,
  getRecipes: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    stateRecipes: state.recipes.recipes
  };
};

export default connect(mapStateToProps, { getRecipes })(RecipesList);
