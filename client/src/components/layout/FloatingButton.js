import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'sticky',
    bottom: 0,
    right: 0,
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function FloatingActionButtons() {
  const classes = useStyles();

  return (
    <Fab color='primary' aria-label='add' className={classes.root}>
      <AddIcon />
    </Fab>
  );
}
