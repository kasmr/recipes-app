import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { searchRecipes, loadUser } from '../../redux/actions';
import PropTypes from 'prop-types';
import RecipeItem from '../recipes/RecipeItem';
import '../recipes/recipesList.scss';
import { Redirect } from 'react-router';
import SkeletonGroup from '../layout/SkeletonGroup';

const Results = ({ results, searchRecipes, query, loading, loadUser }) => {
  useEffect(() => {
    loadUser()
    searchRecipes(query);

    //eslint-disable-next-line
  }, [query]);

  if (query === '') {
    return <Redirect to='/' />;
  }

  if (loading) {
    return <SkeletonGroup />;
  }

  return (
    <div className='main-container'>
      {results.map((r) => (
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

Results.propTypes = {
  results: PropTypes.array.isRequired,
  searchRecipes: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  loadUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    results: state.recipes.results,
    query: state.recipes.query,
    loading: state.recipes.loading,
  };
};

export default connect(mapStateToProps, { searchRecipes, loadUser })(Results);
