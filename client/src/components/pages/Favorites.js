import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getRecipes, showLoading } from '../../redux/actions';
import PropTypes from 'prop-types';
import RecipeItem from './RecipeItem';
import SkeletonGroup from '../layout/SkeletonGroup';
import './recipesList.scss';

const RecipesList = ({ stateRecipes, getRecipes, loading }) => {
  useEffect(() => {
    // fetchData();
    getRecipes();

    //eslint-disable-next-line
  }, []);

  if (loading || stateRecipes === null) {
    return <SkeletonGroup />;
  }

  return (
    <div className='main-container'>
      {stateRecipes.map((r) => (
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
