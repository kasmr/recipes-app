import React from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';

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

const FloatingButtonAdd = ({ addFavorite, recipe }) => {
  const classes = useStyles();

  const { id } = recipe;

  const favorite = {
    favoriteID: id,
  };

  return (
    <DarkTooltip title='Add to favorites'>
      <Fab
        className={classes.fab}
        color='primary'
        aria-label='add'
        onClick={() => addFavorite(favorite)}
      >
        <AddIcon />
      </Fab>
    </DarkTooltip>
  );
};

export default FloatingButtonAdd;
