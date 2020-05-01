import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  showLoading,
  getFavoriteRecipes,
  loadUser,
  getFavoriteIDS,
} from '../../redux/actions';
import PropTypes from 'prop-types';
import SkeletonGroup from '../layout/SkeletonGroup';
import '../../components/recipes/recipesList.scss';
import RecipeItem from '../recipes/RecipeItem';

const Favorites = ({
  favoriteIDS,
  favorites,
  getFavoriteRecipes,
  getFavoriteIDS,
  loading,
  loadUser,
}) => {
  useEffect(() => {
    loadUser();
    getFavoriteRecipes(favoriteIDS);
    //eslint-disable-next-line
  }, []);

  console.log(favorites);

  if (loading || favorites === null) {
    return <SkeletonGroup />;
  }

  return (
    <>
      <h1>Favorites</h1>
      <div className='main-container'>
        {favorites.map((recipe) => (
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
  getFavoriteIDS,
  loadUser,
})(Favorites);
