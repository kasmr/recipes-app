import React, { useState, useEffect } from 'react';
import Fab from '@material-ui/core/Fab';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Alert from './Alert';

const FloatingButtonAdd = ({ addFavorite, id, recipe: { title } }) => {
  const classes = useStyles();

  const [added, setAdded] = useState(false);

  const [current, setCurrent] = useState({
    recipeID: '',
    title: '',
  });

  useEffect(() => {
    setCurrent({ recipeID: id, title: title });
    //eslint-disable-next-line
  }, []);

  const addRecipe = () => {
    addFavorite(current);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
    }, 6000);
  };

  return (
    <>
      {added && <Alert error='Successfuly added to favorites' type='success' />}
      <DarkTooltip title='Add to favorites'>
        <Fab
          className={classes.fab}
          color='primary'
          aria-label='add'
          onClick={addRecipe}
        >
          <FavoriteIcon />
        </Fab>
      </DarkTooltip>
    </>
  );
};

export default FloatingButtonAdd;

const useStyles = makeStyles((theme) => ({
  fab: {
    position: 'sticky',
    bottom: theme.spacing(2),
    left: '95%',
  },
}));

const DarkTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: 'rgba(0, 0, 0, 0.87)',
    color: '#fff',
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}))(Tooltip);
