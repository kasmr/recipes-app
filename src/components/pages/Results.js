import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { searchRecipes } from '../../redux/actions';
import PropTypes from 'prop-types';
import RecipeItem from '../recipes/RecipeItem';
import '../recipes/recipesList.scss';

const Results = ({ results, searchRecipes, query }) => {
  useEffect(() => {
    // fetchData();
    searchRecipes(query);

    //eslint-disable-next-line
  }, []);

  return (
    <div className='main-container'>
      {results.map(r => (
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
  searchedRecipes: PropTypes.array.isRequired,
  results: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    results: state.recipes.results,
    query: state.recipes.query
  };
};

export default connect(mapStateToProps, { searchRecipes })(Results);
