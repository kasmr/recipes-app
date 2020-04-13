import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { searchRecipes, loadUser } from '../../redux/actions';
import PropTypes from 'prop-types';
import '../recipes/recipesList.scss';
import { Redirect } from 'react-router';
import SkeletonGroup from '../layout/SkeletonGroup';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ResultItem from './ResultItem';

const useStyles = makeStyles((theme) => ({
  title: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '2rem',
    },
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
      <Typography
        className={classes.title}
        variant='h3'
        align='center'
      >{`Your search results for ${query}`}</Typography>
      <div className='main-container'>
        {results.map((recipe) => (
          <ResultItem recipe={recipe} />
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
