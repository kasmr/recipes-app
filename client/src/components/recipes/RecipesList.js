import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getRecipes, showLoading } from '../../redux/actions';
import PropTypes from 'prop-types';
import RecipeItem from './RecipeItem';
import SkeletonGroup from '../layout/SkeletonGroup';
import './recipesList.scss';

const RecipesList = ({ stateRecipes, getRecipes, loading }) => {
  useEffect(() => {
    getRecipes();
    //eslint-disable-next-line
  }, []);

  if (loading || stateRecipes === null) {
    return <SkeletonGroup />;
  }

  return (
    <div className='main-container'>
      {stateRecipes.map((recipe) => (
        <RecipeItem
          title={recipe.title}
          source={recipe.sourceName}
          author={recipe.author}
          diets={recipe.diets}
          healthScore={recipe.healthScore}
          summary={recipe.summary}
          time={recipe.readyInMinutes}
          id={recipe.id}
          image={recipe.image}
          key={recipe.id}
        />
      ))}
    </div>
  );
};

RecipesList.propTypes = {
  stateRecipes: PropTypes.array.isRequired,
  getRecipes: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  return {
    stateRecipes: state.recipes.recipes,
    loading: state.recipes.loading,
  };
};

export default connect(mapStateToProps, { getRecipes, showLoading })(
  RecipesList
);
