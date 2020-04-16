import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  showLoading,
  getFavorites,
  getIDS,
  loadUser,
} from '../../redux/actions';
import PropTypes from 'prop-types';
import SkeletonGroup from '../layout/SkeletonGroup';
import '../../components/recipes/recipesList.scss';
import RecipeItem from '../recipes/RecipeItem';

const Favorites = ({
  favoritesIDS,
  favorites,
  getFavorites,
  loading,
  getIDS,
  loadUser,
}) => {
  useEffect(() => {
    loadUser();
    getIDS();
    console.log(favoritesIDS);
    // fetchData();
    //eslint-disable-next-line
  }, []);

  if (loading || favorites === null) {
    return <SkeletonGroup />;
  }

  return (
    <>
      <h1>Favorites</h1>
      {/* <div className='main-container'>
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
      </div> */}
    </>
  );
};

Favorites.propTypes = {
  favoritesIDS: PropTypes.array.isRequired,
  getFavorites: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  return {
    favoritesIDS: state.recipes.favoritesIDS,
    favorites: state.recipes.favorites,
    loading: state.recipes.loading,
  };
};

export default connect(mapStateToProps, {
  getFavorites,
  showLoading,
  getIDS,
  loadUser,
})(Favorites);
