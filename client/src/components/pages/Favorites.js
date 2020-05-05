import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { showLoading, getFavoriteRecipes, loadUser } from '../../redux/actions';
import PropTypes from 'prop-types';
import SkeletonGroup from '../layout/SkeletonGroup';
import '../../components/recipes/recipesList.scss';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import RecipeItem from '../recipes/RecipeItem';

const Favorites = ({
  favoriteIDS,
  favorites,
  getFavoriteRecipes,
  loading,
  loadUser,
}) => {
  const classes = useStyles();

  useEffect(() => {
    loadUser();
    getFavoriteRecipes(
      favoriteIDS
        .map((item) => item.recipeID)
        .sort()
        .filter((item, pos, ary) => !pos || item !== ary[pos - 1])
    );
    //eslint-disable-next-line
  }, []);

  if (loading || favorites === null) {
    return <SkeletonGroup />;
  }

  return (
    <>
      <Typography className={classes.title} align='center'>
        Your favorties:
      </Typography>
      <div className='main-container'>
        {favorites.map((recipe, i) => (
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

Favorites.propTypes = {
  loadUser: PropTypes.func.isRequired,
  showLoading: PropTypes.func.isRequired,
  favoritesIDS: PropTypes.array,
  getFavorites: PropTypes.func,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  return {
    favoriteIDS: state.auth.favoriteIDS,
    favorites: state.recipes.favorites,
    loading: state.recipes.loading,
  };
};

export default connect(mapStateToProps, {
  getFavoriteRecipes,
  showLoading,
  loadUser,
})(Favorites);

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: '5rem',
    fontSize: '2rem',
    [theme.breakpoints.down('sm')]: {
      fontWeight: 'lighter',
    },
  },
}));
