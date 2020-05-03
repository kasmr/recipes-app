import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getRecipe, loadUser, addFavorite } from '../../redux/actions';
import RecipeBody from './RecipeBody';
import RecipeTable from './RecipeTable';
import RecipeInstructions from './RecipeInstructions';
import SkeletonCurrent from '../layout/SkeletonCurrent';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FloatingButtonAdd from '../layout/FloatingButtonAdd';

const Recipe = ({
  match,
  getRecipe,
  currentRecipe,
  loading,
  loadUser,
  addFavorite,
}) => {
  const classes = useStyles();
  const id = match.params.id;

  useEffect(() => {
    getRecipe(id);
    loadUser();
    //eslint-disable-next-line
  }, []);

  if (loading || currentRecipe === null) {
    return <SkeletonCurrent />;
  }

  return (
    <>
      <Container className={classes.container}>
        {currentRecipe && (
          <div>
            <RecipeBody recipe={currentRecipe} />
            <RecipeInstructions recipe={currentRecipe} />
            <RecipeTable recipe={currentRecipe} />
            <FloatingButtonAdd
              id={id}
              addFavorite={addFavorite}
              recipe={currentRecipe}
            />
          </div>
        )}
      </Container>
    </>
  );
};

Recipe.propTypes = {
  currentRecipe: PropTypes.object.isRequired,
  getRecipe: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  loadUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    currentRecipe: state.recipes.currentRecipe,
    loading: state.recipes.loading,
    isAuthenticated: state.auth.isAuthenticated,
  };
};

export default connect(mapStateToProps, {
  getRecipe,
  loadUser,
  addFavorite,
})(Recipe);

const useStyles = makeStyles((theme) => ({
  container: {
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
}));
