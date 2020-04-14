import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { searchRecipes, loadUser } from '../../redux/actions';
import PropTypes from 'prop-types';
import '../recipes/recipesList.scss';
import { Redirect } from 'react-router';
import SkeletonGroup from '../layout/SkeletonGroup';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import RecipeItem from '../recipes/RecipeItem';

const useStyles = makeStyles((theme) => ({
  title: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '2rem',
      marginTop: '5rem',
      fontWeight: 'lighter',
    },
  },
  span: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
}));

const Results = ({ results, searchRecipes, query, loading, loadUser }) => {
  const classes = useStyles();

  useEffect(() => {
    loadUser();
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
    <>
      <Typography className={classes.title} align='center'>
        Your search results for <span className={classes.span}>"{query}"</span>
      </Typography>
      <div className='main-container'>
        {results.map((recipe) => (
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
    </>
  );
};

Results.propTypes = {
  results: PropTypes.array.isRequired,
  searchRecipes: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  loadUser: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => {
  return {
    results: state.recipes.results,
    query: state.recipes.query,
    loading: state.recipes.loading,
  };
};

export default connect(mapStateToProps, { searchRecipes, loadUser })(Results);
